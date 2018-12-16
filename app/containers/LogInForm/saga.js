import {takeEvery, call, put} from 'redux-saga/effects';
import actionCreators from './actions';
import { LOGIN_REQUEST, LOGOUT_USER } from './constants';

import {CONFIG} from './../App/constants';

function loginApi(data) {
    return fetch(`${CONFIG.API_END_POINT}login`,{
        method: "POST",
        headers: CONFIG.API_HEADERS,
        body:  JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })
    .then(user => user)
    .catch(error => ({ error }))
}

export function* login({payload}) {
  try{
    const data = payload.toJS();
    const user = yield call(loginApi, data);
    if(user.token){
      localStorage.setItem('user', user.token);
      yield put(actionCreators.loginRequestSuccess(user));
    }
  }
  catch(error) {
    yield put(actionCreators.loginRequestFail(error));
  }
}

export function* logout() {
  try {
    localStorage.removeItem('user');
    yield put(actionCreators.logOutUserSuccess());
  }
  catch(error) {
  }
}

export default function * root () {
  yield takeEvery(LOGIN_REQUEST, login)
  yield takeEvery(LOGOUT_USER, logout)
}
