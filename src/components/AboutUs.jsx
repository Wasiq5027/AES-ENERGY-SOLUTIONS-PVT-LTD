import React from 'react'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Logo and Tagline */}
        <div className="about-header">
          <img src="/assets/about.png" alt="AES Energy Solutions" className="about-logo" />
        </div>
        
        {/* Description Paragraphs */}
        <div className="about-content">
          <p className="about-paragraph">
            Founded on the principles of excellence and customer satisfaction, AES has consistently 
            proven itself as a trusted partner for businesses and individuals across residential, 
            commercial, and industrial sectors.
          </p>
          
          <p className="about-paragraph">
            Our dedication to precision engineering and innovative problem-solving allows us to 
            transform challenges into opportunities, creating solutions that empower businesses 
            and enhance daily living.
          </p>
          
          <p className="about-paragraph">
            With a team of seasoned experts, cutting-edge technology, and a results-driven approach, 
            we are uniquely positioned to deliver comprehensive services that adhere to the highest 
            standards of safety, efficiency, and sustainability.
          </p>
        </div>
      </div>
    </section>
  )
}
