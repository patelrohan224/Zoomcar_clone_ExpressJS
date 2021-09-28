const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");

const app = express();

// const userController = require("../controller/usersignup.controller.js");
// const loginController = require("../controller/userlogin.controller.js");
// const productController = require("../controller/product.controller.js");

// const homePageController = require("../controller/homepage.controller.js");
app.use(express.json());
// app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static("public"));

// app.use("/signup", userController);
// app.use("/login", loginController);
// app.use("/product", productController);
// app.use("/", homePageController);


const carController = require('./controllers/car.controller')

app.use('/cars', carController)


app.listen(3535, async (req, res) => {
  await connect();
  console.log("Listening on port 3535....");
});