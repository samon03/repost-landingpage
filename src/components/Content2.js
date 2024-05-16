import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import pic4 from '../images/4.png';
import { CheckCircle } from 'react-bootstrap-icons';

class Content2 extends Component {
    render() {
        return (
            <div id="email">
                <Container>
                    <Row xs={1} md={2} className="justify-content margin-y">     
                      <Col>
                        <div>
                          <img alt="img" src={pic4} className="img-fluid" />
                        </div> 
                      </Col>  
                      <Col>
                        <div>
                          <h3 className="mt-5"> E-Mail Services </h3>
                          <p className="py-2 text-secondary">
                          Our E-Mail Mailbox with integrated digital office is the perfect basis for every Internet user:
                          </p>
                          <ul>
                            <li> <CheckCircle className="text-primary me-1"/> 1 GB of Space always included </li>
                            <li> <CheckCircle className="text-primary me-1"/> modern Contactbook and Calendar </li>
                            <li> <CheckCircle className="text-primary me-1"/> intuitive Notebook and To-Do List </li>
                            <li> <CheckCircle className="text-primary me-1"/> powerful AntiSpam and AntiVirus </li>
                          </ul>
                        </div> 
                      </Col>      
                   </Row> 
               </Container>
            </div>
        );
    }
}

export default Content2;