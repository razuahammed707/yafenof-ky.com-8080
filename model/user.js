const mongoose = require("mongoose");
const Schema=mongoose.Schema;


const userSchema=Schema({
    userName:String,
    cellPhone:String,
    date:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("user",userSchema)