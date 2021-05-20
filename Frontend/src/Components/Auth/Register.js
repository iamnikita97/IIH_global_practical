import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../Actions/AuthActions";
import classnames from "classnames";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

/**
 * Registration Page
 * 
 * @author: Nikita Mahajan
 * 
 */

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            mobileNumber: "",
            errors: {}
        };
    }



    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/users");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    /* 
     * On change of the form controls.
     * Set controls value in the state   
     * 
     */

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            mobileNumber: this.state.mobileNumber,
            password: this.state.password
        };
        this.props.registerUser(newUser, this.props.history);
    };

    /*  Render method */
    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div >
                    <div className="col-md-5 mx-auto mt-3 card shadow-lg  rounded-5  ">
                        <div >
                            <h2 className="text-center text-primary mt-2"> <FontAwesomeIcon icon={faUsers} /></h2>
                            <h2 className="text-center text-primary mt-3">Registration</h2>
                        </div>
                        <form noValidate onSubmit={this.onSubmit} className="white registration-form">
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.name}
                                error={errors.name}
                                id="name"
                                type="name"
                                className={classnames("form-control", {
                                    invalid: errors.name
                                })}
                            />
                            <span className="text-danger">{errors.name}</span>
                            <br />
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                className={classnames("form-control", {
                                    invalid: errors.email
                                })}
                            />
                            <span className="text-danger">{errors.email}</span>
                            <br />
                            <label htmlFor="phone">Mobile Number</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.mobileNumber}
                                error={errors.mobileNumber}
                                id="mobileNumber"
                                type="mobileNumber"
                                className={classnames("form-control", {
                                    invalid: errors.mobileNumber
                                })}
                            />
                            <span className="text-danger">{errors.mobileNumber}</span>
                            <br />
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className={classnames("form-control", {
                                    invalid: errors.password
                                })}
                            />
                            <span className="text-danger">{errors.password}</span>
                            <p className="text-center pb-0 mt-2">
                                <button
                                    type="submit"
                                    className="btn btn-large btn-primary mt-2 px-5">
                                    Registration
                                    </button>
                            </p>

                            <NavLink to="/login" style={{ float: 'right', marginBottom: '10px' }} >Already have an account?Log In</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));