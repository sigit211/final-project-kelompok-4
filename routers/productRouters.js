var express = require('express');
var router = express.Router();

const Product = require("../models/product");

router.post('/', (req, res) => {
    Product.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_desc: req.body.product_desc,
        product_image: req.body.product_image,
        product_qty: req.body.product_qty
    })
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(200).json(err)
    })
});

router.get('/', (req,res)=>{
    Product.find({})
    .then((produk)=>{
        res.status(200).json(produk)
    })
    .catch((err)=>{
        res.status(200).json(err)
    })
})

module.exports = router;
