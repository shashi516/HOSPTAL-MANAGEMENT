import { Link } from "react-router-dom";
import Login from "../Pages/Login";
import Appointment from "../Pages/Appointment";



const Hero = () => {
  return (
    <div>
        <div className="row" id="hrow">
            <div className="col-md-8" style={{padding:"12%"}}>
                <div >
                <h3 style={{marginTop:"10%", fontWeight:"800", color:"blue",fontFamily:"monospace"}}>Welcome to My FamilyHealthcare|Your Trusted Healthcare Provider.. </h3>
                </div>
                <div style={{fontFamily:"Serif"}}>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, enim nulla numquam nesciunt optio quaerat quos repellendus obcaecati tenetur temporibus iste placeat, consectetur reiciendis qui in culpa ducimus mollitia quia?
                    </p>
                </div>
                <div>
                <div className="d-flex" style={{gap:"1rem"}}>
                <Login/> 
                <Link to={"/Register"} ><button className="btn btn-success" style={{width:"200px",borderRadius:"0%"}}>Register</button></Link>
                </div>
                <div style={{marginLeft:"18%",marginTop:"2%"}}>
                <Appointment/>
                </div>

        </div>
            </div>
            <div className="col-md-4">

            </div>
        </div>
      
    </div>
  )
}



export default Hero;
