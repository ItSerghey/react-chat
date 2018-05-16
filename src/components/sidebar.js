import React from "react";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import Search from "./SearchItem";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import RestoreIcon from "material-ui-icons/Restore";
import ExploreIcon from "material-ui-icons/Explore";
import AddChatButton from "./AddChatButton";

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
  }
});

const Sidebar = ({ classes, chats }) =>
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper
    }}
  >
    <Search />
    <ChatList chats={chats} />
    <AddChatButton />

    <BottomNavigation showLabels>
      <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
    </BottomNavigation>
  </Drawer>;

export default withStyles(styles)(Sidebar);
