import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { IoPersonAdd } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { BiMessageAdd } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigate = useNavigate();

  const gotoHomePage = () => {
    navigate("/");
    setShow(false);
  };
  const gotoDoctorsPage = () => {
    navigate("/doctors");
    setShow(false);
  };
  const gotoMessagesPage = () => {
    navigate("/messages");
    setShow(false);
  };
  const gotoAddNewDoctor = () => {
    navigate("/doctor/addnew");
    setShow(false);
  };
  const gotoAddNewAdmin = () => {
    navigate("/admin/addnew");
    setShow(false);
  };

  return (
    <>
  
    <div
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}
      >
       <div>
        <ul>
          <li>
              <button onClick={gotoHomePage} className=" w-100">
                  <span className="icon"><RxDashboard /></span>
                   Dashboard
              </button>
          </li>
          <li>
            <button onClick={gotoAddNewAdmin} className="w-100">
              <span className="icon"><MdAdminPanelSettings /></span>
              AddNewAdmin
            </button>
          </li>
          <li>
            <button onClick={gotoAddNewDoctor} className="w-100">
            <span className="icon"><IoPersonAdd /></span>
              AddNewDoctor
            </button>
          </li>
          <li>
            <button onClick={gotoDoctorsPage} className="w-100">
              <span className="icon"><FaUserDoctor /></span>
              Doctors
            </button>
          </li>
          <li>
            <button onClick={gotoMessagesPage} className="w-100">
              <span className="icon"><BiMessageAdd /></span>
               Messages
           </button>
          </li>
          <li >
            <Link to="/GetAppointment" style={{textDecoration:"none"}}>
            <button  className="w-100">
              <span className="icon"><FaNotesMedical/></span>
              Appointments
            </button>
            </Link>
          </li>
          <li >
            <button  onClick={handleLogout} className="w-100">
              <span className="icon"><RiLogoutCircleLine /></span>
              LogOut
            </button>
          </li>
        </ul>
       </div>
      </div>
    </>
  );
};

export default Sidebar;