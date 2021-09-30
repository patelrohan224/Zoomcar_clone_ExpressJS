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

app.use('/cars', carController)
app.use("/home", homeController);
app.use("/search", searchController);
app.use("/seinput", search_InputController);




app.use('/cars', carController)
app.listen(3535, async(req, res) => {
    await connect();
    console.log("Listening on port 3535....");
});