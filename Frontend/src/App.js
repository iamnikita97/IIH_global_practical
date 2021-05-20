import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Login from "./Components/Auth/Login";
import { Provider } from "react-redux";
import PrivateRoute from "./Components/private-route/PrivateRoute";
import Register from "./Components/Auth/Register";
import store from "./Store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./Utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./Actions/AuthActions";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import 'popper.js/dist/popper';

import User from "./Components/Pages/Users";

/**
 * Set Login Token
 *
 * @author: Nikita Mahajan
 */

if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = "./login";
    }
}

/**
 * Routing
 */


function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/registration" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Switch>
                            <PrivateRoute exact path="/users" component={User} />
                        </Switch>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;