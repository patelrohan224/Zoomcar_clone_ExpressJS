
const express = require('express');

const router = express.Router();
const Car = require('../models/cars.model')
//CRUD operation for car
//1. create a car 

router.post("", async (req, res) => {
    const car = await Car.create(req.body)
    return res.status(201).json({ car })
})

// 2.get all cars
router.get("", async (req, res) => {
    const cars = await Car.find().lean().exec()

    return res.status(200).json({ cars })
})
// router.get("/:id", async (req, res) => {
//   const items = await Products.find().sort({ price: -1 });
//   res.render("new.ejs", {
//     items,
//   });
//   // res.send(items);
// });

// // 3. get a single car
// router.get("/:id", async (req, res) => {
//     const car = await Car.find(req.params.id).lean().exec()
//     return res.status(200).json({ car })
// })

// // 4. update a car
// router.patch("/:id", async (req, res) => {
//     const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     return res.status(201).json({ car })
// })

// // 5 . delete a car 
// router.delete("/:id", async (req, res) => {
//     const car = await Car.findByIdAndDelete(req.params.id)
//     return res.status(200).json({ car })
// })

module.exports = router;