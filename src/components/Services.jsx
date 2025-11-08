
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import '../styles/Services.css';


import advImg from "../assets/advanture.jpg";

import accoImg1 from '../assets/accomodation1.jpg';

import wellnessImg1 from '../assets/wellness.jpg'; 

export default function Services() {
  return (
    <div className="services-section py-5">
      <Container>

        <h2 className="display-4 fw-bold text-center mb-5 section-title">
          Our Services
        </h2>
        
        <Row>
        
          <Col md={4} className="mb-4">
            <Card className="service-card h-100 shadow">
              <Card.Img variant="top" src={accoImg1} className="service-card-img" />
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h3" className="fw-bold mb-3">Accommodation</Card.Title>
                <Card.Text>
                  Relax in our luxurious rooms and suites, designed for your
                  comfort with stunning natural views.
                </Card.Text>
                <Button 
                  as={Link} 
                  to="/services/accommodation" 
                  className="btn-service mt-auto"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>

       
          <Col md={4} className="mb-4">
            <Card className="service-card h-100 shadow">
              <Card.Img variant="top" src={advImg} className="service-card-img" />
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h3" className="fw-bold mb-3">Adventure Activities</Card.Title>
                <Card.Text>
                  Explore the wild side with our guided hikes, kayaking trips,
                  and mountain biking trails for all skill levels.
                </Card.Text>
                <Button 
                  as={Link} 
                  to="/services/adventure" 
                  className="btn-service mt-auto"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>

       
          <Col md={4} className="mb-4">
            <Card className="service-card h-100 shadow">
              <Card.Img variant="top" src={wellnessImg1} className="service-card-img" />
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h3" className="fw-bold mb-3">Wellness & Spa</Card.Title>
                <Card.Text>
                  Rejuvenate your body and mind at our world-class spa,
                  offering massages, yoga, and holistic treatments.
                </Card.Text>
                <Button 
                  as={Link} 
                  to="/services/wellness" 
                  className="btn-service mt-auto"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}