/*
 * RegistrationReducer
 *
 */
import { fromJS } from 'immutable';

import { REGISTRATION_REQUEST } from './constants';

// The initial state of the App
export const initialState = fromJS({
  firstname: '',
  lastname: '',
});

function registrationReducer(state = initialState, action) {
  return state;
  switch (action.type) {
    default:
      return state;
  }
}

export default registrationReducer;
