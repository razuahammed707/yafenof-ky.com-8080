const mongoose = require("mongoose");
const Schema=mongoose.Schema;


const newUserSchema=Schema({
    fullName:String,
    cellPhone:String,
    email:String,
    id:String,
    address:String,
    birthDate:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("new_user",newUserSchema)