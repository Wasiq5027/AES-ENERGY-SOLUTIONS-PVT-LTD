import React, { useState } from 'react'
import './Generators.css'

export default function Generators() {
  const [openFeature, setOpenFeature] = useState(null)

  const toggleFeature = (id) => {
    setOpenFeature(openFeature === id ? null : id)
  }

  const features = [
    {
      id: 1,
      heading: 'Generator Supply',
      text: 'We provide a wide variety of generators tailored to meet diverse power requirements. Whether it\'s a small residential unit or a large industrial setup, we have the right solution for you.'
    },
    {
      id: 2,
      heading: 'Professional Installation',
      text: 'Our team of skilled technicians ensures seamless generator installation, providing end-to-end support to integrate the unit with your existing infrastructure.'
    },
    {
      id: 3,
      heading: 'Maintenance & Support',
      text: 'We understand that consistent performance is critical, which is why we offer comprehensive maintenance services to keep your generator running smoothly.'
    }
  ]

  return (
    <section className="generators-section">
      <div className="generators-container">
        <div className="generators-header">
          <h2 className="generators-main-title">Our Products & Services</h2>
          <h3 className="generators-title">Generators</h3>
        </div>
        
        <div className="generators-content">
          <div className="generators-text">
            <p className="generators-intro">
              AES Energy Solutions PVT LTD deals in Power Generation, Electrical Works, Distribution Panels, UPS, and LT Switchgear. We have distribution rights to sell Perkins, Cummins, Volvo Penta and FG Wilson Diesel Generators (DG) in Pakistan, ranging from 9KVA to 3000KVA. These Gen Sets are coupled with world-renowned brands such as Volvo Penta, Perkins, Cummins engines, and Stamford, Mecc Alte, and Leroy Somer alternators with Deep Sea (UK) Control Modules.
            </p>
            
            <p className="generators-description">
              AES Energy Solutions PVT LTD also offers a wide range of LT panels and switchgear with world-renowned brand equipment for Industry, Hotels, Malls, Data Centers, Residential, Retails, Airports, Hospitals, and Commercial Buildings applications.
            </p>
            
            <p className="generators-description">
              We provide turnkey solutions, 24/7 after-sale services, consumables, and genuine quality parts. Our employees are trained engineers who can estimate on-site load calculations and recommend appropriate solutions tailored to customer needs. For service at your doorstep, we have branches in Lahore, Islamabad, Karachi, and Dubai.
            </p>
            
            <div className="generators-features">
              {features.map((feature) => (
                <div key={feature.id} className={`feature-column ${openFeature === feature.id ? 'active' : ''}`}>
                  <div className="feature-header" onClick={() => toggleFeature(feature.id)}>
                    <h4 className="feature-heading">{feature.heading}</h4>
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
                    <p className="feature-text">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="gen-images-wrapper">
            <img 
              src="/assets/perkins-e1611727866361-768x574.png" 
              alt="Generator System 1" 
              className="gen-img"
            />
            <img 
              src="/assets/GEn2.png" 
              alt="Generator System 2" 
              className="gen-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
