const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductVariant = new mongoose.Schema({
    size: String,  // If you're certain this will only ever be sizes, you could make it an enum
    inventory: Number
  });

const ItemSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    descr: {
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    imageUrl: {
        type : String,
    },
    variants: [ProductVariant]
});

module.exports = Item = mongoose.model('item', ItemSchema);