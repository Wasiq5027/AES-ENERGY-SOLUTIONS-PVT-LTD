import React from 'react'
import './MissionVision.css'

export default function MissionVision() {
  return (
    <section className="mission-vision-section">
      <div className="mission-vision-container">
        {/* Mission - Top Section */}
        <div className="mission-box">
          <h2 className="mission-title">MISSION</h2>
          <p className="mission-text">
            AES is driven by a clear vision to lead the energy and infrastructure sectors with unmatched quality and expertise. We are committed to relentless innovation, ensuring our solutions remain ahead of the curve in meeting modern demands. By placing our customers at the heart of our operations, we build enduring relationships founded on trust and satisfaction. Furthermore, we embrace sustainability by incorporating eco-friendly practices and energy-efficient technologies, contributing to a greener and more responsible future.
          </p>
        </div>

        {/* Bottom Section - Why We Stand Out & Vision */}
        <div className="mission-vision-content">
          {/* Left Side - Why We Stand Out */}
          <div className="why-stand-out">
            <div className="why-stand-out-content">
              <h2 className="why-stand-out-title"><span className="italic-text">Why We</span> Stand Out?</h2>
              <ul className="why-stand-out-list">
                <li>A proven track record of success with diverse and high-profile projects.</li>
                <li>A highly skilled team of engineers, technicians, and project managers dedicated to excellence.</li>
                <li>Cutting-edge technology and innovative methodologies for seamless execution.</li>
                <li>A customer-first approach ensuring personalized service and long-term support.</li>
                <li>At AES, we are more than just a service provider; we are a partner in progress. Let us empower your operations and elevate your spaces with solutions that are built for today and prepared for tomorrow.</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Vision */}
          <div className="vision-box">
            <h2 className="vision-title">Our VISION</h2>
            <p className="vision-text">
              "To set a global benchmark in energy and infrastructure solutions by delivering innovative, reliable, and sustainable products and services that redefine industry standards."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}