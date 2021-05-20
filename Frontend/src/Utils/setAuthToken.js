import axios from "axios";

/**
 * @param : Set Token
 * 
 * @author: Nikita Mahajan
 * 
 */

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};
export default setAuthToken;