import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import {
  postDetailsApi,
  getDetailsApi,
  getRecommendApi,
  getUserRecommendApi,
  editDetailsApi,
  deleteDetailsApi
  
} from '../../../api/moviedetails';

import { delay } from '../../../helper/Helper';
import { ToastContainer, toast } from 'react-toastify';
import actions from './actions';
import { getGenreApi, getLanguageApi } from '../../../api/genre';
import { getRatingApi, sendRatingApi } from '../../../api/rating';

function* callSendDetailsReq(action) {
  try {
    let apiResponse = yield call(postDetailsApi, action.payload);

    let { status } = apiResponse;
    const message = 'details added successfully';

    yield put({
      type: actions.SEND_DETAILS_SUC,
      statusCode: status,
      message,
    });
    delay(1000);
    toast.success('Movie added sucessfully');
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.SEND_DETAILS_FAIL,
        payload: err.response.message,
      });
      delay(1000);
      toast.error('error');
    }
    yield put({
      type: actions.SEND_DETAILS_FAIL,
      payload: err.message,
    });
    delay(1000);
    toast.error('error');
  }
}

function* callGetDetailsReq(action) {
  try {
    let apiResponse = yield call(getDetailsApi, action.payload);
    let { data, status } = apiResponse;
    
    yield put({
      type: actions.GET_DETAILS_SUC,
      statusCode: status,
      details: data,
    });
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.GET_DETAILS_FAIL,
        payload: err.response.message,
      });
    }
    yield put({
      type: actions.GET_DETAILS_FAIL,
      payload: err.message,
    });
  }
}

function* callGetRecommendReq(action) {
  try {
    let apiResponse = yield call(getRecommendApi, action.payload);
    let { data, status } = apiResponse;
    
    yield put({
      type: actions.GET_RECOMMEND_SUC,
      statusCode: status,
      details: data,
    });
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.GET_RECOMMEND_FAIL,
        payload: err.response.message,
      });
    }
    yield put({
      type: actions.GET_RECOMMEND_FAIL,
      payload: err.message,
    });
  }
}
function* callGetUserRecommendReq(action) {
  try {
    let apiResponse = yield call(getUserRecommendApi, action.payload);
    let { data, status } = apiResponse;
    
    yield put({
      type: actions.GET_USERRECOMMEND_SUC,
      statusCode: status,
      details: data,
    });
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.GET_USERRECOMMEND_FAIL,
        payload: err.response.message,
      });
    }
    yield put({
      type: actions.GET_USERRECOMMEND_FAIL,
      payload: err.message,
    });
  }
}
function* callGetRatingReq(action) {
  try {
    let apiResponse = yield call(getRatingApi, action.payload);
    let { data, status } = apiResponse;
    const message = 'details fetched successfully';
    yield put({
      type: actions.GET_RATING_SUC,
      statusCode: status,
      rating: data,
    });
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.GET_RATING_FAIL,
        payload: err.response.message,
      });
    }
    yield put({
      type: actions.GET_RATING_FAIL,
      payload: err.message,
    });
  }
}
function* callSendRatingReq(action) {
  try {
    let apiResponse = yield call(sendRatingApi, action.payload);
    let {  status } = apiResponse;
   
    yield put({
      type: actions.SEND_RATING_SUC,
      statusCode: status,
    
    });
    delay(1000);
    toast.success('rating submitted sucessfully');
    const rating = yield call(getRatingApi);
    yield put({
      type: actions.GET_RATING_SUC,
      rating: rating.data,
    });
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.SEND_RATING_FAIL,
        payload: err.response.message,
      });
    }
    yield put({
      type: actions.SEND_RATING_FAIL,
      payload: err.message,
    });
  }
}
function* callGetGenreDetailsReq(action) {
  try {
    let apiResponse = yield call(getGenreApi, action.payload);
    let { data, status } = apiResponse;
    const message = 'details fetched successfully';
    yield put({
      type: actions.GET_GENRE_SUC,
      statusCode: status,
      genre: data,
    });
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.GET_GENRE_FAIL,
        payload: err.response.message,
      });
    }
    yield put({
      type: actions.GET_GENRE_FAIL,
      payload: err.message,
    });
  }
}

function* callGetLanguageDetailsReq(action) {
  try {
    let apiResponse = yield call(getLanguageApi, action.payload);
    let { data, status } = apiResponse;
  
    yield put({
      type: actions.GET_LANGUAGE_SUC,
      statusCode: status,
      language: data,
    });
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.GET_LANGUAGE_FAIL,
        payload: err.response.message,
      });
    }
    yield put({
      type: actions.GET_LANGUAGE_FAIL,
      payload: err.message,
    });
  }
}


function* callDeleteDetailsReq(action) {
  try {
    let apiResponse = yield call(deleteDetailsApi, action.payload);
    let {data, status } = apiResponse;
    yield put({
      type: actions.DLT_DETAILS_SUC,
      id: action.payload, 
    });
    console.log('o')
    
    delay(1000);
    toast.success('Movie deleted sucessfully');
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.DLT_DETAILS_FAIL,
        payload: err.response.message,
      });
    }
    yield put({
      type: actions.DLT_DETAILS_FAIL,
      payload: err.message,
    });
  }
}
function* callEditDetailsReq(action) {
  try {
    let apiResponse = yield call(editDetailsApi, action.id, action.data);
    let { data, status } = apiResponse;
   
  
    
    const message = 'movie updated successfully';
    yield put({
      type: actions.EDIT_DETAILS_SUC,
      statusCode: status,
      message,
    });
    const newDetailsList = yield call(getDetailsApi);
    yield put({
      type: actions.GET_DETAILS_SUC,
      Details: newDetailsList.data,
    });
    delay(1000);
    toast.success('Movie edited sucessfully');
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.EDIT_DETAILS_FAIL,
        payload: err.response.message,
      });
    }
    yield put({
      type: actions.EDIT_DETAILS_FAIL,
      payload: err.message,
    });
  }
}
export function* sendDetails() {
  yield takeEvery(actions.SEND_DETAILS_REQ, callSendDetailsReq);
}
export function* getDetails() {
  yield takeEvery(actions.GET_DETAILS_REQ, callGetDetailsReq);
}
export function* getGenre() {
  yield takeEvery(actions.GET_GENRE_REQ, callGetGenreDetailsReq);
}
export function* getLanguage() {
  yield takeEvery(actions.GET_LANGUAGE_REQ, callGetLanguageDetailsReq);
}
export function* getRating() {
  yield takeEvery(actions.GET_RATING_REQ,callGetRatingReq)
}
export function* sendRating() {
  yield takeEvery(actions.SEND_RATING_REQ,callSendRatingReq)
}
export function* getRecommend() {
  yield takeEvery(actions.GET_RECOMMEND_REQ,callGetRecommendReq)
}
export function* getUserRecommend() {
  yield takeEvery(actions.GET_USERRECOMMEND_REQ,callGetUserRecommendReq)
}

export function* deleteDetails() {
  yield takeEvery(actions.DLT_DETAILS_REQ, callDeleteDetailsReq);
}
export function* editDetails() {
  yield takeEvery(actions.EDIT_DETAILS_REQ, callEditDetailsReq);
}

export default function* detailsSaga() {
  return yield all([
    fork(sendDetails),
    fork(getDetails),
    fork(getGenre),
    fork(getRating),
    fork(sendRating),
    fork(getLanguage),
    fork(getRecommend),
    fork(getUserRecommend),
    fork(editDetails),
    fork(deleteDetails),
  ]);
}
