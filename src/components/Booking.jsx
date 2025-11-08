import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../styles/Booking.css';
import bookingBgImg from '../assets/booking.jpg';

export default function Booking() {
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1,
        package: 'standard'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking Confirmed:', formData);
        alert(`Booking requested for ${formData.guests} guests from ${formData.checkIn} to ${formData.checkOut}.`);
        // In a real app, you'd send this data to an API
    };
    
    // Define package options
    const packages = [
        { value: 'standard', label: 'Standard Room - $250/night', details: 'Access to basic amenities and complimentary breakfast.' },
        { value: 'deluxe', label: 'Deluxe Suite - $450/night', details: 'Spacious room, ocean view, and exclusive spa access.' },
        { value: 'villa', label: 'Private Villa - $800/night', details: 'Full private villa with pool, concierge service, and all-inclusive dining.' },
    ];

    return (
        <div className="booking-section py-5" style={{ backgroundImage: `url(${bookingBgImg})` }}>
            <div className="overlay-dark">
                <Container>
                    <h2 className="display-4 fw-bold text-center mb-5 booking-title text-white">
                        Book Now
                    </h2>

                    <Row>
                        {/* 1. Package Details Column */}
                        <Col lg={5} className="mb-4 mb-lg-0">
                            <Card className="package-details-card h-100 shadow-lg border-0">
                                <Card.Body>
                                    <h3 className="fw-bold mb-4 text-green">Room & Package Selection</h3>
                                    {packages.map((pkg) => (
                                        <div key={pkg.value} className="package-option mb-3">
                                            <h4 className="package-label">{pkg.label}</h4>
                                            <p className="package-description">{pkg.details}</p>
                                            <hr />
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* 2. Simple Booking Form Column */}
                        <Col lg={7}>
                            <Card className="booking-form-card shadow-lg border-0">
                                <Card.Body>
                                    <h3 className="fw-bold mb-4 text-center">Confirm Your Dates</h3>
                                    <Form onSubmit={handleSubmit}>
                                        
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Form.Group controlId="checkInDate" className="mb-3">
                                                    <Form.Label>Check-In Date</Form.Label>
                                                    <Form.Control 
                                                        type="date" 
                                                        name="checkIn"
                                                        value={formData.checkIn}
                                                        onChange={handleChange}
                                                        required 
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="checkOutDate" className="mb-3">
                                                    <Form.Label>Check-Out Date</Form.Label>
                                                    <Form.Control 
                                                        type="date" 
                                                        name="checkOut"
                                                        value={formData.checkOut}
                                                        onChange={handleChange}
                                                        required 
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group controlId="packageSelect" className="mb-3">
                                            <Form.Label>Select Package</Form.Label>
                                            <Form.Control 
                                                as="select" 
                                                name="package"
                                                value={formData.package}
                                                onChange={handleChange}
                                                required
                                            >
                                                {packages.map(pkg => (
                                                    <option key={pkg.value} value={pkg.value}>
                                                        {pkg.label}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group controlId="guestCount" className="mb-4">
                                            <Form.Label>Number of Guests</Form.Label>
                                            <Form.Control 
                                                type="number" 
                                                name="guests"
                                                min="1"
                                                max="10"
                                                value={formData.guests}
                                                onChange={handleChange}
                                                required 
                                            />
                                        </Form.Group>

                                        <div className="d-grid">
                                            <Button variant="primary" type="submit" className="confirm-booking-btn">
                                                Confirm Reservation
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