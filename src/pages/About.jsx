import React, { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Hero from '../components/Hero'
import ExperienceExcellence from '../components/ExperienceExcellence'
import Achievements from '../components/Achievements'
import AboutUs from '../components/AboutUs'
import OurServices from '../components/OurServices'
import AboutUsSection from '../components/AboutUsSection'
import AchievementsBanner from '../components/AchievementsBanner'
import CEOStatement from '../components/CEOStatement'
import MissionVision from '../components/MissionVision'
import SalesOrganization from '../components/SalesOrganization'
import ContactUs from '../components/ContactUs'
import VisitUs from '../components/VisitUs'
import '../animations.css'
import './About.css'

export default function About() {
  useScrollAnimation()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <>
      <div className="animate-on-scroll fade-in">
        <AboutUsSection />
      </div>
      <div className="animate-on-scroll slide-up">
        {isMobile ? <Achievements /> : <AchievementsBanner />}
      </div>
      <div className="animate-on-scroll slide-left">
        <CEOStatement />
      </div>
      <div className="animate-on-scroll scale">
        <MissionVision />
      </div>
      <div className="animate-on-scroll slide-right">
        <SalesOrganization />
      </div>
      <div className="animate-on-scroll slide-up">
        <ContactUs />
      </div>
      <VisitUs />
    </>
  )
}
