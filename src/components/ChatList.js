import React from "react";
import { withStyles } from "material-ui/styles";

import List from "material-ui/List";

import ChatListItem from "./ChatListItem";

const styles = theme => ({
  chatsList: {
    height: "calc(100% - 56px)",
    overflowY: "scroll"
  }
});

const ChatList = ({ classes, chats }) =>
  <List className={classes.chatsList}>
    {chats.map((chat, index) =>
     <ChatListItem item={chat} key={index} />
    )}
  </List>;

export default withStyles(styles)(ChatList);
