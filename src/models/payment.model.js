<<<<<<< Updated upstream
<<<<<<< Updated upstream
const mongoose = require("mongoose");
const PaymentSchema = mongoose.Schema({
   card_no:{type:Number,required:true},
   cvv:{type:Number,required:true},
   ex_date:{type:Number,required:true}
}, {
    versionKey: false,
    timestamps: true
})
const Payment= mongoose.model("Payment", PaymentSchema);
module.exports = Payment; 
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
