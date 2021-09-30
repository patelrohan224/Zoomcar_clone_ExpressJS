const mongoose = require("mongoose");
const loginSchema = mongoose.Schema({
    u_name:{type:String, required:true},
    pwd:{type:String, required:true}
}, {
    versionKey: false,
    timestamps: true
})
const Login= mongoose.model("SearchInput", loginSchema);
module.exports = Login; 