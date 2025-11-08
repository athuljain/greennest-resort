
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, Navigate, Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

import "../styles/ViewDetails.css";
import { servicesData } from '../Data/ServiceData'

// Re-import images for this component to be runnable
import advImg from "../assets/advanture.jpg";
import accoImg1 from '../assets/accomodation1.jpg';
import wellnessImg1 from '../assets/wellness.jpg'; 

const imageMap = {
    accoImg1: accoImg1,
    advImg: advImg,
    wellnessImg1: wellnessImg1
};

export default function ViewDetails() {
    // Get the service ID from the URL (e.g., 'accommodation')
    const { serviceId } = useParams();

    // Look up the service data
    const service = servicesData[serviceId];

    // If service is not found (e.g., bad URL), redirect to a 404 or home
    if (!service) {
        return <Navigate to="/" />; // Redirects to Home
    }

    const imageUrl = imageMap[service.imageKey];

    return (
        <div className="view-details-page py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        {/* Service Title Area */}
                        <div className="text-center mb-5 service-header">
                            <h1 className="display-4 fw-bold service-title-text">{service.title}</h1>
                            <p className="lead service-tagline">{service.tagline}</p>
                            <hr className="title-separator" />
                        </div>

                        {/* Image and Main Description */}
                        <Card className="shadow-lg mb-5 detail-card">
                            <Row className="g-0">
                                <Col md={6}>
                                    <Card.Img 
                                        src={imageUrl} 
                                        alt={service.title} 
                                        className="detail-image" 
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8BC34A/FFFFFF?text=Image+Unavailable"; }}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Card.Body className="p-5 d-flex flex-column justify-content-center">
                                        <h4 className="fw-bold mb-3 detail-section-title">Overview</h4>
                                        <p className="detail-description">{service.description}</p>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>

                        {/* Key Features Section */}
                        <div className="features-section p-5 mb-5 shadow-sm rounded-3">
                            <h3 className="fw-bold mb-4 text-center feature-header">Key Features Included</h3>
                            <Row className="g-4">
                                {service.features.map((feature, index) => (
                                    <Col sm={6} key={index}>
                                        <div className="feature-item">
                                            <FaCheckCircle className="feature-icon me-3" />
                                            <span className="feature-text">{feature}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        
                        {/* Call to Action */}
                        <div className="text-center mt-5">
                            <Button 
                                as={Link} 
                                to="/booking" 
                                size="lg" 
                                className="cta-book-button"
                            >
                                Book Your Experience Now
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}