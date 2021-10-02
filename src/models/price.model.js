const mongoose = require('mongoose');
// user model
const priceSchema = new mongoose.Schema({
    price: { type:String, required: true}
})

module.exports = mongoose.model("price_final", priceSchema)
