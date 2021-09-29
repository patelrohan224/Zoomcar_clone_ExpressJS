const mongoose = require("mongoose");

const searchSchema = mongoose.Schema({
   location:{type: String,require:true},
   city:{type: String,require:true}
}, {
    versionKey: false,
    timestamps: true
})

const Search = mongoose.model("Search", searchSchema);

module.exports = Search; 