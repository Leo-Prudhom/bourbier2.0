const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    size: {
        type : String,
        required : true
    },
    qty: {
        type : Number,
        required : true
    },
    descr: {
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);