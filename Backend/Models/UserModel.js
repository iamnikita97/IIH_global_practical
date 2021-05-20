const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Set UserSchema{user required}
 * 
 * @author: Nikita Mahajan
 * 
 */

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true
});

module.exports = User = mongoose.model("users", UserSchema);
