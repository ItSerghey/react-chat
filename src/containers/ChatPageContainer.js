import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import ChatPage from '../Pages/ChatPage';
import { logout } from '../actions/auth';
import { fetchAllChats, 
  fetchMyChats, 
  setActiveChat, 
  createChat, 
  deleteChat, 
  joinChat, 
  leaveChat, }  from '../actions/chatManage';
  import { 
    sendMessage, 
    mountChat, 
    unmountChat, 
    socketsConnect } from '../actions/sockets'
  import { editUser } from '../actions/user';
import * as fromChats from '../reducers/chats_reduser';
import * as fromState from '../reducers';

const mapStateToProps = state => {
  const activeChat = fromChats.getById(state.chats, state.chats.activeId);

  return {
    isAuthenticated: state.auth.isAuthenticated,
    chats: {
      active: activeChat,
      my: fromChats.getByIds(state.chats, state.chats.myIds),
      all: fromChats.getByIds(state.chats, state.chats.allIds),
    },
    activeUser: {
      ...state.auth.user,
      isMember: fromState.isMember(state, activeChat),
      isCreator: fromState.isCreator(state, activeChat),
      isChatMember: fromState.isChatMember(state, activeChat),
    },
    messages: state.messages,
    error: state.services.errors.chat,
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  createChat,
   logout,
   deleteChat,
   joinChat,
   leaveChat,
  sendMessage,
   editUser,
  mountChat,
  unmountChat,
  socketsConnect
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);
