import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import pic4 from '../images/4.png';
import { CheckCircle } from 'react-bootstrap-icons';

class Content1 extends Component {
    render() {
        return (
            <div id="hosting">
                <Container>
                    <Row xs={1} md={2} className="justify-content margin-y">     
                      <Col>
                        <div>
                          <img alt="img" src={pic4} className="img-fluid"/>
                        </div> 
                      </Col>  
                      <Col className="float-end">
                        <div>
                          <h3 className="mt-5">Hosting</h3>
                          <p className="py-2 text-secondary">
                              With our shared web hosting, we offer small and medium-sized projects the perfect foundation that leaves hardly any wishes unfulfilled:
                          </p>
                          <ul>
                            <li> <CheckCircle className="text-primary me-1"/> Multiversion PHP Support </li>
                            <li> <CheckCircle className="text-primary me-1"/> One-click-installer for many popular apps </li>
                            <li> <CheckCircle className="text-primary me-1"/> Free Let's Encrypt Certificates</li>
                          </ul>
                        </div> 
                      </Col>      
                   </Row> 
               </Container>
            </div>
        );
    }
}

export default Content1;