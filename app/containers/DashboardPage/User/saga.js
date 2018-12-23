import { takeEvery, call, put, select } from 'redux-saga/effects';
import _ from 'lodash';
import actionCreators from './actions';
import {
  USER_LIST_REQUEST,
  GET_USER_DETAILS_REQUEST,
  GET_SORTED_USER_REQUEST,
} from './constants';
import { makeSelectUserList, makeSelectUserSortedOrder } from './selectors';
import { CONFIG } from '../../App/constants';

function userApi(currentPage) {
  return fetch(`${CONFIG.API_END_POINT}users?page=${currentPage}`)
    .then(response => response.json())
    .then(user => user)
    .catch(error => ({ error }));
}

export function* getUserList({ payload }) {
  try {
    const currentPage = payload || 1;
    const user = yield call(userApi, currentPage);
    yield put(actionCreators.userListRequestSuccess(user));
  } catch (error) {
    yield put(actionCreators.userListRequestFail(error));
  }
}

function userDetailsApi(userId) {
  return fetch(`${CONFIG.API_END_POINT}users/${userId}`)
    .then(response => response.json())
    .then(user => user)
    .catch(error => ({ error }));
}

export function* getUserDetails({ payload }) {
  try {
    const userId = payload || 1;
    const userDetails = yield call(userDetailsApi, userId);
    if (userDetails.data) {
      yield put(actionCreators.getUserDetailsRequestSuccess(userDetails.data));
      yield put(actionCreators.openEditUserModal());
    }
  } catch (error) {
    yield put(actionCreators.getUserDetailsRequestFail(error));
  }
}

export function* getSortedUser() {
  try {
    const { data } = yield select(makeSelectUserList());
    const orderBy = yield select(makeSelectUserSortedOrder());
    const userData = _.orderBy(data, ['first_name'], [orderBy]);
    if (userData) {
      yield put(actionCreators.getSortedUserRequestSuccess(userData, userData));
    }
  } catch (error) {}
}

export default function* root() {
  yield takeEvery(USER_LIST_REQUEST, getUserList);
  yield takeEvery(GET_USER_DETAILS_REQUEST, getUserDetails);
  yield takeEvery(GET_SORTED_USER_REQUEST, getSortedUser);
}
