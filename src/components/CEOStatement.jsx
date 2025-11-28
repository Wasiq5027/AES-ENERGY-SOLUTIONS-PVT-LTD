import React from 'react'
import './CEOStatement.css'

export default function CEOStatement() {
  return (
    <section className="ceo-statement-section">
      <div className="ceo-statement-container">
        {/* Left Side - Title and Name */}
        <div className="ceo-statement-left">
          <h2 className="ceo-label">CEO</h2>
          <h1 className="ceo-statement-title">STATEMENT</h1>
          <p className="ceo-name">Mudassar Ashfaq</p>
          <div className="ceo-underline"></div>
        </div>

        {/* Center - CEO Image */}
        <div className="ceo-image-container">
          <div className="ceo-image-frame">
            <img src="/assets/PHOTO-2024-11-23-13-39-06.jpg" alt="Mudassar Ashfaq - CEO" className="ceo-image" />
          </div>
        </div>

        {/* Right Side - Quote */}
        <div className="ceo-statement-right">
          <div className="ceo-quote">
            <span className="quote-mark opening">"</span>
            <p className="quote-text">
              Innovation and reliability are the cornerstones of our journey to empower businesses and transform lives
            </p>
            <span className="quote-mark closing">"</span>
          </div>
        </div>
      </div>

      {/* Statement Content */}
      <div className="ceo-statement-content">
        <p className="statement-paragraph">
          It is with immense pride and gratitude that I welcome you to AES since our inception, we have been driven by a singular purpose: to empower individuals and businesses with the tools and infrastructure they need to succeed. Over the years, our unwavering commitment to excellence, innovation, and customer satisfaction has positioned us as a trusted partner in the energy and infrastructure sectors.
        </p>

        <p className="statement-paragraph">
          At AES, we believe that success is not just measured by the milestones we achieve, but by the positive impact we create in the lives of our clients and communities. Our comprehensive product offerings are a testament to our dedication to providing solutions that are both reliable and forward-thinking.
        </p>

        <p className="statement-paragraph">
          To our customers, thank you for your trust and partnership. To our employees, thank you for your dedication and hard work. To our partners and stakeholders, thank you for your unwavering support. Together, we are building a brighter, stronger, and more sustainable future.
        </p>
      </div>
    </section>
  )
}
