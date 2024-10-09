
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navs() {
  return (
    <div >
      <Navbar expand="lg" id="nav" fixed='top' >
      <Navbar.Brand href="/" style={{fontFamily:"monospace",color:"wheat"}}>Familyhealthcare</Navbar.Brand> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-link' href="/">Home</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link  className='nav-link' href="/AboutUs">AboutUs</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link className='nav-link' href="/ContactUs">ContactUs</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav>
          <Nav>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Navs;