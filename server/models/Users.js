const mongoose = require('mongoose')
const Users = mongoose.Schema({
    firstName:{
        type: String,
        trim:true
    },
    lastName:{
        type: String,
        trim:true
    },
    email:{
        type: String,
        trim:true
    },
    password:{
        type: String,
        trim:true
    },
    jwt:{
        type: String,
        trim:true
    },
    status:{
        type: Number,
        trim:true,
        default:1
    },
},{
    timestamps:true
})

module.exports = mongoose.model('users',Users)