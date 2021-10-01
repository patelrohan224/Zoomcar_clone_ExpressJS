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