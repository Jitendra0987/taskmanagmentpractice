
const express= require("express");
const route= express.Router();
const adminController=require("../Controllers/AdminController")



route.post("/datasave",adminController.Datasave)



module.exports=route;