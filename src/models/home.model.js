const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
    name:{type:String, required: false}
})

module.exports = mongoose.model("home", homeSchema);