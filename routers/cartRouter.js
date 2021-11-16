var express = require('express');
var router = express.Router();

const Cart = require("../models/cart");

router.post('/', (req, res)=>{
    Cart.create({
        user_id: req.body.user_id
    })
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(200).json(err)
    })
})

module.exports = router;