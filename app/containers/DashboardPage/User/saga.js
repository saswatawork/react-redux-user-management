import {take,takeEvery, call, put, fork, race} from 'redux-saga/effects';
import actionCreators from './actions';
import { USER_LIST_REQUEST, GET_USER_DETAILS_REQUEST } from './constants';

import {CONFIG} from './../../App/constants';

function userApi(currentPage) {
  return fetch(`${CONFIG.API_END_POINT}users?page=${currentPage}`)
  .then(response => {
    return response.json();
  })
  .then(user => user)
  .catch(error => ({ error }))
}

export function * getUserList ({payload}) {
  try {
    const currentPage = payload ? payload : 1;
    const user = yield call(userApi, currentPage);
    yield put(actionCreators.userListRequestSuccess(user));
  }
  catch(error) {
    yield put(actionCreators.userListRequestFail(error));
  }
}


function userDetailsApi(userId) {
  return fetch(`${CONFIG.API_END_POINT}users/${userId}`)
  .then(response => {
    return response.json();
  })
  .then(user => user)
  .catch(error => ({ error }))
}

export function * getUserDetails({payload}) {
  try {
    const userId = payload ? payload : 1;
    const userDetails = yield call(userDetailsApi, userId);
    if(userDetails.data)
      yield put(actionCreators.getUserDetailsRequestSuccess(userDetails.data));
  }
  catch(error) {
    yield put(actionCreators.getUserDetailsRequestFail(error));
  }
}

export default function * root () {
  yield takeEvery(USER_LIST_REQUEST, getUserList)
  yield takeEvery(GET_USER_DETAILS_REQUEST, getUserDetails)
}
