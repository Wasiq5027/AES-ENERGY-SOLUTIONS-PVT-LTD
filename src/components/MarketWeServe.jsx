import React from 'react'
import './MarketWeServe.css'

export default function MarketWeServe() {
  const markets = [
    {
      id: 1,
      icon: '/assets/markets/hospital-icon.png',
      title: 'Hospitals',
      description: 'Delivering reliable fire protection for healthcare facilities where every second counts.'
    },
    {
      id: 2,
      icon: '/assets/markets/metro-icon.png',
      title: 'Metro Stations',
      description: 'Providing advanced safety systems for metro stations, ensuring public safety in transportation hubs with high foot traffic.'
    },
    {
      id: 3,
      icon: '/assets/markets/commercial-icon.png',
      title: 'Commercial Buildings & Shopping Malls',
      description: 'Offering comprehensive fire safety solutions for large, occupied spaces.'
    },
    {
      id: 4,
      icon: '/assets/markets/education-icon.png',
      title: 'Educational Institutes',
      description: 'Ensuring the safety of students, faculty, and staff across campuses and schools.'
    },
    {
      id: 5,
      icon: '/assets/markets/textile-icon.png',
      title: 'Textile Industry',
      description: 'Protecting high-risk environments where fire hazards are prevalent.'
    },
    {
      id: 6,
      icon: '/assets/markets/hospitality-icon.png',
      title: 'Hospitality Industry',
      description: 'Ensuring the safety of guests and staff in hotels, restaurants, and entertainment venues.'
    },
    {
      id: 7,
      icon: '/assets/markets/manufacturing-icon.png',
      title: 'Manufacturing Industry',
      description: 'Providing robust fire safety solutions for factories and production plants.'
    },
    {
      id: 8,
      icon: '/assets/markets/financial-icon.png',
      title: 'Financial Institutions',
      description: 'Safeguarding critical infrastructure in banks, data centers, and financial hubs.'
    },
    {
      id: 9,
      icon: '/assets/markets/defence-icon.png',
      title: 'Defence Projects',
      description: 'Delivering specialized fire protection for critical defence installations and military facilities.'
    }
  ]

  return (
    <section className="market-serve-section">
      <div className="market-serve-container">
        <div className="market-serve-header">
          <h2 className="market-serve-title">MARKET WE SERVE</h2>
          <p className="market-serve-subtitle">
            Delivering comprehensive fire protection solutions across diverse industries and sectors
          </p>
        </div>
        
        <div className="markets-grid">
          {markets.map((market) => (
            <div key={market.id} className="market-item">
              <div className="market-icon-wrapper">
                <img 
                  src={market.icon} 
                  alt={market.title} 
                  className="market-icon"
                />
              </div>
              <div className="market-content">
                <h3 className="market-title">{market.title}</h3>
                <p className="market-description">{market.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
