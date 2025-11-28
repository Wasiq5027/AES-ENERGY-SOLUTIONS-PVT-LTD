import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ClientsGrid from '../components/ClientsGrid'
import ContactUs from '../components/ContactUs'
import VisitUs from '../components/VisitUs'
import '../animations.css'

export default function Clients() {
  useScrollAnimation()
  
  return (
     <>
          <div className="animate-on-scroll scale">
            <ClientsGrid />
          </div>
          <div className="animate-on-scroll slide-up">
            <ContactUs />
          </div>
          <VisitUs />
        </>
  )
}
