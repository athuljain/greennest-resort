import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

import "../styles/TopBanner.css"; 

import bannerImg1 from '../assets/banner1.jpg';
import bannerImg2 from '../assets/banner2.jpg';
import bannerImg3 from '../assets/backgroundImg.jpg';

export default function TopBanner() {
   
    const images = [bannerImg1, bannerImg2, bannerImg3];
    const [currentSlide, setCurrentSlide] = useState(0);

  
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
        }, 5000); 

        
        return () => clearInterval(timer); 
    }, [images.length]); 

    const currentImageUrl = images[currentSlide];

    return (
        <div className="top-banner-section d-flex align-items-center justify-content-center text-center">
            

            <div 
                className="banner-background" 
                key={currentSlide} 
                style={{ backgroundImage: `url(${currentImageUrl})` }} 
            />

            <div className="banner-overlay" />

      
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