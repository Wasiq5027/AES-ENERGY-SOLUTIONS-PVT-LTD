import React from 'react'
import './OurServices.css'
import { Link } from 'react-router-dom'

export default function OurServices() {
  return (
    <section className="our-services-section">
      <div className="our-services-container">
        <div className="services-content">
          {/* Equipment/Visual Section - Left Side */}
          <div className="services-visual">
            <img 
              src="/assets/services.png" 
              alt="Our Services Equipment" 
              className="services-image"
            />
          </div>
          
          {/* Text Content Section - Right Side */}
          <div className="services-text">
            <h2 className="services-title">Our Services</h2>
            <p className="services-description">
              With a team of seasoned experts, cutting-edge technology, and a 
              results-driven approach, we are uniquely positioned to deliver 
              comprehensive services that adhere to the highest standards of 
              safety, efficiency, and sustainability.
            </p>
            <Link to="/products" className="services-cta">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
