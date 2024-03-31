const mongoose = require("mongoose")
require("dotenv").config()
console.log(process.env.CONNECTION_STRING)


mongoose.connect(process.env.CONNECTION_STRING)

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        Trim:true,
        lowercase:true,
        unique:true,
        minLength:3,
        maxLength:30,
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    }
});

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})


const User = mongoose.model("User",userSchema)
const Account = mongoose.model("Account",accountSchema)
module.exports = {
    User,Account
};