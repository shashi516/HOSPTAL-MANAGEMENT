import axios from "axios";
import { useState } from "react"
import { toast } from "react-toastify";



const MessageForm = () => {

const [firstName,setfirstName]=useState("");
const [lastName,setlastName]=useState("");
const [email,setemail]=useState("");
const [phone,setphone]=useState("");
const[message,setMessage]=useState("");

const handleMessage=async(e)=>{
  e.preventDefault();
  try{
  await axios.post(
      "http://localhost:4000/api/v1/message/send",
      {firstName,lastName,email,phone,message},
      {
        withCredentials:true,
        headers:{
          "Content-Type":"application/json",
        },
      }
    ).then(res=>{
      toast.success(res.data.message);
      setfirstName("");
      setMessage("");
      setlastName("");
      setemail("");
      setphone("");
    })
  }
  catch(error){
    toast.error(error.response.data.message);
  }
};

  return (
    <div>
      <form onSubmit={handleMessage} >
      <div className="row">

      <div className="col-md-2"></div>
       <div className="col-md-8" style={{padding:"2%",border:""}}>
        <div style={{textAlign:"center"}}>
        <h3 style={{color:"blue",fontFamily:"monospace",fontWeight:"800"}}>Send Us A Message</h3>
        </div>
        <hr style={{height:"5px", backgroundColor:"goldenrod",marginBottom:"5%"}}/>
          <div  className="d-flex" >
            <input type="text" id="inpt"  className="form-control " value={firstName} onChange={(e)=>setfirstName(e.target.value)} placeholder="First Name" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" id="inpt"  className="form-control"  value={lastName} onChange={(e)=>setlastName(e.target.value)} placeholder="Last Name"/>
          </div>
          <div  className="d-flex" style={{marginTop:"2%"}} >
            <input type="text" id="inpt"  className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" id="inpt"  className="form-control" value={phone} onChange={(e)=>setphone(e.target.value)} placeholder="Phone Number" />
          </div>
          <div style={{marginTop:"2%"}}>
            <textarea rows={5} className="form-control" value={message} onChange={(e)=>setMessage(e.target.value)} style={{borderRadius:"0%",border:'1px solid black'}} placeholder="Message.."/>
          </div>
          <div>
            <button type="submit"  className="btn btn-danger form-control mt-2">send</button>
          </div>
        </div>
       <div className="col-md-2"></div>
      </div>
      </form>
    </div>
  )
}

export default MessageForm
