import React from 'react';
import Sidebar from "../components/sidebar";
import ChatHeader from "../components/ChatHeader";
import Chat from "../components/Chat";
import ErrorMessage from '../components/ErrorMessage';

class ChatPage extends React.Component {
  componentDidMount() {
    const { match, fetchAllChats, fetchMyChats, setActiveChat, socketsConnect, mountChat } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ])
      .then(() => {
        socketsConnect();
      })
      .then(() => {
        const { chatId } = match.params;
        //If we pass a chatId, then fetch messages from chat
        if (chatId) {
          setActiveChat(chatId);
          mountChat(chatId);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params }, setActiveChat, unmountChat, mountChat } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(nextParams.chatId);
    }
  }

  render() {

    const {
      chats, activeUser, logout, editUser,
      createChat, joinChat, leaveChat, deleteChat,
      sendMessage, error, messages, isConnected } = this.props;
    return (
      <React.Fragment>
        <ChatHeader
          isConnected={isConnected}
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          logout={logout}
          editUser={editUser}
        />
        <Sidebar
          isConnected={isConnected}
          createChat={createChat}
          chats={chats} />
        <Chat
          isConnected={isConnected}
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
        <ErrorMessage error={error} />
      </React.Fragment>
    )
  }
}



export default ChatPage;
