import { useContext, useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";
import logo from "../images/logo.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/login",
          { email, password, role: "Admin" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
     <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6" style={{marginTop:"5%",textAlign:"center"}}>
          <div style={{border:"1px solid black",padding:"5%",boxShadow:"0px 10px 10px 10px gray"}}>
          <img src={logo} alt="logo" style={{height:"100px",borderRadius:"50%"}} />
          <h2 style={{fontFamily:"monospace",color:"blue"}}>Welcome To Familycare</h2>
          <p  style={{fontFamily:"cursive",color:"gray"}}>(Only Admins Are Allowed To Access These Resources!)</p>
          <hr/>
        <form onSubmit={handleLogin}>
          <div >
          <input
            id="inpl"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          </div>
         <div style={{marginTop:"3%"}}>
         <input
            id="inpl"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
         </div>
         
          <div style={{marginTop:"3%",textAlign:'end'}}>
            <button type="submit" style={{width:"30%",borderRadius:"0%"}} className=" btn btn-success">Login</button>
          </div>
        </form>
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
     </div>
    </>
  );
};

export default Login;