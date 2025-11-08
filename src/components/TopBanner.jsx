import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // For the "Book Now" button

import "../styles/TopBanner.css"; // Your custom styles

export default function TopBanner() {
  return (
    <div className="top-banner-section d-flex align-items-center justify-content-center text-center">
      <Container>
        <div className="top-banner-content text-white">
          <h1 className="display-3 fw-bold mb-3 company-name">
            GreenNest Resorts
          </h1>
          <p className="lead mb-4 tagline">
           Relax in Nature’s Lap
          </p>
          <Button 
            as={Link} 
            to="/booking" 
            variant="light" 
            size="lg" 
            className="top-banner-button"
          >
            Book Now
          </Button>
        </div>
      </Container>
    </div>
  );
}