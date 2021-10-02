
const express = require("express");

const router = express.Router();

const Search = require("../models/search.model");

router.post("/", async (req, res) => {
    const items = await Search.create(req.body);
    return res.send({ items });
  });



 

    // return res.send({ items });



module.exports = router;