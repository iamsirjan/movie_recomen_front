import { all } from "redux-saga/effects";
import detailsSaga from "../component/admin/redux/saga";
import { fetchCurrentUser, login, logout } from "../component/login/redux/saga";
import registerSaga from "../component/register/redux/saga";


export default function* rootSagas() {
  yield all([
    login(),
    fetchCurrentUser(),
    logout(), 
    detailsSaga(),
    registerSaga()
  ]);
}