
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import AuthReducer from "../component/login/redux/reducer";
import DetailsReducer from "../component/admin/redux/reducer";
import RegisterReducer from "../component/register/redux/reducer";


const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
    moviedetails: DetailsReducer,
    register:RegisterReducer,
  });

export default reducers;