import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Generators from '../components/Generators'
import ElectricPanels from '../components/ElectricPanels'
import LiftsSection from '../components/LiftsSection'
import HVACSection from '../components/HVACSection'
import MarketWeServe from '../components/MarketWeServe'
import ContactUs from '../components/ContactUs'
import VisitUs from '../components/VisitUs'

export default function Products() {
  useScrollAnimation()
  
  return (
     <>
          <div className="animate-on-scroll fade-in">
            <Generators />
          </div>
          <div className="animate-on-scroll slide-up">
            <ElectricPanels />
          </div>
          <div className="animate-on-scroll slide-left">
            <LiftsSection />
          </div>
          <div className="animate-on-scroll slide-right">
            <HVACSection />
          </div>
          <div className="animate-on-scroll scale">
            <MarketWeServe />
          </div>
          <ContactUs />
          <VisitUs />
        </>
  )
}
