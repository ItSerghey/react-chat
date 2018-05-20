import React from "react";
import Avatar from "./Avatar";
import { ListItem, ListItemText } from "material-ui/List";

const ChatListItem = ({ classes, item }) =>

  <ListItem button>
    <Avatar colorFrom={item.title}>
      {item.title} 
    </Avatar>
    <ListItemText primary={item.title} />
  </ListItem>;

export default ChatListItem;
