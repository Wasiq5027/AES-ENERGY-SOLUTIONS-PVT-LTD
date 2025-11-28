import React from 'react'
import { Link } from 'react-router-dom'
import './OurClients.css'

export default function OurClients() {
  const clients = [
    { id: 1, name: 'Client 1', logo: '/assets/Our Clients/1631360117031.jpg' },
    { id: 2, name: 'Client 2', logo: '/assets/Our Clients/allied-bank-limited-logo.png' },
    { id: 3, name: 'Client 3', logo: '/assets/Our Clients/allied_engineering__services_limited_logo.jpg' },
    { id: 4, name: 'Client 4', logo: '/assets/Our Clients/beaconhouse-school-logo-87E4A76B99-seeklogo.com.png' },
    { id: 5, name: 'Client 5', logo: '/assets/Our Clients/EVERCARE_LOGO_03_LAHORE_PRI_FC_RGB.png' },
    { id: 6, name: 'Client 6', logo: '/assets/Our Clients/footer-logos.png' },
    { id: 7, name: 'Client 7', logo: '/assets/Our Clients/images (1).jpg' },
    { id: 8, name: 'Client 8', logo: '/assets/Our Clients/images (1).png' },
    { id: 9, name: 'Client 9', logo: '/assets/Our Clients/images.jpg' },
    { id: 10, name: 'Client 10', logo: '/assets/Our Clients/images.png' },
    { id: 11, name: 'Client 11', logo: '/assets/Our Clients/lahore-grammar-school-lgs-logo-9DC7B6435D-seeklogo.com.png' },
    { id: 12, name: 'Client 12', logo: '/assets/Our Clients/Lahore-High-Court-CDR-Logo-Free.png' },
    { id: 13, name: 'Client 13', logo: '/assets/Our Clients/logo-4-1.png' },
    { id: 14, name: 'Client 14', logo: '/assets/Our Clients/logo-banner11.png' },
    { id: 15, name: 'Client 15', logo: '/assets/Our Clients/Logo-key.png' },
    { id: 16, name: 'Client 16', logo: '/assets/Our Clients/logo.png' },
    { id: 17, name: 'Client 17', logo: '/assets/Our Clients/pngegg (1)_1.png' },
    { id: 18, name: 'Client 18', logo: '/assets/Our Clients/pngwing.com (2).png' },
    { id: 19, name: 'Client 19', logo: '/assets/Our Clients/securities-and-exchange-commission-of-pakistan-logo-7828A88801-seeklogo.com.png' }
  ]

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="our-clients-section">
      <div className="our-clients-container">
        <h2 className="our-clients-title">Our Clients</h2>
        
        <div className="clients-slider">
          <div className="clients-track">
            {/* First set of logos */}
            {clients.map((client) => (
              <div key={`first-${client.id}`} className="client-logo-wrapper">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="client-logo"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div key={`second-${client.id}`} className="client-logo-wrapper">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="clients-button-container">
          <Link to="/clients" className="view-all-clients-btn" onClick={handleClick}>
            View All Clients
          </Link>
        </div>
      </div>
    </section>
  )
}
