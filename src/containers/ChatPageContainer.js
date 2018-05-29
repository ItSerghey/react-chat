import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import ChatPage from '../Pages/ChatPage';
import {fetchAllChats,fetchMyChats,setActiveChat,createChat} from '../actions/chatManage'
import * as fromChats from '../reducers/chats_reduser';

const mapStateToProps = state => ({
  chats: fromChats.getByIds(state.chats, state.chats.allIds)
  // messages
  // activeUser
  //   isMember — active user is a member of chat
  //   isCreator — active user is a creator of chat
  //   isChatMember — isMember || isCreator
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  createChat,
  // logout,
  // createChat,
  // deleteChat,
  // joinChat,
  // leaveChat,
  // sendMessage
  // editUser,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);
