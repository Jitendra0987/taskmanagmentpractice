
const express = require("express");
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
const bodyparser = require('body-parser');
const adminRoute = require("./Routes/Admin")


mongoose.connect("mongodb://127.0.0.1:27017/taskmenagmentPractice")

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/admin",adminRoute)





app.listen(8000,()=>{
    console.log("server on port 8000")
})