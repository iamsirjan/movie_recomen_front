import { toast } from 'react-toastify';
import { put, takeEvery, call } from 'redux-saga/effects';
import {
  getToken,
  getAccessToken,
  getCurrentUser,
  logoutApi,
} from '../../../api/login';
import { delay } from '../../../helper/Helper';
import actions from './actions';
// import alertActions from '../../../components/Alert/redux/actions';
// import ShowMessage from '../../../components/Toast/Toast';

function* getAccessTokenReq(token, username, password) {
  try {
    let { data, status } = yield call(getAccessToken, {
      code: token,
      username,
      password,
    });
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    yield put({
      type: actions.GET_ACCESS_SUC,
      message: 'Logged in successfully.',
      statusCode: status,
    });
    const currentUser = yield call(getCurrentUser);
    yield put({
      type: actions.GET_CURRENT_USER_SUC,
      currentUser: currentUser.data,
    });
    
  } catch (error) {
    yield put({
      type: actions.GET_ACCESS_FAIL,
      message: `Couldn't login.`,
    });
  }
}

function* getTokenReq(action) {
  try {
    let { username, password } = action.payload;

    let tokenResponse = yield call(getToken, action.payload);
    let { data, status } = tokenResponse;
    yield put({
      type: actions.GET_TOKEN_SUC,
      statusCode: status,
    });
    yield getAccessTokenReq(data.code, username, password);
    delay(1000);
    toast.success('logged in succesfully');
  } catch (error) {
   
    
   
 
    
    yield put({
      type: actions.GET_TOKEN_FAIL,
      statusCode: error.status,
      message: error.message,
    });
  }
}

function* fetchCurrentUserReq(action) {
  try {
    const { data } = yield call(getCurrentUser, action.payload);
    yield put({
      type: actions.GET_CURRENT_USER_SUC,
      currentUser: data,
    });
  } catch (error) {
    if (error?.response?.data) {
      
      yield put({
        type: actions.GET_CURRENT_USER_FAIL,
        message: 'something went wrong.',
        status: error.response.status,
      });
    }
  }
}

function* logoutReq(action) {
  try {
   
    yield localStorage.removeItem('access_token');
    yield localStorage.removeItem('refresh_token');
    yield put({
      type: actions.LOGOUT_SUC,
    });
    delay(1000);
    toast.success('logged out succesfully');
  } catch (error) {
    const message = `Network Error, Can't connect to server.`;
    const status = error?.response?.data?.error?.message || 502;
    yield put({
      type: actions.LOGOUT_FAIL,
      message,
      status,
    });
    
  }
}

export function* logout() {
  yield takeEvery(actions.LOGOUT_REQ, logoutReq);
}
export function* access() {
  yield takeEvery(actions.GET_ACCESS_REQ, getAccessTokenReq);
}


export function* login() {
  yield takeEvery(actions.GET_TOKEN_REQ, getTokenReq);
}


export function* fetchCurrentUser() {
  yield takeEvery(actions.GET_CURRENT_USER_REQ, fetchCurrentUserReq);
}
