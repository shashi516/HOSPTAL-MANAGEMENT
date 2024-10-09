import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";
import { IoPersonAdd } from "react-icons/io5";


const AddNewDoctor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);
      await axios
        .post("http://localhost:4000/api/v1/user/doctor/addnew", formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
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
  <div className="conteiner-fluid " id="bodyadddoc">
   <form onSubmit={handleAddNewDoctor}>
   <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10" style={{textAlign:"center"}}>
      <span style={{fontSize:"100px"}}>{<IoPersonAdd/>}</span>
      <h1>Add-New-Doctor</h1><hr/>
          <div className="row d-flex p-4 mb-5" style={{border:"1px solid black",borderRadius:"25px",boxShadow:"0px 5px 5px 5px grey"}}>
            <div className="col-md-6" style={{backgroundColor:"#b0aac0",minHeight:"500px" }}> 
            <div id="docimg">
              <img
                src={
                  docAvatarPreview ? `${docAvatarPreview}` : "/docHolder.jpg"
                }
                alt="Doctor Avatar"
                
              />
              <input type="file" className="form-control" onChange={handleAvatar} />
            </div>
            </div>
            <div className="col-md-6">
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                className="form-control inpad"
                onChange={(e) => setFirstName(e.target.value)}

              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                className="form-control inpad"
                onChange={(e) => setLastName(e.target.value)}
              />
              <input 
                type="text"
                placeholder="Email"
                value={email}
                className="form-control inpad"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Mobile Number"
                value={phone}
                className="form-control inpad"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="number"
                placeholder="NIC"
                value={nic}
                className="form-control inpad"
                onChange={(e) => setNic(e.target.value)}
              />
              <input
                type={"date"}
                placeholder="Date of Birth"
                value={dob}
                className="form-control inpad"
                onChange={(e) => setDob(e.target.value)}
              />
              <select
                value={gender}
                className="form-control inpad"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="form-control inpad"
                onChange={(e) => setPassword(e.target.value)}
              />
              <select
                value={doctorDepartment}
                className="form-control inpad"
                onChange={(e) => {
                  setDoctorDepartment(e.target.value);
                }}
              >
                <option value="">Select Department</option>
                {departmentsArray.map((depart, index) => {
                  return (
                    <option value={depart} key={index}>
                      {depart}
                    </option>
                  );
                })}
              </select>
              <br />
              <button type="submit" className="btn btn-primary form-control">Register New Doctor</button>
            </div>
            </div>
          </div>
      </div>
      <div className="col-md-1"></div>
    </div>
   </form>
  </div>
  );
};

export default AddNewDoctor;