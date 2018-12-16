import {browserHistory} from 'react-router'
import {take,takeEvery, call, put, fork, race} from 'redux-saga/effects';
import actionCreators from './actions';
import { USER_LIST_REQUEST } from './constants';

import {CONFIG} from './../../App/constants';



function userApi(currentPage) {
  return fetch(`${CONFIG.API_END_POINT}users?page=${currentPage}`)
  .then(response => {
      return response.json();
  })
  .then(user => user)
  .catch(error => ({ error }))
}

/**
 * Log in saga
 */
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

export default function * root () {
  yield takeEvery(USER_LIST_REQUEST, getUserList)
}

// Little helper function to abstract going to different pages
function forwardTo (location) {
  alert(location)
  browserHistory.push(location)
}
