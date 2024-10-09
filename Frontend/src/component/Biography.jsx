import { Link } from "react-router-dom";
import bio from "../images/bio.webp";

const Biography = () => {
  return (
    <div> 
        <div className="row">
            <div className="col-md-6">
                <img src={bio} alt="bio" id="bio"/>
            </div>
            <div className="col-md-6">
                <div style={{padding:"3%", fontFamily:"serif"}}>
                    <h2 style={{color:"blue",textDecoration:"underline"}}>Biography</h2>
                    <h3>Who we are..</h3>
                </div>
                <div style={{fontFamily:"serif"}}>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos beatae perspiciatis fugit, quaerat ex inventore blanditiis perferendis itaque repellendus quam illum obcaecati soluta ullam, dolorem et excepturi ut, voluptates sint!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, neque?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolorum ab consequuntur officiis rerum iure quasi. Placeat eum minus beatae exercitationem voluptatum alias maiores architecto commodi, consequuntur dolor magni est, suscipit qui, aspernatur sunt autem odio quisquam. Hic aspernatur, amet qui alias laudantium modi odit obcaecati vero ad illum soluta.</p>
                </div>
                <div style={{textAlign:"end"}}>
                    <Link to="/AboutUs"><button className="btn btn-info" id="btnmore">More</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Biography
