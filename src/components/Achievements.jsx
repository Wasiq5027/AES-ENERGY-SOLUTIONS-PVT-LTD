import { useState, useEffect, useRef } from 'react'
import './Achievements.css'

export default function Achievements() {
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
    <section className="achievements-section-new" ref={sectionRef}>
      {/* Background Image */}
      <div className="achievements-background-image" />
      
      <div className="achievements-container-new">
        <h2 className="achievements-title-new">
          Achievements & Milestones
        </h2>
        
        <div className="stats-grid-new">
          <div className="stat-card-new">
            <div className="stat-number-new">{counts.projects}+</div>
            <div className="stat-label-new">Projects Completed</div>
          </div>
          
          <div className="stat-card-new">
            <div className="stat-number-new">{counts.years}+</div>
            <div className="stat-label-new">Years of Experience</div>
          </div>
          
          <div className="stat-card-new">
            <div className="stat-number-new">{counts.certifications}+</div>
            <div className="stat-label-new">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}