import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/Gallery.css'; // Your custom styles

// Import your images (assuming you've moved them into a src/assets folder)
import resortImg1 from '../assets/resort1.jpg';
import resortImg2 from '../assets/resort2.jpg';
import resortImg3 from '../assets/resort3.jpg';
import resortImg4 from '../assets/resort4.jpg';
import resortImg5 from '../assets/resort5.jpg';
import resortImg6 from '../assets/resort6.jpg';

export default function Gallery() {
    // Array of image imports for easy mapping
    const galleryImages = [
        resortImg1,
        resortImg2,
        resortImg3,
        resortImg4,
        resortImg5,
        resortImg6,
    ];

    return (
        <div className="gallery-section py-5">
            <Container>
                {/* Section Title */}
                <h2 className="display-4 fw-bold text-center mb-5 section-title">
                    Our Resort Gallery
                </h2>

                <Row className="g-4"> 
                    {/* g-4 adds consistent gutter (spacing) between columns */}
                    {galleryImages.map((imgSrc, index) => (
                        <Col key={index} sm={12} md={6} lg={4}>
                            <div className="gallery-item-wrapper">
                                <img
                                    src={imgSrc}
                                    alt={`Resort View ${index + 1}`}
                                    className="img-fluid gallery-image"
                                />
                                <div className="overlay">
                                    <span className="caption">View Details</span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}