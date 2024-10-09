import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route ,Routes  } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Appointment from "./Pages/Appointment";
import ContactUs from './Pages/ContactUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Register';


const App = () => {
  return (
    <div>
      
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Contactus" element={<ContactUs/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
    
    </div>
  )
}

export default App;
