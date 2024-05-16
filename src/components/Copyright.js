import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Content.css';

class Copyright extends Component {
    render() {
        return (
            <div className="back-color py-3">
                <Container>
                    <Row> 
                      <Col md="left">
                        <small className="m-0"> Copyright © Samsun Nahar. All Rights Reserved </small> 
                      </Col>      
                   </Row> 
               </Container>
            </div>
        );
    }
}

export default Copyright;