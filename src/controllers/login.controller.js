const express = require("express");
const router = express.Router();


const Login = require("../models/login.model");

router.get("", async (req, res) => {
    return res.render("login")
})

router.post("", async (req, res) => {
    const signup = await Login.create(req.body)
    res.redirect("/home")

})

module.exports = router
