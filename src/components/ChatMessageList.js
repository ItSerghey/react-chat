import React from "react";
import { withStyles } from "material-ui/styles";

import ChatMessage from "./ChatMessage";

const styles = theme => ({
  messagesWrapper: {
    overflow: "auto",
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: "120px"
  }
});

class ChatMessageList extends React.Component {
  constructor(props) {
    super(props);
    this.refMessagesWrapper = React.createRef();
  }

  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refMessagesWrapper.current; // this.refs.messagesWrapper;
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages } = this.props;

    return (
      <div className={classes.messagesWrapper} ref={this.refMessagesWrapper}>
        {messages &&
          messages.map((message, index) =>
            <ChatMessage key={index} {...message} />
          )}
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
