const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
    u_email:{type:String, required:true},
    pwd:{type:String, required:true}
}, {
    versionKey: false,
    timestamps: true
})
const Login= mongoose.model("login", loginSchema);
module.exports = Login; 