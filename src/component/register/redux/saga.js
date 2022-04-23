import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import {
  postDetailsApi,
  getDetailsApi,
 
  
} from '../../../api/moviedetails';

import { delay } from '../../../helper/Helper';
import { ToastContainer, toast } from 'react-toastify';
import actions from './actions';
import { getUserDetails, sendUserDetails } from '../../../api/register';

function* callSendDetailsReq(action) {
  try {
    let apiResponse = yield call(sendUserDetails, action.payload);

    let { status } = apiResponse;
    

    yield put({
      type: actions.SEND_REGISTERDETAILS_SUC,
      statusCode: status,
    
    });
    delay(1000);
    toast.success('user registered successfully');
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.SEND_REGISTERDETAILS_FAIL,
        payload: err.response.message,
      });
     
    }
    yield put({
      type: actions.SEND_REGISTERDETAILS_FAIL,
      payload: err.message,
    });
   
  }
}

function* callGetDetailsReq(action) {
  try {
    let apiResponse = yield call(getUserDetails, action.payload);

    let { data,status } = apiResponse;
    

    yield put({
      type: actions.GET_REGISTERDETAILS_SUC,
      statusCode: status,
      details:data
    
    });

  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.GET_REGISTERDETAILS_FAIL,
        payload: err.response.message,
      });
     
    }
    yield put({
      type: actions.GET_REGISTERDETAILS_FAIL,
      payload: err.message,
    });
   
  }
}



export function* sendDetails() {
  yield takeEvery(actions.SEND_REGISTERDETAILS_REQ, callSendDetailsReq);
}


export function* getDetails() {
  yield takeEvery(actions.GET_REGISTERDETAILS_REQ, callGetDetailsReq);
}


export default function* registerSaga() {
  return yield all([
    fork(sendDetails),
    fork(getDetails),

    
  ]);
}
