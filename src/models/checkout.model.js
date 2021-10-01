const mongoose = require('mongoose');
// user model
const checkoutSchema = new mongoose.Schema({
    img: { type: String, required: true },
    name: { type: String, required: true },
    price: { type:String, required: true}
})
module.exports = mongoose.model("checkout", checkoutSchema)
