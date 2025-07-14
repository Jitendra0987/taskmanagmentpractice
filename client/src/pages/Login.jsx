import "../css/Login.css"
import { useState } from "react";
import axios from "axios" ;
// import message from "antd";

const Login=()=>{
      
    const [userid,setUserid]=useState("");
    const [password,setPassword]=useState("");
    const [usertype,setUsertype]=useState("");


    const handelsubmit=async()=>{

            let api="http://localhost:8000/admin/datasave";
            const response=await axios.post(api,{
                userid:userid,
                password:password
                
    }

).then((res)=>{
                alert("you succesfully login");

})}
            


    return(
        <>
         <center>
        <div className="loginform">
            <input type="text" placeholder="Enter Your Id"  value={userid} onChange={(e)=>{setUserid(e.target.value)}} />
            <br /><br />
            <input type="text" placeholder="Enter Your password"  value={password}onChange={(e)=>{setPassword(e.target.value)}} />
            <br />
              
            <select name="usertype" id="" value={usertype} onChange={(e)=>{setUsertype(e.target.value)}}  >

                <option value="">login</option>
                <option value="admin">Admin</option>
                <option value="employee">Employe</option>
            </select>
             
             <button type="button"  onClick={handelsubmit}>
              Submit        
             </button>
                
        </div>
        </center>

        </>
    )
}
export default Login;