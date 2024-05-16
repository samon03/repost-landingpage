import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import './Navbar.css';


function Navbar1() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home" className="fw-bold">RecHost</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="home" smooth={true} duration={500}>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="hosting" smooth={true} duration={500}>Hosting</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="email" smooth={true} duration={500}>Email</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="advantage" smooth={true} duration={500}>Advantage</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default Navbar1;