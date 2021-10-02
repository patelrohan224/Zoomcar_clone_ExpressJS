const mongoose = require('mongoose');
// user model
const paymentSchema = new mongoose.Schema({
    card_no: { type: String, required: true },
    cvv: { type: String, required: true },
    doe: { type: String, required: true },
    user:{type: mongoose.Schema.Types.ObjectId,
        ref: "signup",
        required: true},
    car:{type: mongoose.Schema.Types.ObjectId,
        ref: "checkout",
        required: true},
    price:{type: mongoose.Schema.Types.ObjectId,
            ref: "checkout",
            required: true}
})

module.exports = mongoose.model("payments", paymentSchema)
