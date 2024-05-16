import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Content.css';

class Content extends Component {
    render() {
        return (
            <div id="home" className="back-color">
                <Container >
                    <Row className="justify-content-md-center padding-content"> 
                      <Col md="auto">
                        <h2 className="mb-3">Your perfect domain is waiting for you!</h2>
                        <label className="mb-2">Check the availability of your desired domain, or get inspired with keywords:</label>
                        <Form.Control className="mb-3" size="lg" type="text" placeholder="Search here ..." />  
                      </Col>      
                   </Row> 
               </Container>
            </div>
        );
    }
}

export default Content;