import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Check2Circle } from 'react-bootstrap-icons';
import './Pricing.css';

function Pricing() {
  return (
     <div id="pricing" className="back-color">
        <Container className="margin-y">
         <Row xs={1} md={3} className="g-3">
            <Col>
              <Card className="text-center p-5">
                <Card.Body>
                  <Card.Title className="mb-1 font-basic">Basic</Card.Title>
                  <Card.Text className="text-secondary">Starter</Card.Text>
                </Card.Body>
                  <h1 className="mb-3 font-month"><small className="font-20 text-up">$</small>199<small className="fw-light font-20">/month</small></h1>
                  <ListGroup className="list-group-flush text-start px-4">
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>10GB Disk Space</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>10GB Bandwidth</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>10 Email Accounts</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>Subdomains</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>Maintenence</ListGroup.Item>
                  </ListGroup>
                <Card.Body>
                  <Button className="mt-3 btn-primary w-100">Choose Plan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center p-5">
                <Card.Body>
                  <Card.Title className="mb-1 font-basic">Standard</Card.Title>
                  <Card.Text className="text-secondary">Better Results</Card.Text>
                </Card.Body>
                  <h1 className="mb-3 font-month"><small className="font-20 text-up">$</small>299<small className="fw-light font-20">/month</small></h1>
                  <ListGroup className="list-group-flush text-start px-4">
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>20GB Disk Space</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>20GB Bandwidth</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>20 Email Accounts</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>Subdomains</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>Maintenence</ListGroup.Item>
                  </ListGroup>
                <Card.Body>
                  <Button className="mt-3 btn-primary w-100">Choose Plan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center p-5">
                <Card.Body>
                  <Card.Title className="mb-1 font-basic">Premium</Card.Title>
                  <Card.Text className="text-secondary">Go all in one</Card.Text>
                </Card.Body>
                  <h1 className="mb-3 font-month"><small className="font-20 text-up">$</small>199<small className="fw-light font-20">/month</small></h1>
                  <ListGroup className="list-group-flush text-start px-4">
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>50GB Disk Space</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>50GB Bandwidth</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>50 Email Accounts</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>10 Subdomains</ListGroup.Item>
                    <ListGroup.Item><Check2Circle className="text-primary fw-bold me-2" size={20}/>Maintenence</ListGroup.Item>
                  </ListGroup>
                <Card.Body>
                  <Button className="mt-3 btn-primary w-100">Choose Plan</Button>
                </Card.Body>
              </Card>
            </Col>
         </Row>
        </Container>
     </div>
  );
}

export default Pricing;