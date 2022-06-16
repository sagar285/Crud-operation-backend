const mongoose =require("mongoose");

mongoose.connect('mongodb://localhost:27017/crud').then(()=>{
    console.log("your connectin is established");
}).catch((e)=>{
    console.log(e);
})