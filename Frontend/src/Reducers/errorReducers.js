import { GET_ERRORS } from "../Actions/ActionType";
const initialState = {};


/**
 * @param : Error Handling
 * 
 * @author: Nikita Mahajan
 * 
 */

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
