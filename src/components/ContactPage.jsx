import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import "../styles/Contact.css";
import ContactBg from '../assets/ContactBg.jpg';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Form Submitted:', formData);
        alert(`Thank you, ${formData.name}. We have received your inquiry and will be in touch shortly!`);
        setFormData({ name: '', email: '', message: '' }); // Clear form
    };

    return (
        <div className="contact-section py-5" style={{ backgroundImage: `url(${ContactBg})` }}>
            <div className="overlay-light">
                <Container>
                    <h2 className="display-4 fw-bold text-center mb-5 contact-title">
                        Get In Touch
                    </h2>

                    <Row>
                        {/* 1. Contact Information Column */}
                        <Col lg={5} className="mb-4 mb-lg-0">
                            <Card className="contact-info-card h-100 shadow-lg border-0">
                                <Card.Body className="d-flex flex-column justify-content-between">
                                    <div>
                                        <h3 className="fw-bold mb-4 text-green">Reach Us Directly</h3>

                                        {/* Phone */}
                                        <div className="contact-detail mb-3">
                                            <FaPhone className="me-3 contact-icon" />
                                            <div>
                                                <p className="fw-bold mb-0">Phone</p>
                                                <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="contact-detail mb-3">
                                            <FaEnvelope className="me-3 contact-icon" />
                                            <div>
                                                <p className="fw-bold mb-0">Email</p>
                                                <a href="mailto:info@greenoasis.com" className="contact-link">info@GreenNestResorts.com</a>
                                            </div>
                                        </div>

                                        {/* Address */}
                                        <div className="contact-detail mb-4">
                                            <FaMapMarkerAlt className="me-3 contact-icon" />
                                            <div>
                                                <p className="fw-bold mb-0">Address</p>
                                                <p className="mb-0 contact-address">
                                                    123 Serenity Lane, <br />
                                                    Tropical Paradise, OAO 90210
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Social Media Icons */}
                                    <div className="social-links mt-4">
                                        <h4 className="fw-bold mb-3 text-green">Follow Us</h4>
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook className="social-icon" /></a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter className="social-icon" /></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* 2. Contact Form Column */}
                        <Col lg={7}>
                            <Card className="contact-form-card shadow-lg border-0">
                                <Card.Body>
                                    <h3 className="fw-bold mb-4 text-center">Send Us a Message</h3>
                                    <Form onSubmit={handleSubmit}>
                                        
                                        <Form.Group controlId="contactName" className="mb-3">
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                                        </Form.Group>

                                        <Form.Group controlId="contactEmail" className="mb-3">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                                        </Form.Group>

                                        <Form.Group controlId="contactMessage" className="mb-4">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={5} name="message" value={formData.message} onChange={handleChange} required />
                                        </Form.Group>

                                        <div className="d-grid">
                                            <Button variant="primary" type="submit" className="submit-contact-btn">
                                                Submit Inquiry
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}