import React from 'react'
import './SalesOrganization.css'

export default function SalesOrganization() {
  return (
    <section className="sales-organization-section">
      <div className="sales-organization-container">
        <div className="sales-organization-content">
          {/* Organizational Structure - First */}
          <div className="organizational-structure">
            <h2 className="sales-org-title">Organizational <span>Structure</span></h2>
            <img 
              src="/assets/4x/Asset 5@4x.png" 
              alt="Organizational Structure" 
              className="organizational-structure-image"
            />
          </div>
          
          {/* Sales Cycle - Second */}
          <div className="sales-cycle">
            <h2 className="sales-org-title">Sales <span>Cycle</span></h2>
            <img 
              src="/assets/4x/SalesCycle.png" 
              alt="Sales Cycle" 
              className="sales-cycle-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
