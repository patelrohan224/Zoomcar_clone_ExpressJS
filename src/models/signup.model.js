const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
    phone_num:{type:Number , required:true},
    email:{type:String, required:false},
    name:{type:String, required:false},
    password:{type:String, required:false},
})

module.exports = mongoose.model("signup", signupSchema);