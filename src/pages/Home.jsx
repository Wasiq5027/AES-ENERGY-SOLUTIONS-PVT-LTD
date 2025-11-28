import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import ExperienceExcellence from '../components/ExperienceExcellence'
import Achievements from '../components/Achievements'
import AboutUs from '../components/AboutUs'
import PartnersPreview from '../components/PartnersPreview'
import OurServices from '../components/OurServices'
import OurClients from '../components/OurClients'
import ContactUs from '../components/ContactUs'
import VisitUs from '../components/VisitUs'
import '../animations.css'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    const sections = document.querySelectorAll('.animate-on-scroll')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <>
      <Hero />
      <div className="animate-on-scroll fade-in">
        <ExperienceExcellence />
      </div>
      <div className="animate-on-scroll slide-up">
        <Achievements />
      </div>
      <div className="animate-on-scroll slide-left">
        <AboutUs />
      </div>
      <div className="animate-on-scroll scale">
        <PartnersPreview />
      </div>
       <div className="animate-on-scroll fade-in">
        <OurClients />
      </div>
      <div className="animate-on-scroll slide-right">
        <OurServices />
      </div>
      <div className="animate-on-scroll slide-up">
        <ContactUs />
      </div>
      <VisitUs />
    </>
  )
}
