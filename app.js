
const Express=require("express")
const cors=require("cors")
const Mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

let app=Express()

app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(3030,()=>{
    console.log("server started")
})