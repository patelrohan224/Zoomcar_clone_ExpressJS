const express = require("express");
const router = express.Router();
const Payment = require("../models/payment.model");
const SearchInput= require("../models/search_input_model");
const checkout = require('../models/checkout.model')



router.post("", async (req, res) => {
    const Zoom_user = await Payment.create(req.body)
    console.log('Zoom_user:', Zoom_user)
    res.redirect("/home")
  
})
module.exports = router
