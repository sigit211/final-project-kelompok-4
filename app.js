const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cart = require("./models/cart");
const cart_contents = require("./models/cart_contents");
const routerProduct = require('./routers/productRouters')
const transaction = require("./models/transaction");


let con;
let targetDB = "mongodb://localhost:27017/cart_management";
mongoose.connect(targetDB, { useNewUrlParser: true, useUnifiedTopology: true });
con = mongoose.connection;
con.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/cart", cart);
app.use("/cart_contents", cart_contents);
app.use("/product", routerProduct);
app.use("/transaction", transaction);

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, function() {
    console.log('listening on 3000')
})