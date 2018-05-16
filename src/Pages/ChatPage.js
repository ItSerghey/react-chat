import React from 'react';

import { chats, messages } from "../mock-data";
import Sidebar from "../components/sidebar";
import ChatHeader from "../components/ChatHeader";
import Chat from "../components/Chat";

const ChatPage = ({ classes}) => (
  <React.Fragment>
  <ChatHeader />
  <Sidebar chats={chats} />
  <Chat messages={messages}/>
</React.Fragment>
);

export default ChatPage;
