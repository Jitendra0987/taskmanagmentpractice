
const mongoose=require("mongoose");
const adminSchema=new mongoose.Schema({
       "username":String,
        "userid":String,
        "password":Number
})
module.exports=mongoose.model("admin",adminSchema)