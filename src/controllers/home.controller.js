const express = require("express");
const router = express.Router();

const home = require("../models/home.model");
router.get("", async(req, res) => {

    return res.render("home.ejs")
})

router.get("/offers", async(req, res) => {

    return res.render("offer.ejs")
})

module.exports = router