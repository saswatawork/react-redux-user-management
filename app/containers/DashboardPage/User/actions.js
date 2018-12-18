/*
 * User Actions
 *
 */
import { fromJS } from "immutable";
import {
  USER_LIST_REQUEST,
  USER_LIST_REQUEST_SUCCESS,
  USER_LIST_REQUEST_FAIL,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_REQUEST_SUCCESS,
  GET_USER_DETAILS_REQUEST_FAIL,
  GET_SORTED_USER_REQUEST,
  GET_SORTED_USER_REQUEST_SUCCESS
} from './constants';

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
  },
  getUserDetailsRequest(payload) {
    return {
      type: GET_USER_DETAILS_REQUEST,
      payload: fromJS(payload)
    };
  },
  getUserDetailsRequestSuccess(payload) {
    return {
      type: GET_USER_DETAILS_REQUEST_SUCCESS,
      payload: fromJS(payload)
    };
  },
  getUserDetailsRequestFail(payload) {
    return {
      type: GET_USER_DETAILS_REQUEST_FAIL,
      payload: fromJS(payload)
    };
  },
  getSortedUserRequest(payload){
    return {
      type: GET_SORTED_USER_REQUEST,
      payload: fromJS(payload)
    }
  },
  getSortedUserRequestSuccess(payload){
    return {
      type: GET_SORTED_USER_REQUEST_SUCCESS,
      payload: fromJS(payload)
    }
  }
}

export default actionCreators;
