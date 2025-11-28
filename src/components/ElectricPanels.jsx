import React, { useState } from 'react'
import './ElectricPanels.css'

export default function ElectricPanels() {
  const [isPanelListOpen, setIsPanelListOpen] = useState(false)
  const [openFeature, setOpenFeature] = useState(null)

  const togglePanelList = () => {
    setIsPanelListOpen(!isPanelListOpen)
  }

  const toggleFeature = (id) => {
    setOpenFeature(openFeature === id ? null : id)
  }

  const features = [
    {
      id: 1,
      title: 'Manufacturing Excellence',
      description: 'Our in-house manufacturing facility ensures that every electric panel is crafted with precision and attention to detail. Using the latest technologies and industry best practices, we create panels that are robust, efficient, and compliant with international quality standards.'
    },
    {
      id: 2,
      title: 'Professional Installation',
      description: 'A well-installed electric panel is crucial for the safety and performance of your electrical systems. Our experienced team of electricians ensures seamless installation, taking into account your specific requirements and adhering to strict safety protocols.'
    }
  ]

  const panelTypes = [
    'Motor Control Center Panels',
    'Double Bus Bar Panels',
    'Distribution Boards (DBs)',
    'Power Factor Improvement (PFI) Panels',
    'Automatic Transfer Switch (ATS) Panels',
    'PLC-Based Synchronizing Panels',
    'Control & Relay Panels',
    'Auto Main Failure (AMF) Panels',
    'Outdoor Feeder Pillars',
    'Drive Panels'
  ]

  return (
    <section className="electric-panels-section">
      <div className="electric-panels-container">
        <div className="electric-panels-content">
          <div className="electric-panels-text">
            <div className="title-badge">
              <h2 className="electric-panels-title">Electric Panels</h2>
            </div>
            
            <p className="electric-panels-intro">
              At AES, we pride ourselves on delivering cutting-edge electric panel solutions designed to enhance the efficiency, safety, and reliability of your electrical systems. From manufacturing custom electric panels to professional installation and maintenance, we provide end-to-end services tailored to meet the unique demands of residential, commercial, and industrial projects.
            </p>
            
            <div className="electric-panels-features">
              {features.map((feature) => (
                <div key={feature.id} className={`feature-item ${openFeature === feature.id ? 'active' : ''}`}>
                  <div className="feature-header" onClick={() => toggleFeature(feature.id)}>
                    <h3 className="feature-title">{feature.title}</h3>
                    <button className="feature-toggle-btn" aria-label="Toggle feature details">
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
                  <div className="feature-content">
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="electric-panels-right">
            <div className="electric-panels-images">

              <img 
                src="/assets/pngegg (3).png" 
                alt="Control Panels" 
                className="electric-panel-image"
              />
            </div>
            
            <div className={`panel-types-list ${isPanelListOpen ? 'active' : ''}`}>
              <div className="panel-list-header" onClick={togglePanelList}>
                <h3 className="panel-list-title">Panel Types We Offer</h3>
                <button className="panel-list-toggle-btn" aria-label="Toggle panel types list">
                  <svg 
                    className="toggle-icon" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <polyline points="6 9 10 13 14 9" />
                  </svg>
                </button>
              </div>
              
              <div className="panel-list-content">
                {panelTypes.map((type, index) => (
                  <div key={index} className="panel-type-item">
                    <span className="panel-type-bullet">•</span>
                    <span className="panel-type-text">{type}</span>
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
