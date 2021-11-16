const mongoose = require('mongoose');
const {Schema} = mongoose;

const cartSchema = new Schema({
    user_id: {
        type: String
    }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;