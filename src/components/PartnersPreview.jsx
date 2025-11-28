import React from 'react'
import { Link } from 'react-router-dom'
import './PartnersPreview.css'

export default function PartnersPreview() {
  const partners = [
    { id: 1, name: 'Perkins', logo: '/assets/partners/pngwing.com (1).png' },
    { id: 2, name: 'Cummins', logo: '/assets/partners/pngegg (1).png' },
    { id: 3, name: 'Schneider Electric', logo: '/assets/partners/Schneider-Electric-Logo.png' },
    { id: 4, name: 'ABB', logo: '/assets/partners/005e5430a48877f9a880cd6511a89efc.png' }
  ]

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="partners-preview-section">
      <div className="partners-background-image"></div>
      <div className="partners-preview-container">
        <h2 className="partners-preview-title">Our Partners</h2>
        
        <div className="partners-preview-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-preview-item">
              <div className="partner-preview-logo-wrapper">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="partner-preview-logo"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="partners-preview-button-container">
          <Link to="/partners" className="view-all-partners-btn" onClick={handleClick}>
            View All Partners
          </Link>
        </div>
      </div>
    </section>
  )
}
