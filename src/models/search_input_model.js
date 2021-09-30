const mongoose = require("mongoose");
const search_input_Schema = mongoose.Schema({
    pick_city:{type:String, required:true},
    drop_city:{type:String, required:true},
    pick_location:{type:String, required:true},
    drop_location:{type:String, required:true},
    pick_date:{type:String, required:true},
    drop_date:{type:String, required:true},
    pick_time:{type:String, required:true},
    drop_time:{type:String, required:true},
    pick_month:{type:String, required:true},
    drop_month:{type:String, required:true},
    pick_day:{type:String, required:true},
    drop_day:{type:String, required:true}
}, {
    versionKey: false,
    timestamps: true
})
const Search_input= mongoose.model("SearchInput", search_input_Schema);
module.exports = Search_input; 