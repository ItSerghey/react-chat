import React from "react";
import { withStyles } from "material-ui/styles";
import titleInitials from "../utils/title-initials";
import Avatar from "material-ui/Avatar";
import { ListItem, ListItemText } from "material-ui/List";

const styles = theme => ({
  // ...
});

const ChatListItem = ({ classes, item, key }) =>
  <ListItem key={key} button>
    <Avatar>
      {titleInitials(item.title)}
    </Avatar>
    <ListItemText primary={item.title} />
  </ListItem>;

export default withStyles(styles)(ChatListItem);
