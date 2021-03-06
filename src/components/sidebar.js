import React from "react";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import RestoreIcon from "material-ui-icons/Restore";
import ExploreIcon from "material-ui-icons/Explore";
import AddChatButton from "./AddChatButton";
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

import ChatList from "./ChatList";

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: 320
  },

  newChatButton: {
    position: "absolute",
    left: "auto",
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48 // + bottom navigation
  },

  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  }
});

class Sidebar extends React.Component {
  state = {
    searchValue: '',
    activeTab: 0,
  }

  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }

  handleTabChange = (event, value) => {
    this.setState({
      activeTab: value,
    })
  }

  filterChats = (chats) => {
    const { searchValue } = this.state;

    return chats.filter(chat => chat.title.toLowerCase().includes(searchValue.toLowerCase())
    )
      .sort((one, two) =>
        one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1
      );
  }

  render() {

    const { classes, chats, createChat, isConnected } = this.props;
    const { activeTab, searchValue } = this.state;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <TextField
            fullWidth
            margin="normal"
            placeholder="Search chats..."
            value={searchValue}
            onChange={this.handleSearchChange} />
        </div>
        <Divider />
        <ChatList
          disabled={!isConnected}
          chats={this.filterChats(activeTab === 0 ? chats.my : chats.all)}
          activeChat={chats.active} />
        <AddChatButton onClick={createChat} disabled={!isConnected} />

        <BottomNavigation
          value={activeTab}
          onChange={this.handleTabChange}
          showLabels>
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
      </Drawer>
    );
  }
}
export default withStyles(styles)(Sidebar);
