import { useState, useEffect, useRef } from 'react'
import './AchievementsBanner.css'

export default function AchievementsBanner() {
  const [counts, setCounts] = useState({ projects: 0, years: 0, certifications: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      const duration = 1000 // 1 second
      const frameRate = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameRate)

      const targets = { projects: 200, years: 10, certifications: 180 }

      let frame = 0
      const counter = setInterval(() => {
        frame++
        const progress = frame / totalFrames
        
        // Easing function for smoother animation (ease-out)
        const easeProgress = 1 - Math.pow(1 - progress, 3)
        
        setCounts({
          projects: Math.round(targets.projects * easeProgress),
          years: Math.round(targets.years * easeProgress),
          certifications: Math.round(targets.certifications * easeProgress)
        })
        
        if (frame === totalFrames) {
          clearInterval(counter)
          setCounts(targets)
        }
      }, frameRate)
      
      return () => clearInterval(counter)
    }
  }, [isVisible])

  return (
    <section className="achievements-banner-section" ref={sectionRef}>
      <div className="achievements-banner-overlay"></div>
      <div className="achievements-banner-container">
        {/* Stats Boxes */}
        <div className="stats-boxes">
          <div className="stat-box">
            <h3 className="stat-number">{counts.projects}+</h3>
            <p className="stat-label">Projects<br />Completed</p>
          </div>
          
          <div className="stat-box">
            <h3 className="stat-number">{counts.years}+</h3>
            <p className="stat-label">Years of<br />Experience</p>
          </div>
          
          <div className="stat-box">
            <h3 className="stat-number">{counts.certifications}+</h3>
            <p className="stat-label">Certifications</p>
          </div>
        </div>

        {/* Background Image */}
        <div className="banner-image-container">
          <img 
            src="/assets/4x/Asset 3@4x.png" 
            alt="Industrial Background" 
            className="banner-background-image"
          />
        </div>

      </div>
    </section>
  )
}
