
const express = require("express");

const router = express.Router();

const SearchInput= require("../models/search_input_model");

router.post("/", async (req, res) => {
    const items = await SearchInput.create(req.body);
    res.render("search.ejs", {
        items
    })
  });
  
module.exports = router;