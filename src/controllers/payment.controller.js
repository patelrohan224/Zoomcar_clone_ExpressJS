const express = require("express");
const router = express.Router();
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
const Payment = require("../models/payment.model");
const SearchInput= require("../models/search_input_model");
const checkout = require('../models/checkout.model')
>>>>>>> Stashed changes
=======
const Payment = require("../models/payment.model");
const SearchInput= require("../models/search_input_model");
const checkout = require('../models/checkout.model')
>>>>>>> Stashed changes



router.post("", async (req, res) => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    const items = await pay.create(req.body);
  
 return res.redirect("/home")
});

module.exports = router;
=======
    const Zoom_user = await Payment.create(req.body)
    console.log('Zoom_user:', Zoom_user)
=======
    const Zoom_user = await Payment.create(req.body)
>>>>>>> Stashed changes
    res.redirect("/home")
  
})
module.exports = router
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
