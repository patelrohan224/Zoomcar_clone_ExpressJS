const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
    phone_num:{type:Number , required:true},
    email:{type:String, required:true},
    name:{type:String, required:true},
    password:{type:String, required:true},
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("signup", signupSchema);