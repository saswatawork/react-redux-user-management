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

import {
  USER_LIST_REQUEST_SUCCESS,
  USER_LIST_REQUEST_FAIL,
  GET_USER_DETAILS_REQUEST_SUCCESS
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  isUserRequestSuccess: false,
  users: {
    data: [],
    page: 1,
    per_page: 3,
    total: 12,
    total_pages: 4
  },
  userDetails: {

  }
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LIST_REQUEST_SUCCESS:
      return state
        .set("isUserRequestSuccess", true)
        .set("users", action.payload);
    case GET_USER_DETAILS_REQUEST_SUCCESS:
      return state
        .set("userDetails", action.payload);
    case USER_LIST_REQUEST_FAIL:
      return state.set("isUserRequestSuccess", false);
    default:
      return state;
  }
}

export default userReducer;
