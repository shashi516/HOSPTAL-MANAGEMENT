
import axios from "axios";
import  { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";


const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);


const[firstName,setFirstName]=useState("");
const[lastName,setLastName]=useState("");
const[email,setEmail]=useState("");
const[phone,setPhone]=useState("");
const[dob,setDob]=useState("");
const[gender,setGender]=useState("");
const[nic,setNic]=useState("");
const[password,setPassword]=useState("");

const navigateTo = useNavigate();

const history=useNavigate();

const handleRegister=async(e)=>{
  e.preventDefault();
  try{
    const response=await axios.post("http://localhost:4000/api/v1/user/patient/register",
      {firstName,lastName,email,phone,gender,dob,nic,password,role:"Patient"},
      {
        withCredentials:true,
        headers:{
          "Content-Type":"application/json"
        },
      }
    );
    toast.success(response.data.message);
    setIsAuthenticated(true);
    navigateTo("/Login");
  }
  catch(error){
    toast.error(error.response.data.message);
  }
};
if(isAuthenticated){
  return <Navigate to={"/Login"}/>;
}



  return (
    <div id="regstyle">
      <form onSubmit={handleRegister}>
     <div className="container-fluid"  >
      <div className="row">
        <div className="col-md-1">
          <div>
          <button className="btn btn-warning" onClick={() => history(-1)}>Go Back</button>
          </div>
        </div>
          
          <div className="col-md-4" id="regcon">
        <div style={{textAlign:"center",fontFamily:"monospace",fontSize:"25px",fontWeight:"bold"}}>
        <span style={{color:"white"}}>Registration</span>
        <hr/>
        </div>
       <div>
          <input type="text" className="form-control" id="inplog" value={firstName} onChange={(e)=>setFirstName(e.target.value) } placeholder="First Name" />
        </div>
        <div>
          <input type="text" className="form-control"id="inplog" value={lastName} onChange={(e)=>setLastName(e.target.value) } placeholder="Last Name" />
        </div>
       
       
       <div>
          <input type="email" className="form-control" id="inplog" value={email} onChange={(e)=>setEmail(e.target.value) } placeholder="Email" />
        </div>
        <div>
          <input type="text" className="form-control"id="inplog" value={phone} onChange={(e)=>setPhone(e.target.value) } placeholder="Phone" />
        </div>
       
       
       <div>
          <input type="date" className="form-control" value={dob} onChange={(e)=>setDob(e.target.value) } id="inplog" placeholder="Date of Birth" />
        </div>
        <div>
          <select className="form-select" id="inplog" value={gender} onChange={(e)=>setGender(e.target.value) } > 
            <option value="">---Select Gender---</option>
            <option value="Male" >Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
       <div>
          <input type="text" className="form-control" id="inplog" value={nic} onChange={(e)=>setNic(e.target.value) } placeholder="Nic" />
        </div>
        <div>
          <input type="password" className="form-control"id="inplog" value={password} onChange={(e)=>setPassword(e.target.value) } placeholder="Password" />
        </div>
       <br/> 
       <div>
        <span>*If already have an Account goto Login.</span>
        </div> 
       <hr/>
       <div>
        <button className="form-control btn btn-danger" type="submit">Register</button>
       </div>
        </div>
        <div className="col-md-7"></div>
      </div>
     </div>
     </form>
    </div>
  )
}

export default Register
