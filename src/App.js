import React from 'react';
import { withStyles } from 'material-ui/styles';

import { chats, messages } from './mock-data';


import Sidebar from './components/sidebar'
import ChatHeader from './components/ChatHeader'
import Chat from './components/Chat'
const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
  
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  }
});
class App extends React.Component {
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
    const { classes } = this.props;



    return (

      <div className={classes.root}>

<ChatHeader/>
        <Sidebar chats={chats}/>
        <Chat messages={messages}/>

      </div>

    );
  }
}



export default withStyles(styles)(App);
