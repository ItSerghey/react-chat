import {
   SIGNUP_FAILURE, SIGNUP_SUCCESS,
   LOGIN_FAILURE, LOGIN_SUCCESS,
   LOGOUT_SUCCESS
} from '../constants'

const token =localStorage.getItem('token');

const InitialState = {
  isAuthenticated: !!token,
  user: null,
  token,
};

export default function auth(state = InitialState, action) {

  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token:'',
      };

    default:
      return state;
  }
}