 import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,useEffect } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';

const Appointment = () => {

  const[show,setShow]=useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

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

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
      console.log(data.doctors);
    };
    fetchDoctors();
  }, []);
  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPhone(""),
        setNic(""),
        setDob(""),
        setGender(""),
        setAppointmentDate(""),
        setDepartment(""),
        setDoctorFirstName(""),
        setDoctorLastName(""),
        setHasVisited(""),
        setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleclose=()=>{
    return setShow(!show)
  }

  return (
    <div>
      <Button  variant='success' id='regbtn'  onClick={handleclose}>Appointment</Button>
       <Modal
      size='lg'
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}  onHide={handleclose}
      fullscreen="md-down"
    >
      <Modal.Header closeButton>
        <Modal.Title style={{color:"navy",fontFamily:"monospace"}} id="contained-modal-title-vcenter">
          Appointment Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleAppointment}>
           <div>
           <div className='d-flex' style={{gap:"4.5rem"}}>
              <div>
              <b> First Name</b>
                <input type="text" id='inpAppointment' value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='form-control'  />
              </div>
              <div>
              <b> Last Name</b>
                <input type="text" id='inpAppointment' value={lastName} onChange={(e)=>setLastName(e.target.value)} className='form-control' />
              </div>
              <div>
              <b> Email</b>
                <input type="email" id='inpAppointment' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' />
              </div>
            </div>
            <div className='d-flex mt-3' style={{gap:"4.5rem"}}>
              <div>
              <b> Phone</b>
                <input type="text" className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)} id='inpAppointment'  />
              </div>
              <div>
              <b> Date Of Birth</b>
                <input type="date"  className='form-control' value={dob} onChange={(e)=>setDob(e.target.value)} id='inpAppointment'  />
              </div>
              <div>
              <b>Gender</b>
            <select className="form-select"  value={gender} id='inpAppointment' onChange={(e)=>setGender(e.target.value) } > 
            <option value="">---Select Gender---</option>
            <option value="Male" >Male</option>
            <option value="Female">Female</option>
            </select>
              </div>
            </div>
            <div className='d-flex mt-3' style={{gap:"4.5rem"}}>
              <div>
              <b> Nic</b>
                <input type="text" className='form-control' value={nic} onChange={(e)=>setNic(e.target.value)} id='inpAppointment' />
              </div>
              <div>
              <b> Appointment Date</b>
                <input type="date" className='form-control' value={appointmentDate} onChange={(e)=>setAppointmentDate(e.target.value)} id='inpAppointment'  />
              </div>
              <div>
              <b>Department</b>
              <select id='inpAppointment'
              className='form-select' 
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctorFirstName("");
                setDoctorLastName("");
              }}
            >
              {departmentsArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
            </select>
              </div>
            </div>
            <div className='d-flex mt-3' style={{gap:"4.5rem"}}>
              <div>
                <b>Doctor Name</b>
              <select id='inpAppointment'
              className='form-select'
              value={doctorFirstName && doctorLastName ? `${doctorFirstName} ${doctorLastName}` : ""}
              onChange={(e) => {
                const selectedDoctor = doctors.find(doctor => `${doctor.firstName} ${doctor.lastName}` === e.target.value);
                if (selectedDoctor) {
                  setDoctorFirstName(selectedDoctor.firstName);
                  setDoctorLastName(selectedDoctor.lastName);
                }
              }}
            
              disabled={!department}
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter((doctor) => doctor.doctorDepartment === department)
                .map((doctor, index) => (
                  <option
                    value={`${doctor.firstName} ${doctor.lastName}`}
                    key={index}
                  >
                    {doctor.firstName} {doctor.lastName}
                  </option>
                ))}
            </select>

              </div>
            </div>
            <div>

              <textarea className='form-control mt-3' style={{border:"3px solid black"}} value={address} onChange={(e)=>setAddress  (e.target.value)} rows={3}>Address..</textarea>
            </div>
            <div style={{marginTop:"2%"}}>
             <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
            /> &nbsp; 
            <span >Have you visited before?</span>

          </div>
            <hr/>
            <div>
              <button className='btn btn-danger form-control' type='submit'>GetAppointment</button>
            </div>
           </div>
        </form>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default Appointment;
