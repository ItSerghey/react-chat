import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  AddChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
});

const AddChatButton = ({ classes }) => (
  <Button
    variant="fab"
    color="primary"
    className={classes.AddChatButton}
  >
    <AddIcon />
  </Button>
);

export default withStyles(styles)(AddChatButton);
