import {combineReducers} from 'redux'
import auth from './auth_reduser';
import chats from './chats_reduser';

export default combineReducers({
  auth,
  chats,
});
