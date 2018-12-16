/*
 * Registration Actions
 *
 */
import { fromJS } from "immutable";
import {
  REGISTRATION_REQUEST,
  REGISTRATION_REQUEST_SUCCESS,
  REGISTRATION_REQUEST_FAIL
} from './constants';

const actionCreators = {
  registrationRequest(payload) {
    return {
      type: REGISTRATION_REQUEST,
      payload: fromJS(payload)
    };
  },
  registrationRequestSuccess(payload) {
    return {
      type: REGISTRATION_REQUEST_SUCCESS,
      payload: fromJS(payload)
    };
  },
  registrationRequestFail(payload) {
    return {
      type: REGISTRATION_REQUEST_FAIL,
      payload: fromJS(payload)
    };
  }
}

export default actionCreators;
