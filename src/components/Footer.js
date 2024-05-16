import { Container, Row, Col } from 'react-bootstrap'; 
import { Link } from 'react-scroll';

import './Footer.css';

function Footer() {
    return (
        <div className="margin-y">
          <Container className="text-center">
              <Row xs={1} md={4} className="g-5"> 
                  <Col>
                    <ul>
                        <li className="font-basic mb-4">Explore</li>
                        <li className="text-secondary"><Link to="top" smooth={true} duration={500}>Fiber & Phone</Link></li>
                        <li className="text-secondary"><Link to="top" smooth={true} duration={500}>TV</Link></li>
                        <li className="text-secondary"><Link to="hosting" smooth={true} duration={500}>Hosting</Link></li>
                        <li className="text-secondary"><Link to="email" smooth={true} duration={500}>Email</Link></li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                        <li className="font-basic mb-4">Services</li>
                        <li className="text-secondary"><Link to="top" smooth={true} duration={500}>Webmail</Link></li>
                        <li className="text-secondary"><Link to="top" smooth={true} duration={500}>Online Payment</Link></li>
                        <li className="text-secondary"><Link to="top" smooth={true} duration={500}>Pricelist</Link></li>
                        <li className="text-secondary"><Link to="top" smooth={true} duration={500}>Recharge</Link></li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                        <li className="font-basic mb-4">Support</li>
                        <li className="text-secondary"><Link to="top" smooth={true} duration={500}>Information</Link></li>
                        <li className="text-secondary"><Link to="top" smooth={true} duration={500}>Help Center</Link></li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                        <li className="font-basic mb-4">Company</li>
                        <li className="text-secondary"><Link to="top" smooth={true} duration={500}>About Us</Link></li>
                        <li className="text-secondary"><Link to="top" smooth={true} duration={500}>Latest News</Link></li>
                        <li className="text-secondary"><Link to="top" smooth={true} duration={500}>Work with us</Link></li>
                    </ul>
                  </Col>
              </Row>
          </Container>
        </div>
    );
}

export default Footer;