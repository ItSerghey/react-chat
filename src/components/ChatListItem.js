import React from "react";
import moment from 'moment';
import Avatar from "./Avatar";
import { ListItem, ListItemText } from "material-ui/List";
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui';


const styles = theme => ({
  activeItem: {
    backgroundColor: theme.palette.grey[200],
  }
}); 
const ChatListItem = ({  classes, disabled, title, chatId, active, createdAt }) =>

  <ListItem 
  button
  component={Link}
  to={`/chat/${chatId}`}
  className={active ? classes.activeItem : ''}
  disabled={disabled}
  >
    <Avatar colorFrom={chatId}>
      {title} 
    </Avatar>
    <ListItemText primary={title} secondary={moment(createdAt).fromNow()}/>
  </ListItem>;

export default withStyles(styles)(ChatListItem);
