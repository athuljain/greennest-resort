import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

import "../styles/TopBanner.css"; 

import bannerImg1 from '../assets/banner1.jpg';
import bannerImg2 from '../assets/banner2.jpg';
import bannerImg3 from '../assets/backgroundImg.jpg'; // Using this as the third image

export default function TopBanner() {
    // Array of images for the slider
    const images = [bannerImg1, bannerImg2, bannerImg3];
    const [currentSlide, setCurrentSlide] = useState(0);

    // Effect to handle automatic image cycling
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
        }, 5000); // Swap image every 5000 milliseconds (5 seconds)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(timer); 
    }, [images.length]); // Depend on images.length to ensure proper cleanup if images change

    // Determine the current background image URL
    const currentImageUrl = images[currentSlide];

    return (
        <div className="top-banner-section d-flex align-items-center justify-content-center text-center">
            
            {/* The actual image container that transitions */}
            <div 
                className="banner-background" 
                key={currentSlide} // Key change forces a re-render for smooth CSS transition
                style={{ backgroundImage: `url(${currentImageUrl})` }} 
            />

            {/* Dark overlay for contrast */}
            <div className="banner-overlay" />

            {/* Content, positioned above the image and overlay */}
            <Container className="banner-content-container">
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