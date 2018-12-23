/*
 * userReducer
 *
 */
import { fromJS } from 'immutable';

import {
  USER_LIST_REQUEST_SUCCESS,
  USER_LIST_REQUEST_FAIL,
  GET_USER_DETAILS_REQUEST_SUCCESS,
  GET_SORTED_USER_REQUEST,
  GET_USER_DETAILS_REQUEST,
  GET_SORTED_USER_REQUEST_SUCCESS,
  OPEN_EDIT_USER_MODAL,
  CLOSE_EDIT_USER_MODAL,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  isUserRequestSuccess: false,
  userSortedOrder: 'desc',
  isEditUserModalOpen: false,
  users: {
    data: [],
    page: 1,
    per_page: 3,
    total: 12,
    total_pages: 4,
  },
  userDetails: {},
});

function userReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case USER_LIST_REQUEST_SUCCESS:
      return state.set('isUserRequestSuccess', true).set('users', payload);
    case GET_USER_DETAILS_REQUEST:
      return state;
    case GET_USER_DETAILS_REQUEST_SUCCESS:
      return state.set('userDetails', payload);
    case OPEN_EDIT_USER_MODAL:
      return state.set('isEditUserModalOpen', true);
    case CLOSE_EDIT_USER_MODAL:
      return state.set('isEditUserModalOpen', false);
    case USER_LIST_REQUEST_FAIL:
      return state.set('isUserRequestSuccess', false);
    case GET_SORTED_USER_REQUEST:
      return state.set('userSortedOrder', payload);
    case GET_SORTED_USER_REQUEST_SUCCESS: {
      return state.setIn(['users', 'data'], payload);
    }
    default:
      return state;
  }
}

export default userReducer;
