import React from "react";
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";



import reducer from "../redux";
import rootSaga from "../saga";
const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();
const store = createStore(
  reducer(history),
  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? composeWithDevTools(applyMiddleware(sagaMiddleware,routerMiddleware(history)))
    : compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;