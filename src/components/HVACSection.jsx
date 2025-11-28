import React, { useState } from 'react'
import './HVACSection.css'

export default function HVACSection() {
  const [openSolution, setOpenSolution] = useState(null)

  const toggleSolution = (id) => {
    setOpenSolution(openSolution === id ? null : id)
  }

  const solutions = [
    {
      id: 1,
      title: 'AC Systems',
      description: 'Energy-efficient air conditioning solutions for residential and commercial use, ensuring optimal comfort.'
    },
    {
      id: 2,
      title: 'HVAC Systems',
      description: 'Comprehensive heating, ventilation, and air conditioning systems for effective climate management in various environments.'
    },
    {
      id: 3,
      title: 'VRV Systems',
      description: 'Cutting-edge systems for large buildings that provide precise control over multiple indoor units while ensuring energy savings.'
    }
  ]

  return (
    <section className="hvac-section">
      <div className="hvac-container">
        <div className="hvac-content">
          <div className="hvac-text">
            <h2 className="hvac-title">AC, HVAC, and VRV Systems</h2>
            <p className="hvac-intro">
              Advanced AC, HVAC, and VRV (Variable Refrigerant Volume) systems designed to provide efficient climate control for homes, offices, and large-scale industrial spaces.
            </p>
            
            <div className="hvac-solutions">
              <h3 className="solutions-heading">Our Solutions Include:</h3>
              
              <div className="solutions-list">
                {solutions.map((solution) => (
                  <div key={solution.id} className={`solution-item ${openSolution === solution.id ? 'active' : ''}`}>
                    <div className="solution-header" onClick={() => toggleSolution(solution.id)}>
                      <div className="solution-title-wrapper">
                        <div className="solution-marker"></div>
                        <h4 className="solution-title">{solution.title}</h4>
                      </div>
                      <button className="solution-toggle-btn" aria-label="Toggle solution details">
                        <svg 
                          className="toggle-icon" 
                          width="20" 
                          height="20" 
                          viewBox="0 0 20 20" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <polyline points="6 9 10 13 14 9" />
                        </svg>
                      </button>
                    </div>
                    <div className="solution-content">
                      <p className="solution-description">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hvac-image-wrapper">
            <div className="hvac-image-container">
              <img 
                src="/assets/hvac-systems.png" 
                alt="HVAC Systems" 
                className="hvac-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
