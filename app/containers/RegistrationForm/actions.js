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
/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
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
