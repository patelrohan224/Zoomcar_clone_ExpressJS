const express = require("express");
const router = express.Router();


const Login = require("../models/signup.model");

router.get("", async (req, res) => {
     res.render("login")
})

router.post("", async (req, res) => {
<<<<<<< Updated upstream
    const signup = await Login.create(req.body)
    res.redirect("/home")

=======
    const email = req.body.email;
    const password = req.body.password;
    const login = await Login.findOne({ email: email, password: password });
    if(login==null){
        res.redirect("/login")
    }
    else{
        res.redirect("/home")
    }
>>>>>>> Stashed changes
})
module.exports = router