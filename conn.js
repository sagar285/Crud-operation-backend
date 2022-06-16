
const mongoose =require("mongoose");

const Schema = new mongoose.Schema({
        name:{
    type:String,
    required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    Content:{
        type:String
    }
})
 const Formdata = mongoose.model("Formdata",Schema);

 module.exports = Formdata;