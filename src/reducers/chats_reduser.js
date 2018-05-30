import * as types from '../constants/chat_const';
import {combineReducers} from 'redux';

const InitialState = {
activeId:'',
allIds:[],
myIds:[],
byIds:{},

};

const activeId = (state= InitialState.activeId,action)=>{
  switch (action.type){
    case types.SET_ACTIVE_CHAT:
    return action.payload.chat._id;
    case types.JOIN_CHAT_SUCCESS:
    // ...
    return state;
  case types.UNSET_ACTIVE_CHAT:
    return '';
  default:
    return state;
  }
}


const allIds = (state= InitialState.allIds,action)=>{
  switch (action.type) {
    case types.FETCH_ALL_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case types.CREATE_CHAT_SUCCESS:
      return [...state, getChatId(action.payload.chat)];
    case types.JOIN_CHAT_SUCCESS:
      // ...
    case types.LEAVE_CHAT_SUCCESS:
      // ...
    case types.DELETE_CHAT_SUCCESS:
      // ...
    default:
      return state;
  }
}
const myIds = (state= InitialState.myIds,action)=>{
  switch (action.type) {
    case types.FETCH_MY_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case types.JOIN_CHAT_SUCCESS:
    case types.CREATE_CHAT_SUCCESS:
    return [...state, getChatId(action.payload.chat)];
    case types.LEAVE_CHAT_SUCCESS:
      // ...
    case types.DELETE_CHAT_SUCCESS:
      // ...
    default:
      return state;
  }
}
const byIds = (state= InitialState.byIds,action)=>{
  switch (action.type) {
    case types.CREATE_CHAT_SUCCESS:
      return {
        ...state,
        [getChatId(action.payload.chat)]: action.payload.chat,
      };
    case types.FETCH_ALL_CHATS_SUCCESS:
    case types.FETCH_MY_CHATS_SUCCESS:
      return {
        ...state,
        ...action.payload.chats.reduce((ids, chat) => ({
          ...ids,
          [chat._id]: chat,
        }), {}),
      }

      // ...
    case types.JOIN_CHAT_SUCCESS:
      // ...
    case types.LEAVE_CHAT_SUCCESS:
      // ...
    case types.DELETE_CHAT_SUCCESS:
      // ...
    default:
      return state;
  }
}

export default combineReducers({
  activeId,
  allIds,
  myIds,
  byIds,

})

export const getChatId = (chat) => chat._id;
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);
