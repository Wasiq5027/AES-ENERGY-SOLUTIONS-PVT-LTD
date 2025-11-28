import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side - Equipment Visual with Blue Shape */}
        <div className="hero-visual">
          <img 
            src="/assets/4x/4x/Asset 12@4x.png" 
            alt="" 
            className="shape-blue-outline"
          />
          
          <div className="hero-image-wrapper">
            <img 
              src="/assets/4x/4x/Asset 16@4x.png" 
              alt="Equipment" 
              className="hero-equipment-image"
            />
            <img 
              src="/assets/4x/4x/Asset 15@4x.png" 
              alt="" 
              className="shape-blue-front"
            />
            <img 
              src="/assets/4x/4x/Asset 15@4x.png" 
              alt="" 
              className="shape-blue-rear"
            />
            <img 
              src="/assets/4x/4x/Asset 13@4x.png" 
              alt="" 
              className="shape-grey-filled"
            />
             <img 
              src="/assets/4x/4x/Asset 14@4x.png" 
              alt="" 
              className="shape-grey-outline"
            />
          </div>
        </div>
        
        {/* Right Side - Text Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-outline">INNOVATING</span>
            <span className="title-solid">Energy & Infrastructure</span>
          </h1>
          <p className="hero-description">
            AES leads the energy and infrastructure industry, offering innovative solutions 
            in generator supply, electric panels, lift systems, and advanced HVAC and VRV 
            systems with a focus on quality and reliability.
          </p>
          <Link to="/about" className="hero-cta">Explore</Link>
        </div>
      </div>
      <div className="hero-bottom-line"></div>
    </section>
  )
}
