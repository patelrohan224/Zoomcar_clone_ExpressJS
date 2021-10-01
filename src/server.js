const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static("public"));


const carController = require('./controllers/car.controller')
const homeController = require("./controllers/home.controller")
const searchController = require("./controllers/search.controllers");
const search_InputController = require("./controllers/search_input.controller");
const signupController = require("./controllers/signup.controller")
const loginController  =  require("./controllers/login.controller")
const checkoutController  =  require("./controllers/checkout.controller")
const paymentController  =  require("./controllers/payment.controller")
const priceController = require("./controllers/price.controller")

app.use('/cars', carController)
app.use("/home", homeController);
app.use("/search", searchController);
app.use("/seinput", search_InputController);
app.use("/signup", signupController )
app.use("/login", loginController)
app.use("/checkout", checkoutController)
app.use("/payment", paymentController)
app.use("/price",priceController)

app.listen(3535, async(req, res) => {
    await connect();
    console.log("Listening on port 3535....");
});