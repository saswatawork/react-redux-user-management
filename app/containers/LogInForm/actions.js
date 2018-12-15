/*
 * Login Actions
 *
 */
import { fromJS } from "immutable";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL
} from './constants';
/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
const actionCreators = {
  loginRequest(payload) {
    return {
      type: LOGIN_REQUEST,
      payload: fromJS(payload)
    };
  },
  loginRequestSuccess(payload) {
    return {
      type: LOGIN_REQUEST_SUCCESS,
      payload: fromJS(payload)
    };
  },
  loginRequestFail(payload) {
    return {
      type: LOGIN_REQUEST_FAIL,
      payload: fromJS(payload)
    };
  }
}

export default actionCreators;
