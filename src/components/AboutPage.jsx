import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import "../styles/About.css";
import aboutBgImg from '../assets/booking.jpg';

export default function AboutPage() {
    return (
        <div className="about-section py-5">
            <Container>
                
                {/* Section Title */}
                <h2 className="display-4 fw-bold text-center mb-5 about-title">
                    GreenNest Resorts
                </h2>

                <Row className="align-items-center">
                    
                 
                    <Col md={6} className="mb-4 mb-md-0">
                        <div className="image-wrapper">
                            <Image 
                                src={aboutBgImg} 
                                alt="Exterior view of the tranquil resort" 
                                fluid 
                                rounded
                                className="about-image shadow-lg"
                            />
                        </div>
                    </Col>
                    
                  
                    <Col md={6}>
                        <div className="about-content p-4">
                            <h3 className="fw-bold text-green mb-3">
                                Welcome to The GreenNest Resorts
                            </h3>
                            <p className="lead about-text">
                               Nestled among the comforts of a lush 25-acre Tea plantation and surrounded by hills on all sides, Green Nest is truly a paradise with endless beauty and happiness.The resort comprises a total of 15 luxurious rooms each offering incredible views of the tea plantations.All the rooms comes along with a balcony facing tea gardens.There are 4 category of rooms in the property each offering different levels of luxury.The subtly intoxicating aroma of Tea and the surrounding spices refreshes the whole mind body and soul.
                            </p>
                            <p className="about-text">
                                Tuck your soul away in this nature’s green coat, 
                                indulge in the blissful sanctity of peace or experience the adrenalin rush 
                                from the stimulating and exciting activities. With reasons unlimited it is 
                                only fair to say ‘One trip is just not enough’. 
                             
                            </p>
                            <p className="about-text">
                              your escape to Green Nest Resort is sure to leave you with unforgettable memories of your trip to Nilgiris. Green Nest Resort is the first of its kind in Ooty that offers luxury at the very edge of adventure.
                            </p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}