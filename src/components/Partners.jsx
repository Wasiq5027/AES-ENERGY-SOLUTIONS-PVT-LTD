import { useState, useEffect, useRef } from 'react'
import './Partners.css'

export default function Partners() {
  const [visibleSections, setVisibleSections] = useState([])
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target)
            setVisibleSections((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 }
    )

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const partners = [
    {
      id: 1,
      logo: '/assets/partners/pngwing-1.png',
      name: 'Perkins',
      description: 'A powerhouse in diesel engine manufacturing, Perkins is synonymous with reliability, efficiency, and cutting-edge technology. With a legacy spanning over eight decades of durability, Perkins engines power a wide range of applications, from generators to industrial equipment, ensuring optimized results even in the most demanding environments.',
      image: '/assets/perkins-e1611727866361-768x574.png'
    },
    {
      id: 2,
      logo: '/assets/partners/pngegg-1.png',
      name: 'Cummins Power Generation',
      description: 'Cummins stands as a benchmark for power generation and engine innovation. With a legacy of delivering high-performance engines and advanced power systems, Cummins supports businesses across the globe with their focus on sustainability and operational efficiency, making them a trusted name in the energy sector.',
      image: '/assets/QSK60-G23.png'
    },
    {
      id: 3,
      logo: '/assets/partners/Schneider-Electric-Logo.png',
      name: 'Schneider Electric',
      description: 'Schneider Electric is a global specialist in energy management and automation. Renowned for their innovative solutions, Schneider Electric ensures smart, sustainable energy usage. Their expertise in building automation, residential, and energy efficiency helps us provide integrated and future-ready solutions to our clients.',
      image: '/assets/pngfind.com-schneider-electric-png-4303287.png'
    },
    {
      id: 4,
      logo: '/assets/partners/005e5430a48877f9a880cd6511a89efc.png',
      name: 'ABB',
      description: 'A leader in electrification and automation, ABB is at the forefront of driving industrial transformation. Their solutions, from smart electrical systems to automation technologies, enhance efficiency, safety, and productivity. ABB\'s cutting-edge innovations align perfectly with our commitment to progress and sustainability.',
      image: '/assets/Abb.png'
    }
  ]

  return (
    <div className="partners-page">
      <div className="partners-header">
        <h1 className="partners-main-title"><span>OUR</span> PARTNERS</h1>
        <p className="partners-subtitle">Collaborating with industry leaders to deliver excellence</p>
      </div>

      <div className="partners-container">
        {partners.map((partner, index) => (
          <div 
            key={partner.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`partner-section ${index % 2 === 0 ? 'even' : 'odd'} ${
              visibleSections.includes(index) ? 'visible' : ''
            }`}
          >
            <div className="partner-content">
              <div className="partner-logo-wrapper">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`} 
                  className="partner-logo"
                />
              </div>
              <p className="partner-description">{partner.description}</p>
            </div>
            
            <div className="partner-image-wrapper">
              <div className="partner-image-background"></div>
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="partner-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
