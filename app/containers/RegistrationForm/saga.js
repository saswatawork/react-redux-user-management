import {takeEvery, call, put} from 'redux-saga/effects';
import actionCreators from './actions';
import loginActionCreators from 'containers/LoginForm/actions';
import { REGISTRATION_REQUEST } from './constants';

import {CONFIG} from './../App/constants';

function registrationApi(data) {
    return fetch(`${CONFIG.API_END_POINT}register`,{
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

export function* registration({payload}) {
  try{
    const data = payload.toJS();
    const user = yield call(registrationApi, data);
    if(user.token){
      localStorage.setItem('user', user.token);
      yield put(loginActionCreators.loginRequestSuccess(user));
    }
  }
  catch(error) {
    yield put(actionCreators.registrationRequestFail(error));
  }
}

export default function* root() {
  yield takeEvery(REGISTRATION_REQUEST, registration)
}
