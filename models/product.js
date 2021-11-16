const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    product_name: {
        type: String
    },
    product_price: {
        type: Number
    },
    product_desc: {
        type: String
    },
    product_image: {
       type: String
    },
    product_qty: {
        type: Number
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;