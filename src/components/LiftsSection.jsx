import React, { useState } from 'react'
import './LiftsSection.css'

export default function LiftsSection() {
  const [openLift, setOpenLift] = useState(null)

  const toggleLift = (id) => {
    setOpenLift(openLift === id ? null : id)
  }

  const liftTypes = [
    {
      id: 1,
      title: 'Cargo Lifts',
      description: 'Ideal for moving goods and heavy materials in commercial and industrial settings.'
    },
    {
      id: 2,
      title: 'Commercial Lifts',
      description: 'Designed for use in office buildings, malls, and public spaces, ensuring smooth and safe movement of people.'
    },
    {
      id: 3,
      title: 'Domestic Lifts',
      description: 'Tailored for home use, offering comfort and convenience with space-saving designs.'
    },
    {
      id: 4,
      title: 'Bed Lifts',
      description: 'Specifically designed for healthcare facilities to transport patients safely and efficiently.'
    }
  ]

  return (
    <section className="lifts-section">
      <div className="lifts-container">
        <div className="lifts-content">
          <div className="lifts-image-wrapper">
            <div className="lifts-image-switcher">
              <img 
                src="/assets/forklift.jpg" 
                alt="Forklift Systems" 
                className="lifts-image lifts-image-1"
              />
              <img 
                src="/assets/elevator.png" 
                alt="Elevator Systems" 
                className="lifts-image lifts-image-2"
              />
              <div className="lifts-image-overlay"></div>
            </div>
          </div>

          <div className="lifts-text">
            <h2 className="lifts-title">Lifts</h2>
            <p className="lifts-intro">
              At AES, we provide a wide range of lift systems designed for various applications, from residential to industrial. Our lift solutions ensure reliable, safe, and efficient vertical transportation.
            </p>
            
            <div className="lifts-types">
              <h3 className="types-heading">Lift Types We Supply & Install:</h3>
              
              <div className="types-list">
                {liftTypes.map((lift) => (
                  <div key={lift.id} className={`lift-type-item ${openLift === lift.id ? 'active' : ''}`}>
                    <div className="lift-header" onClick={() => toggleLift(lift.id)}>
                      <div className="lift-title-wrapper">
                        <div className="lift-marker"></div>
                        <h4 className="lift-title">{lift.title}</h4>
                      </div>
                      <button className="lift-toggle-btn" aria-label="Toggle lift details">
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
                    <div className="lift-content">
                      <p className="lift-description">{lift.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
