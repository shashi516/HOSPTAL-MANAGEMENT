import { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { MdAddModerator } from "react-icons/md";

const AddNewAdmin = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/admin/addnew",
          { firstName, lastName, email, phone, nic, dob, gender, password },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNic("");
          setDob("");
          setGender("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="container-fluid" id="bodyaddadmin">
     <form onSubmit={handleAddNewAdmin}>
     <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-9 mb-5" style={{textAlign:"center"}}>
          <span style={{fontSize:"100px"}}>{< MdAddModerator/>}</span>
          <h1>Add-New-Admin</h1><hr/>
          <div style={{textAlign:"center",padding:"5%",boxShadow:"0px 5px 5px 5px grey"}}>
              <div className="d-flex">
                <div id="divaa">
                   <input
                      type="text"
                      className="form-control" id="inptaa"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                   />	
                </div>
                <div id="divaa">
                <input
                      type="text"
                      className="form-control" id="inptaa"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                   />	
                </div>
              </div>
              <div className="d-flex">
                <div id="divaa">
                   <input
                      type="email"
                      className="form-control" id="inptaa"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                   />	
                </div>
                <div id="divaa">
                <input
                      type="text"
                      className="form-control" id="inptaa"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                   />	
                </div>
              </div>
              <div className="d-flex">
                <div id="divaa">
                   <input
                      type={"date"}
                      placeholder="Date Of Birth"
                      className="form-control" id="inptaa"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                   />	
                </div>
                <div id="divaa">
                <select className="form-select" id="inptaa" value={gender} onChange={(e)=>setGender(e.target.value) } > 
                   <option value="">---Select Gender---</option>
                   <option value="Male" >Male</option>
                  <option value="Female">Female</option>
               </select>
                </div>
              </div>
              <div className="d-flex">
                <div id="divaa">
                   <input
                      type="text"
                      className="form-control" id="inptaa"
                      placeholder="Nic"
                      value={nic}
                      onChange={(e) => setNic(e.target.value)}
                   />	
                </div>
                <div id="divaa">
                <input
                      type="password"
                      className="form-control" id="inptaa"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                   />	
                </div>
              </div>
              <hr />
          <div>
            <button className="form-control btn btn-warning" type="submit">Add-Now</button>
          </div>
          </div>
          
        </div>
        <div className="col-md-2"></div>
      </div>
     </form>
    </div>
  );
};

export default AddNewAdmin;