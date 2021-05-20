import axios from "axios";
import setAuthToken from "../Utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
    GET_ERRORS,
    SET_CURRENT_USER,
} from "./ActionType";

/**
 * @param : Call Registration API
 * 
 * @author: Nikita Mahajan
 * 
 */


export const registerUser = (userData, history) => dispatch => {
    axios
        .post("/api/user-add", userData)
        .then(res => history.push("/login"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

/**
 * @param : Call Login API
 * 
 * @author: Nikita Mahajan
 * 
 */

export const loginUser = userData => dispatch => {
    axios
        .post("/api/login", userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};


export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};
