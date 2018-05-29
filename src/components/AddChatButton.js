import React from "react";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  AddChatButton: {
    position: "absolute",
    left: "auto",
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48 // + bottom navigation
  }
});

class AddChatButton extends React.Component {
  constructor(props) {
    super(props);
    this.createChat = props;
  }

  state = {
    open: false,
    chatName: {
      value: "",
      isValid: true
    }
  };

  validate = () => {
    const { chatName } = this.state;
    const isValid = chatName.value !== "";

    this.setState({
      chatName: { ...chatName, isValid }
    });

    return isValid;
  };

  handleInputChange = event => {
    this.setState({
      chatName: {
        value: event.target.value,
        isValid: true
      }
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAddChat = event => {
    event.preventDefault();

    const { chatName } = this.state;
    if (!this.validate()) {
      return;
    }

    this.props.onClick(chatName.value);
    //this.setState({ open: false });

    this.setState({
      open: false,
      chatName: {
        value: "",
        isValid: true
      }
    });
  };

  render() {
    const { classes, createChat } = this.props;
    const { chatName } = this.state;

    return (
      <div>
        <Button
          onClick={this.handleClickOpen}
          variant="fab"
          color="primary"
          className={classes.AddChatButton}
        >
          <AddIcon />
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">ДОБАВИТЬ ЧАТ</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="chatName"
              label="укажите название чата"
              type="text"
              value={chatName.value}
              name="chatName"
              onChange={this.handleInputChange}
              error={!chatName.isValid}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              отмена
            </Button>
            <Button onClick={this.handleAddChat} color="primary">
              создать
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AddChatButton);
