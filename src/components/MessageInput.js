import React from "react";
import { withStyles } from "material-ui/styles";
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 304px)`,
    padding: theme.spacing.unit * 3
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
});

const MessageInput =({classes})=>(
  <div className={classes.messageInputWrapper}>
  <Paper className={classes.messageInput} elevation={6}>
    <Input fullWidth placeholder="Type your message…" />
  </Paper>
</div>
)

export default withStyles(styles)(MessageInput);
