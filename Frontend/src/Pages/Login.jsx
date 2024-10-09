
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import  { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";


const Login = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const[show,setShow]=useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigateTo = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/login",
          { email, password, role: "Patient" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/")
          setEmail("");
          setPassword("");
         
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  

const handleclose=()=>{
  return setShow(!show)
}
  return (
    <div>
    <Button variant='success' id='regbtn' onClick={handleclose}>Login</Button>
      <div>
      <Modal style={{ backgroundColor:""}} show={show} onHide={handleclose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"navy",fontFamily:"monospace"}}>Login..</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:'10%'}}>
          
        <form onSubmit={handleLogin} >
        <div style={{marginTop:"1%"}}>
         <input type="email" className='form-control ' id='inp'  placeholder='Email'  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
         </div>
         <div style={{marginTop:"3%"}}>
         <input type="password" className='form-control ' id='inp' placeholder='Password'  value={password}
            onChange={(e) => setPassword(e.target.value)}/>
         </div >
         <div style={{marginTop:"2%", fontFamily:"monospace"}}>
         <span>You have not any account <Link to={"/Register"} style={{textDecoration:"none"}}>Register</Link> </span>
         </div>
         <hr/>
         <div style={{textAlign:"end"}}>
        
        <button className='btn btn-primary form-control' type="submit">Login</button>
        
      </div>
         </form>
        </Modal.Body>  
      </Modal>
    </div>
    </div>

  )
 
}

export default Login;
