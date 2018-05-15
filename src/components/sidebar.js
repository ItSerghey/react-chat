import React from "react";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";
import BottomNavigation, {  BottomNavigationAction} from "material-ui/BottomNavigation";
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
  drawerHeader: {
   //...theme.toolbar,
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
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
    <div className={classes.drawerHeader}>
      <TextField fullWidth margin="normal" placeholder="Search chats..." />
    </div>
    <Divider />

    <ChatList chats={chats} />
   <AddChatButton/> 

    <BottomNavigation showLabels>
      <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
    </BottomNavigation>
  </Drawer>;

export default withStyles(styles)(Sidebar);
