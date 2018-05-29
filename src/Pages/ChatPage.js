import React from 'react';
import {  messages } from "../mock-data";
import Sidebar from "../components/sidebar";
import ChatHeader from "../components/ChatHeader";
import Chat from "../components/Chat";


class ChatPage extends React.Component{
  componentDidMount(){
    const {fetchAllChats, fetchMyChats} = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ])
  }

  render(){

    const {chats,createChat} = this.props;
    console.log(chats);
    return(
      <React.Fragment>
      <ChatHeader />
      <Sidebar createChat={createChat} chats={chats} />
      <Chat messages={messages}/>
    </React.Fragment>
    )
  }
}



export default ChatPage;
