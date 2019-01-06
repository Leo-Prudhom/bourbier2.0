const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    identity : {
        firstName : {type: String,
        },

        lastName : {type: String,
        }
    },
    email: {
        type : String,
        required : true,
        unique : true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type : String,
        required : true
    },
    adress: {
        street : {
            type : String,
        },
        postalCode : {
            type : Number,
        },
        city : {
            type : String,
        }
    }
});

module.exports = User = mongoose.model('user', UserSchema);