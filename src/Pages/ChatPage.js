import React from 'react';

import { chats, messages } from "../mock-data";
import Sidebar from "../components/sidebar";
import ChatHeader from "../components/ChatHeader";
import Chat from "../components/Chat";
import { Redirect } from 'react-router-dom';

class ChatPage extends React.Component{

  render(){
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return (<Redirect to="/" />);
    }
    return(
      <React.Fragment>
      <ChatHeader />
      <Sidebar chats={chats} />
      <Chat messages={messages}/>
    </React.Fragment>
    )
  }
}



export default ChatPage;
