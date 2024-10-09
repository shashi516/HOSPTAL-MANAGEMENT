import FooterContent from "../component/FooterContent";
import hospital from "../images/hospital.jpg";
import facility from "../video/facility.mp4";
import img1 from "../images/PM.webp";
import img2 from "../images/EHI.webp";
import img4 from "../images/MSC.jpeg";
import icu from "../images/icu.webp"


const AboutUs = () => {
  return (
    <div>
      <div className="container-fluid" style={{backgroundColor:"#f7f7f7"}}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div style={{textAlign:"center"}}>
             <h1 style={{color:"blue"}}>FamilyHealthcare</h1>
            </div>
           <hr style={{textAlign:"center"}} />
           <div className="row">
           <div className="col-md-6" style={{textAlign:"center"}}>
              <img src={hospital} alt="" id="aboutimg" style={{height:"300px",maxWidth:"100%",transition:"1s"}} />
            </div>
            <div className="col-md-6">
              <h2>About-Us</h2>
             <div id="sp" style={{padding:"2%"}}>
             <span >
              Welcome to <b>FamilyHealthcare</b>, your trusted partner in modern healthcare technology. We specialize in delivering a
               comprehensive Hospital Management System (HMS) designed to streamline hospital operations, improve patient care, and enhance overall efficiency for healthcare providers
              In today’s fast-paced healthcare environment, managing patient information, medical staff, appointments, and billing can be overwhelming. Our solution offers a user-friendly platform 
              that integrates all essential hospital functions into one seamless system, enabling healthcare institutions to <b>focus on delivering exceptional patient care.</b>
              </span>
             </div>
            </div>
           </div>
           <div className="row">
            <div className="col-md-4">
              
             <div style={{padding:"20%"}}>
             <h2>Our Mission</h2>
             <div id="sp" style={{padding:"2%"}}>
             <span >
             Our mission is to empower hospitals and healthcare facilities by providing a robust and scalable management system that minimizes administrative tasks,
              maximizes productivity, and supports data-driven decision-making for improved patient outcomes.
              </span>
             </div>
             </div>
            </div>
            <div className="col-md-8">
            <div style={{textAlign:"center",marginTop:"5%"}}>
            <video width="700" autoPlay muted loop style={{border:"8px groove black",borderRadius:"25px"}}>
              <source src={facility} type="video/mp4"/>
            </video>
           </div>
            </div>
           </div>
           <div id="offer" style={{padding:"5%"}}>
            <h2>What We Offer:</h2>
            
              <ul>
                <li><b>Patient Management:</b> Easily track patient details, appointments, and treatment history with a few clicks</li> <br />
                <li><b>Medical Staff Coordination:</b> Efficiently schedule, assign roles, and monitor the performance of healthcare professionals.</li><br />
                <li><b>Electronic Health Records (EHR):</b> Secure storage and easy retrieval of patient medical records.</li><br />
                <li><b>Billing and Financial Management:</b> Simplified and accurate billing, invoicing, and insurance claim management.</li><br />
                <li><b>Inventory & Supply Chain:</b> Manage hospital supplies and pharmaceuticals to ensure continuous availability.</li><br />
                <li><b>Data Analytics and Reporting:</b> Generate real-time reports and insights to monitor hospital performance and patient care quality</li>
              </ul>
           </div>
           <div>
            <h2 style={{}}>Facilities</h2>
           </div>
            <div className="row" style={{backgroundColor:"black"}}>
            <div style={{padding:"5%",textAlign:"center", border:"1px solid black"}}>
            <img src={img1} alt="" id="aboutimg" style={{height:"400px",transition:"1s"}}/>
            <img src={img2} alt=""  id="aboutimg" style={{height:"400px",marginLeft:"2%",transition:"1s"}}/>
            <img src={img4} alt=""  id="aboutimg" style={{height:"400px",marginLeft:"2%",transition:"1s"}}/>
            <img src={icu} alt=""  id="aboutimg" style={{height:"579px",marginTop:"2%",transition:"1s"}}/>
           </div>
            </div>
            <div className="row">
              
                <div id="offer" style={{padding:"5%"}}>
                  <h2>Our Values</h2>
                 <ul>
                  <li><b>Excellence in Care:</b> Helping hospitals focus more on patient care and less on paperwork.</li><br />
                  <li><b>Reliability:</b> Delivering a stable and secure system with 24/7 support.</li><br />
                  <li><b>Innovation:</b> Continuously improving our system to meet the latest healthcare needs and standards.</li>
                 </ul>
                </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <FooterContent/>
    </div>    
  )
}
export default AboutUs;