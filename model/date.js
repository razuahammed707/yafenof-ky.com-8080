const mongoose = require("mongoose");
const Schema=mongoose.Schema;


const dateSchema=Schema({
    date:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("all_date",dateSchema)