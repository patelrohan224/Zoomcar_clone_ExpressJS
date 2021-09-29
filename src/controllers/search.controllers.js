
const express = require("express");

const router = express.Router();

const Search = require("../models/search.model");

router.post("/", async (req, res) => {
    const items = await Search.create(req.body);
    return res.send({ items });
  });

router.get("", async (req, res) => {
  const  items = await Search.find().lean().exec();
  const  items2 = await Search.find({city:"Chennai"}).lean().exec();
     res.render("search.ejs", {
        items,
        items2
    })
    // return res.send({ items });
})  

    // return res.send({ items });



module.exports = router;