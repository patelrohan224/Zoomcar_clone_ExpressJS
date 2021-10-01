
const express = require('express');

const router = express.Router();
const checkout = require('../models/checkout.model')
const SearchInput= require("../models/search_input_model");

router.post("", async (req, res) => {
    const check = await checkout.create(req.body);
    res.redirect("/checkout")
})

module.exports = router