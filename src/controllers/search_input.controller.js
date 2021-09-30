const express = require("express");
const router = express.Router();
const SearchInput= require("../models/search_input_model");
const Search = require("../models/search.model");

router.get("", async (req, res) => {
  const  items = await Search.find().lean().exec();
  const  items2 = await Search.find({city:"Chennai"}).lean().exec();
     res.render("search.ejs", {
        items,
        items2
    })
    // return res.send({ items });
}) 



router.post("", async (req, res) => {
    const items = await SearchInput.create(req.body);
  
 res.redirect("/cars")
  });

module.exports = router;