const mongoose = require('mongoose');
const {Schema} = mongoose;

const transactionSchema = new Schema({
    user_id: {
        type: Number
    },
    transaction_date: {
        type : Date, 
        default : Date.now
    },
    ref_code: {
        type: Number
    },
    transaction_amount: {
        type: Number
    },
    tansaction_status: {
        type: String,
        default: "Cart Created"
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;