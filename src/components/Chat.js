import React from 'react';
import { withStyles } from 'material-ui/styles';


import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
//---------------------------------
import classnames from 'classnames'
import titleInitials from '../utils/title-initials';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';

const styles = theme => ({
  messagesWrapper: {
    overflow: 'auto',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 400px)`,
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff'
  },
});

class Chat extends React.Component {
  constructor(props){
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
  
    const messagesWrapper = this.refMessagesWrapper.current;// this.refs.messagesWrapper;
    if (messagesWrapper) {
      messagesWrapper.scrollTop =messagesWrapper.scrollHeight;
    }
  }
  
  render() {
    const { classes, messages } = this.props; 

    return (
      <main className={classes.chatLayout}  >
        <div className={classes.messagesWrapper} ref={this.refMessagesWrapper} >
          {messages && messages.map((message, index) => {
            const isMessageFromMe = message.sender === 'me';

            const userAvatar = (
              <Avatar>
                {titleInitials(message.sender)}
              </Avatar>
            );

            return (
              // <div className={classNames(classes.messageWrapper, isMessageFromMe && classes.messageWrappperFromMe)}>
              <div key={index} className={classnames(
                classes.messageWrapper,
                isMessageFromMe && classes.messageWrappperFromMe)}>
                {!isMessageFromMe && userAvatar}
                <Paper className={classnames(
                  classes.message,
                  isMessageFromMe && classes.messageFromMe)}>
                  <Typography variant="caption">
                    {message.sender}
                  </Typography>
                  <Typography variant="body1">
                    {message.content}
                  </Typography>
                </Paper>
                {isMessageFromMe && userAvatar}
              </div>
            );
          })}
        </div>
        <div className={classes.messageInputWrapper}>
          <Paper className={classes.messageInput} elevation={6}>
            <Input fullWidth placeholder="Type your message…" />
          </Paper>
        </div>
      </main>
    );
    }
  }
    export default withStyles(styles)(Chat);
