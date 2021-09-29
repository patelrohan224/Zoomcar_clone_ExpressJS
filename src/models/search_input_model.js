const mongoose = require("mongoose");

const search_input_Schema = mongoose.Schema({
   
}, {
    versionKey: false,
    timestamps: true
})

const Search_input= mongoose.model("SearchInput", search_input_Schema);

module.exports = Search_input; 