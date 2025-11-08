import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/Footer.css';

export default function Footer() {
    // Get the current year for dynamic copyright
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="site-footer pt-5 pb-3">
            <Container>
                <Row>
                    {/* Column 1: Resort Info & Copyright */}
                    <Col md={4} className="mb-4">
                        <h5 className="footer-heading mb-3">GreenNest Resorts</h5>
                        <p className="footer-text">
                            Discover tranquility and sustainable luxury nestled between the mountains and the sea.
                        </p>
                    </Col>

                    {/* Column 2: Quick Links */}
                    <Col md={4} className="mb-4 footer-links-col">
                        <h5 className="footer-heading mb-3">Quick Links</h5>
                        <ul className="list-unstyled footer-list">
                            <li><Link to="/about" className="footer-link">About Us</Link></li>
                            <li><Link to="/services" className="footer-link">Our Services</Link></li>
                            <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
                            <li><Link to="/booking" className="footer-link">Book Now</Link></li>
                        </ul>
                    </Col>

                    {/* Column 3: Contact Information & Social Media */}
                    <Col md={4} className="mb-4 footer-contact-col">
                        <h5 className="footer-heading mb-3">Contact</h5>
                        <ul className="list-unstyled footer-list">
                            <li>
                                <FaMapMarkerAlt className="me-2 footer-icon" />
                                123 Serenity Lane, Tropical Paradise
                            </li>
                            <li>
                                <FaPhone className="me-2 footer-icon" />
                                <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a>
                            </li>
                            <li>
                                <FaEnvelope className="me-2 footer-icon" />
                                <a href="mailto:info@greenoasis.com" className="footer-link">info@GreenNestResorts.com</a>
                            </li>
                        </ul>
                        
                        {/* Social Icons */}
                        <div className="social-footer mt-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook className="social-footer-icon" /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="social-footer-icon" /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter className="social-footer-icon" /></a>
                        </div>
                    </Col>
                </Row>

                {/* --- Copyright Row --- */}
                <Row className="mt-4 pt-3 border-top-custom">
                    <Col className="text-center">
                        <p className="copyright-text mb-0">
                            &copy; {currentYear} **GreenNest Resorts**. All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}