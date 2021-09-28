const mongoose = require('mongoose');
// user model
const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    average: { type: String, required: true },
    img: { type: String, required: true },
    drive: { type: String, required: true },
    bags: { type: String, required: true },
    price: { type:Number, required: true},
    price1: { type:Number, required: true }
})

module.exports = mongoose.model("car", carSchema)
