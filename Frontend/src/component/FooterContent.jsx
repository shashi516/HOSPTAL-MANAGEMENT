import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
const FooterContent = () => {
  return (
    <div>
      <div className="container-fluid "  style={{backgroundColor:"white",marginTop:"2%"}}> 
        <div className="row" id="footer">
            <div className="col-sm-3" style={{textAlign:"center",paddingTop:"12%"}}>
                <div>
                <img src={logo} alt="logo" id="logo" style={{borderRadius:"50%",height:"120px", transition:".5s"}} />
                </div>
            </div>
            <div className="col-sm-3">
               <div id="QL">
                <h4 style={{color:"#d64161"}}>Quick Link</h4>
                <ul>
                    <li><Link to="/" className="ql">Home</Link></li>
                    <li><Link to="/AboutUs" className="ql">About-Us</Link></li>
                    <li><Link to="/ContactUs" className="ql">Contact-Us</Link></li>
                    <li><Link to="/Register" className="ql">Register</Link></li>
                </ul>
               </div>
               <div id="wl">
                <h4 style={{color:"#d64161"}}>Working..</h4>
                <ul>
                    <li>Mon:10:00 AM to 06:00 PM</li>
                    <li>Tue:10:00 AM to 06:00 PM</li>
                    <li>Wed:10:00 AM to 06:00 PM</li>
                    <li>Thu:10:00 AM to 06:00 PM</li>
                    <li>Fri:10:00 AM to 06:00 PM</li>
                    <li>Sat:10:00 AM to 06:00 PM</li>
                    <li>Sun:10:00 AM to 06:00 PM</li> 
                </ul>
               </div>
            </div>
            <div className="col-sm-3"></div>
            <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  )
}

export default FooterContent
