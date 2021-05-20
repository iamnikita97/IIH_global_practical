import {
    SET_CURRENT_USER,
    USER_ADD,
} from "../Actions/ActionType";

const isEmpty = require("is-empty");
const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
};

/**
 * @param : Switch the actions
 * 
 * @author: Nikita Mahajan
 * 
 */

export default function (state = initialState, action) {

    switch (action.type) {
        case USER_ADD:
            return {
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}
