const express = require("express");
const router = express.Router();
const pay= require("../models/payment.model");
const Search= require("../models/search.model");

router.get("", async (req, res) => {
  const  items = await Search.find().lean().exec();
  const  items2 = await Search.find({city:"Chennai"}).lean().exec();
     res.render("payment.ejs", {
        items,
        items2
    })
    // return res.send({ items });
}) 



router.post("", async (req, res) => {
    const items = await pay.create(req.body);
  
 return res.redirect("/home")
});

module.exports = router;