
const express = require('express');

const router = express.Router();
const checkout = require('../models/checkout.model')
const SearchInput= require("../models/search_input_model");
const Signup = require("../models/signup.model");
router.post("", async (req, res) => {
    const check = await checkout.create(req.body);
    res.redirect("/checkout")
})


router.get("", async (req, res) => {
    let  input_data = await  SearchInput.find().sort({_id:-1}).limit(1).lean().exec();
    let car_data = await  checkout.find().sort({_id:-1}).limit(1).lean().exec();
      let name = await  Signup.find().sort({_id:-1}).limit(1).lean().exec();
    res.render("checkout_page.ejs",{
        input_data,
        car_data,
        name
    })
   
})

module.exports = router