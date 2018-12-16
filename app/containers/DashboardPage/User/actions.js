/*
 * Login Actions
 *
 */
import { fromJS } from "immutable";
import {
  USER_LIST_REQUEST,
  USER_LIST_REQUEST_SUCCESS,
  USER_LIST_REQUEST_FAIL
} from './constants';
/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
const actionCreators = {
  userListRequest(payload) {
    return {
      type: USER_LIST_REQUEST,
      payload: fromJS(payload)
    };
  },
  userListRequestSuccess(payload) {
    return {
      type: USER_LIST_REQUEST_SUCCESS,
      payload: fromJS(payload)
    };
  },
  userListRequestFail(payload) {
    return {
      type: USER_LIST_REQUEST_FAIL,
      payload: fromJS(payload)
    };
  }
}

export default actionCreators;
