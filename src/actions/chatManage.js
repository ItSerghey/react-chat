import * as types from '../constants/chat_const';
import callApi from '../utils/call-api';
import {redirect} from './services';

export function fetchMyChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: types.FETCH_MY_CHATS_REQUEST
    })
    return callApi('/chats/my', token)
      .then(data => dispatch({
        type: types.FETCH_MY_CHATS_SUCCESS,
        payload: data,
      }))
      .catch(reason => dispatch({
        type: types.FETCH_MY_CHATS_FAILURE,
        payload: reason,
      }))
  }
}

export function fetchAllChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: types.FETCH_ALL_CHATS_REQUEST
    })

    return callApi('/chats', token)
      .then(data => dispatch({
        type: types.FETCH_ALL_CHATS_SUCCESS,
        payload: data,
      }))
      .catch(reason => dispatch({
        type: types.FETCH_ALL_CHATS_FAILURE,
        payload: reason,
      }))
  };
}

export function getChatInfoById(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: types.FETCH_CHATINFO_REQUEST
    })
    return callApi(`/chats/${chatId}`, token)
      .then(data => {
        dispatch({
          type: types.FETCH_CHATINFO_SUCCESS,
          payload: data,
        });
        return data;
      })
      .catch(reason => dispatch({
        type: types.FETCH_CHATINFO_FAILURE,
        payload: reason,
      }))
  }
}

export function setActiveChat(chatId) {
  return (dispatch) => {
    return dispatch(getChatInfoById(chatId))
      .then(data => {

        if(!data){
         dispatch(redirect('/chat'));

         return dispatch({
           type: types.UNSET_ACTIVE_CHAT,
         })
        }

        dispatch({
          type:types.SET_ACTIVE_CHAT,
          payload:data,
        })
      })

  }
}

export function createChat(title) {

  return (dispatch,getState) => {
    const { token } = getState().auth;
    debugger;
    dispatch({
      type: types.CREATE_CHAT_REQUEST,
    });

    return callApi('/chats',token, { method: "POST"},{
      "data": {
        "title": title      }
      })     
      .then(json=>{

        if(!json.token){
          throw new Error('Token has not been provided.');
        }

        localStorage.setItem('token',json.token);

        dispatch({
          type:types.CREATE_CHAT_SUCCESS, 
          payload:json
        })
      }
          )
      .catch(reason =>  dispatch({type:types.CREATE_CHAT_FAILURE, payload:reason}) );
  };
}




