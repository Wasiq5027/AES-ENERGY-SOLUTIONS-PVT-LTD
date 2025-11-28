import React from 'react'
import { Link } from 'react-router-dom'
import './ExperienceExcellence.css'

export default function ExperienceExcellence() {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="experiencetitle">
          <span className="title-blue">Experience Excellence in</span>{' '}
          <span className="title-gray">Energy Solutions</span>
        </h2>
        <p className="experiencesubtitle">
          Discover how AES delivers cutting-edge solutions with precision and expertise, 
          transforming challenges into opportunities for a smarter future
        </p>
        
        <div className="products-showcase">
          <div className="product-item">
            <img src="/assets/GEn.png" alt="Closed Generator" className="product-image" />
          </div>
          
          <div className="product-item">
            <img src="/assets/pngegg (3).png" alt="Open Generator" className="product-image" />
          </div>
        
        </div>
        
        <Link to="/products" className="products-cta">Our Products</Link>
      </div>
    </section>
  )
}
