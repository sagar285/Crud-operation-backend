const express = require("express");
const { json, type } = require("express/lib/response");
const Formdata = require("../models/conn");
require("../models/portconnection")
const app = express();
const port = 8000;
app.use(express.json());

console.log("sagar");


app.post("/sagar", async (req ,res)=>{
    try{

    const PostData =  new Formdata(req.body);
    console.log("sa8uhs8xhs");
    console.log(req.body);
     const savedata  = await PostData.save();
     console.log(savedata);
     res.status(201).send(savedata);
    }catch(e){
        res.status(400).send(e);
        console.log(e);
    }
})
app.get("/get",  async (req,res)=>{
    try {
        const  Dataji=await  Formdata.find({})
        res.status(201).send(Dataji);
    } catch (error) {
        console.log(error);
        
    }  
})

app.patch("/get/:id",async (req,res)=>{
    try {
        const _id = req.params.id;
        const getdata = await Formdata.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(getdata);
    } catch (error) {
        console.log(error);
        
    }
})

app.delete("/get/:id",async (req,res)=>{
try {
    const getda = await Formdata.findByIdAndDelete(req.params.id);
    res.status(201).send("deleted succesfuly");
} catch (error) {
    console.log(error);
}
})
app.listen(port,()=>{
    console.log("app listen on port ",port);
})