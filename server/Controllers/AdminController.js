const adminModell=require("../Models/adminModel")


const Datasave=async(req,res)=>{
    const {userid,password}=req.body;


   try {

    const admin=adminModell.findOne({userid:userid})
    console.log(admin)
    res.send("okk")
    
   } catch (error) {
    console.log(error);
    
   }


}

module.exports={
    Datasave
}