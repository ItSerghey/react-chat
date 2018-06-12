import { combineReducers } from 'redux';
import auth from './auth_reduser';
import chats from './chats_reduser';
import messages from './messages_reduser';
import services from './services_reduser';

export default combineReducers({
  auth,
  chats,
  messages,
  services,
});


export const getActiveUser = state => state.auth.user;
// eslint-disable-next-line
export const getUserId = user => user._id;

export const isCreator = (state, chat) => {
  try {
    return getUserId(chat.creator) === getUserId(getActiveUser(state));
  } catch (e) {
    return false;
  }
};

export const isMember = (state, chat) => {
  try {
    return chat.members.some(member => getUserId(member) === getUserId(getActiveUser(state)));
  } catch (e) {
    return false;
  }
};

export const isChatMember = (state, chat) => isCreator(state, chat) || isMember(state, chat);
