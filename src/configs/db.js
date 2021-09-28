const mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect("mongodb+srv://Db_Zoomcar:Db_Zoomcar@cluster0.rfmyn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}
module.exports = connect;