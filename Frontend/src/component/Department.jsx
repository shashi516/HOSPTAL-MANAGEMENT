import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Department = () => {
    const departmentsArray = [
        {
          name: "Pediatrics",
          imageUrl: "./departments/pedia.jpg",
        },
        {
          name: "Orthopedics",
          imageUrl: "./departments/ortho.jpg",
        },
        {
          name: "Cardiology",
          imageUrl: "/departments/cardio.jpg",
        },
        {
          name: "Neurology",
          imageUrl: "/departments/neuro.jpg",
        },
        {
          name: "Oncology",
          imageUrl: "/departments/onco.jpg",
        },
        {
          name: "Radiology",
          imageUrl: "/departments/radio.jpg",
        },
        {
          name: "Physical Therapy",
          imageUrl: "/departments/therapy.jpg",
        },
        {
          name: "ENT",
          imageUrl: "/departments/ent.jpg",
        },
      ];
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='container-department'>
        <div style={{color:"blue",textDecoration:"underline",margin:"2%"}}>
        <h2>Departments</h2>
        </div>
<Carousel  responsive={responsive} removeArrowOnDeviceType={["tablet",""]}>
{departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <img src={depart.imageUrl} alt="Department"  id='depart-image' />
                <div>
                <div className="depart-name">{depart.name}</div>
                <div style={{textAlign:"end"}}>
                <button className='btn btn-warning' id='btnmore'>more</button>

                </div>
                </div>
              </div>
            );
          })}
  
</Carousel>
    </div>
  )
}

export default Department
