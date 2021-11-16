const mongoose = require('mongoose');
const {Schema} = mongoose;

const cart_contentsSchema = new Schema({
    cart_id: [{
        type: Schema.Types.ObjectId, ref: "Cart"
    }],
    product_id: [{
        type: Schema.Types.ObjectId, ref: "Product"
    }],
    product_incart_qty: {
        type: Number
    }
});

const Cart_contents = mongoose.model('Cart_contents', cart_contentsSchema);
module.exports = Cart_contents;