import React from 'react'
import './AboutUsSection.css'

export default function AboutUsSection() {
  return (
    <section className="aboutus-section">
      <div className="aboutus-background-image"></div>
      <div className="aboutus-container">
        {/* Left Content - Title and First Paragraph */}
        <div className="aboutus-left">
          <div className="aboutus-title-box">
            <h2 className="aboutus-title">ABOUT US</h2>
          </div>
          
          <div className="aboutus-content-box">
            <p className="aboutus-text">
              AES stands at the forefront of the energy and infrastructure industry, delivering integrated solutions tailored to the evolving needs of our clients. With a steadfast commitment to innovation, quality, and reliability, we specialize in providing state-of-the-art generator supply and maintenance, electric panel manufacturing and installation, lift systems, and advanced HVAC and VRV systems.
            </p>
          </div>
        </div>

        {/* Right Content - Two Paragraphs */}
        <div className="aboutus-right">
          <div className="aboutus-content-box">
            <p className="aboutus-text">
              Founded on the principles of excellence and customer satisfaction, AES has consistently proven itself as a trusted partner for businesses and individuals across residential, commercial, and industrial sectors. Our dedication to precision engineering and innovative problem-solving allows us to transform challenges into opportunities, creating solutions that empower businesses and enhance daily living.
            </p>
          </div>
          
          <div className="aboutus-content-box">
            <p className="aboutus-text">
              With a team of seasoned experts, cutting-edge technology, and a results-driven approach, we are uniquely positioned to deliver comprehensive services that adhere to the highest standards of safety, efficiency, and sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
