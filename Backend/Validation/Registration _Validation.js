const Validator = require("validator");
const isEmpty = require("is-empty");

/**
 * Registration Validation
 * 
 * @author: Nikita Mahajan
 * 
 */


module.exports = function validateRegisterInput(data) {

    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.mobileNumber = !isEmpty(data.mobileNumber) ? data.mobileNumber : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }
    else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.mobileNumber)) {
        errors.mobileNumber = "Mobile Number field is required";
    }

    else if (!Validator.isMobilePhone(data.mobileNumber)) {
        errors.mobileNumber = "Mobile Number is invalid";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = " Password field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};