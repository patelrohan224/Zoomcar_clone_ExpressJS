const express = require("express");
const router = express.Router();

const Signup = require("../models/signup.model");
const Login = require("../models/login.model");

router.get("", async (req, res) => {
    return res.render("login")
})
router.get("/:uid/signup/:pid", async (req, res) => {
    const signup = await Signup.find({u_name: req.params.uid});
    
})

module.exports = router
