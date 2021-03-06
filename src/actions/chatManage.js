import * as types from '../constants/chat_const';
import callApi from '../utils/call-api';
import {redirect} from './services';

export function fetchAllChats() {
  return (dispatch, getState) => {

    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.allChats) {
      return Promise.resolve();
    }

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

export function fetchMyChats() {
  return (dispatch, getState) => {

    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.myChats) {
      return Promise.resolve();
    }

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


export function getChatInfoById(chatId) {
  return (dispatch, getState) => {
    
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.getChatInfoById) {
      return Promise.resolve();
    }

    dispatch({
      type: types.FETCH_CHATINFO_REQUEST
    });

    return callApi(`/chats/${chatId}`, token)
      .then(data => {
        dispatch({
          type: types.FETCH_CHATINFO_SUCCESS,
          payload: data,
        });

        return data;
      })
      .catch(reason => 
        dispatch({
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

        dispatch(redirect(`/chat/${data.chat._id}`));
      })

  }
}

//-------------------------------------------------------------------------------
export function createChat(title) {

  return (dispatch,getState) => {

    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.createChat) {
      return Promise.resolve();
    }



    dispatch({
      type: types.CREATE_CHAT_REQUEST,
      payload: { title },
    });

    return callApi('/chats',token, { method: "POST"},{
      data: {title}
      })     
      .then(({chat})=>{
        dispatch({
          type:types.CREATE_CHAT_SUCCESS, 
          payload:{chat},
        });
        dispatch(redirect(`/chat/${chat._id}`));

        return chat;
      })
      .catch(reason =>  dispatch({type:types.CREATE_CHAT_FAILURE, payload:reason}) );
  };
}



export function joinChat(chatId) {
  return (dispatch, getState) => {
    
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.joinChat) {
      return Promise.resolve();
    }

    dispatch({
      type: types.JOIN_CHAT_REQUEST,
      payload: { chatId }
    });

    return callApi(`/chats/${chatId}/join`, token)
      .then(({ chat }) => {
        dispatch({
          type: types.JOIN_CHAT_SUCCESS,
          payload: { chat }
        });

        dispatch(redirect(`/chat/${chat._id}`));

        return chat;
      })
      .catch(reason => dispatch({
        type: types.JOIN_CHAT_FAILURE,
        payload: reason,
      }));
  };
}

export function leaveChat(chatId) {
  return (dispatch, getState) => {
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.leaveChat) {
      return Promise.resolve();
    }

    dispatch({
      type: types.LEAVE_CHAT_REQUEST,
      payload: { chatId }
    });

    return callApi(`/chats/${chatId}/leave`, token)
      .then(data => {
        dispatch({
          type: types.LEAVE_CHAT_SUCCESS,
          payload: data,
        });

        dispatch(redirect('/chat'));

        dispatch({
          type: types.UNSET_ACTIVE_CHAT,
        });

        return data;
      })
      .catch(reason => dispatch({
        type: types.LEAVE_CHAT_FAILURE,
        payload: reason,
      }));
  }
}

export function deleteChat(chatId) {
  return (dispatch, getState) => {
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.deleteChat) {
      return Promise.resolve();
    }

    dispatch({
      type: types.DELETE_CHAT_REQUEST,
      payload: { chatId }
    });

    return callApi(`/chats/${chatId}`, token, { method: 'DELETE' })
      .then(data => {
        dispatch({
          type: types.DELETE_CHAT_SUCCESS,
          payload: data,
        });

        dispatch(redirect('/chat'));

        dispatch({
          type: types.UNSET_ACTIVE_CHAT,
        });

        return data;
      })
      .catch(reason => dispatch({
        type: types.DELETE_CHAT_FAILURE,
        payload: reason,
      }));
  }
}
