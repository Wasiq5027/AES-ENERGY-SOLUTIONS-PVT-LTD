import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../animations.css'

export default function Services() {
  useScrollAnimation()
  
  return (
    <section className="about-page-section animate-on-scroll fade-in">
      <div className="about-page-container">
        <h1 className="about-page-title">Our Services</h1>
        <p className="about-page-description">
          Services page content will go here.
        </p>
      </div>
    </section>
  )
}
