const mongoose = require("mongoose");
const Schema=mongoose.Schema;


const registeredUserSchema=Schema({
    cellPhone:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("registeredUser",registeredUserSchema)