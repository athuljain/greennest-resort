
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <Navbar 
      variant="dark" 
      expand="lg" 
      className="custom-navbar" 
      sticky="top"
    >
      <Container>
        {/* Logo/Brand Name linked to home page */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          YourLogo
        </Navbar.Brand>
        
        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Collapsible Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* Main Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          
          {/* Call-to-Action Button */}
          <Nav>
            <Button 
              as={Link} 
              to="/booking" 
              variant="outline-light" 
              className="cta-button"
            >
              Book Now
            </Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}