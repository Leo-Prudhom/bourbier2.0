const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    identity : {
        firstName : {type: String,
        required: true},

        lastName : {type: String,
        required: true}
    },
    email: {
        type : String,
        required : true
    },
    adress: {
        type : String,
        required : true
    }
});

module.exports = User = mongoose.model('user', UserSchema);