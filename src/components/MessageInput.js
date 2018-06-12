import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: 'calc(100% - 304px)',
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
});

class MessageInput extends React.Component {
  state = {
    value: '',
  }

  handleValueChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  handleKeyPress = (event) => {
    const { value } = this.state;

    if (event.key === 'Enter' && value) {
      this.props.sendMessage(value);
      this.setState({ value: '' });
    }
  }

  render() {
    const {
      classes, showJoinButton, onJoinButtonClick, disabled,
    } = this.props;

    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={6}>
          {showJoinButton ? (
            <Button
              disabled={disabled}
              fullWidth
              variant="raised"
              color="primary"
              onClick={onJoinButtonClick}
            >
              Join
            </Button>
          ) : (
            <Input
              disabled={disabled}
              fullWidth
              placeholder="Type your message…"
              value={this.state.value}
              onChange={this.handleValueChange}
              onKeyPress={this.handleKeyPress}
            />
            )}
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(MessageInput);
