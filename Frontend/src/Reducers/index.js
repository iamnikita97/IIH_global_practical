import { combineReducers } from "redux";
import authReducer from "./AuthReducers";
import errorReducer from "./errorReducers";
export default combineReducers({
    auth: authReducer,
    errors: errorReducer
});