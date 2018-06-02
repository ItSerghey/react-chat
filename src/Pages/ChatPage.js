import React from 'react';
import Sidebar from "../components/sidebar";
import ChatHeader from "../components/ChatHeader";
import Chat from "../components/Chat";


class ChatPage extends React.Component {
  componentDidMount() {
    const { match, fetchAllChats, fetchMyChats, setActiveChat } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ]).then(() => {
      // If we pass a chatId, then fetch messages from chat
      if (match.params.chatId) {
        setActiveChat(match.params.chatId);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params }, setActiveChat } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
    }
  }

  render() {

    const {
      chats, activeUser, logout, editUser,
      createChat, joinChat, leaveChat, deleteChat, sendMessage,
      messages } = this.props;
    return (
      <React.Fragment>
        <ChatHeader
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          logout={logout}
          editUser={editUser}
        />
        <Sidebar
          createChat={createChat}
          chats={chats} />
        <Chat
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
      </React.Fragment>
    )
  }
}



export default ChatPage;
