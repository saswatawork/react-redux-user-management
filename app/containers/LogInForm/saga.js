import {browserHistory} from 'react-router'
import {take, call, put, fork, race} from 'redux-saga/effects';
import actionCreators from './actions';
import { LOGIN_REQUEST } from './constants';

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

/**
 * Log in saga
 */
export function * login () {
    try {
        const request = yield take(LOGIN_REQUEST);
        const data = request.payload.toJS();
        const user = yield call(loginApi, data);

        if(user.token){
          localStorage.setItem('user', JSON.stringify(user));
          yield put(actionCreators.loginRequestSuccess(user));
        }
    }
    catch(error) {
        yield put(actionCreators.loginRequestFail(error));
    }
}

export default function * root () {
  yield fork(login)
}

// Little helper function to abstract going to different pages
function forwardTo (location) {
  alert(location)
  browserHistory.push(location)
}
