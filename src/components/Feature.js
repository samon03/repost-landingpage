import { Container, Row, Col } from 'react-bootstrap';
import pic from '../images/host and admin.png';

function Feature() {
  return (
     <div id="advantage" className="back-color">
        <Container className="margin-y">
            <Row className="justify-content-md-center mb-5">     
                <Col className="text-center">
                  <div> 
                      <h3> Advantage </h3>
                      <p className="my-2 text-secondary">Why you are in good hands</p>
                  </div> 
               </Col>      
            </Row> 
            <Row xs={1} md={3} className="g-5 text-center">
                <Col>
                  <img alt='img' variant="top" src={pic} width={100} />               
                  <h5 className="my-2 fw-bold">Hyperlocal</h5>   
                  <p className="py-2">
                    Your data remains in Luxembourg: all our offices, our own technology, and also our parent company are 100% located within the country.
                  </p>
                </Col>
                <Col>
                  <img alt='img' variant="top" src={pic} width={100} />               
                  <h5 className="my-2 fw-bold">Tier IV & Tier II+</h5>   
                  <p className="py-2">
                    Our data centres comply with Tier IV and Tier II+ standards, and are located in geologically separated regions.
                  </p>
                </Col>
                <Col>
                  <img alt='img' variant="top" src={pic} width={100} />               
                  <h5 className="my-2 fw-bold">Grows with you</h5>   
                  <p className="py-2">
                    Our scaleable product range serves every project size and budget. From the small club site to the international corporation..
                  </p>
                </Col>
            </Row>
        </Container>
     </div>
  );
}

export default Feature;