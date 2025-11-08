import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import GNLogo from '../assets/greennestLogo.png';

export default function Header() {
  return (
    <Navbar 
      variant="dark" 
      expand="lg" 
      className="custom-navbar" 
      sticky="top"
    >
      <Container>
        {/* Logo/Brand now displays the image */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img
            src={GNLogo}
            alt="Green Nest Resort Logo"
            className="navbar-logo" // Added class for precise sizing
          />
        </Navbar.Brand>
        
        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Collapsible Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* Main Navigation Links */}
          <Nav className="me-auto navigation-links"> 
            {/* Added custom class for link styling refinement */}
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="nav-link-custom">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/booking" className="nav-link-custom">Booking</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
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