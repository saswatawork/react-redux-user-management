/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { LOGIN_REQUEST } from './constants';

// The initial state of the App
export const initialState = fromJS({
  username: '',
  password: '',
});

function loginReducer(state = initialState, action) {
  return state;
  switch (action.type) {
    default:
      return state;
  }
}

export default loginReducer;
