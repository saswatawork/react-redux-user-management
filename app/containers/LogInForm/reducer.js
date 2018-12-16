/*
 * LoginReducer
 *
 */
import { fromJS } from 'immutable';

import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  LOGOUT_USER_SUCCESS
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  email: '',
  password: '',
  isLoggedIn: localStorage.getItem('user') ? true : false
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
      return state.set("isLoggedIn", true);
    case LOGIN_REQUEST_FAIL:
      return state.set("isLoggedIn", false);
    case LOGOUT_USER_SUCCESS:
      return state.set("isLoggedIn", false);
    default:
      return state;
  }
}

export default loginReducer;
