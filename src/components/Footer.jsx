import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Get In Touch Section */}
          <div className="footer-section get-in-touch">
            <h3 className="footer-heading">Get In Touch</h3>
            <p className="footer-subheading">Corporate Office</p>
            
            <div className="contact-info">
              <div className="address-block">
                <p>AES ENERGY SOLUTIONS PVT LTD.</p>
                <p>AES Building O/S NLC Dry Port</p>
                <p>Thokar Niaz Baig Lahore, Punjab, Pakistan (53700)</p>
              </div>
              
              <div className="address-block">
                <p>Plot# 88, Office 04, 10th Commercial Street,</p>
                <p>DHA Phase IV, Karachi, Pakistan</p>
              </div>
              
              <div className="address-block">
                <p>G06, B-Block, Hudaiba Award Building,</p>
                <p>Jumeirah Road, Dubai UAE</p>
              </div>
            </div>
          </div>
          
          {/* Contact Details Section */}
          <div className="footer-section contact-details">
            <div className="contact-item">
              <div className="contact-icon phone-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="white"/>
                </svg>
              </div>
              <div className="contact-text">
                <p>+92 346 8436677</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon email-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" stroke-width="2" fill="none"/>
                  <polyline points="22,6 12,13 2,6" stroke="white" stroke-width="2" fill="none"/>
                </svg>
              </div>
              <div className="contact-text">
                <p>info@aesesl.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon web-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="none"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="white" stroke-width="2" fill="none"/>
                </svg>
              </div>
              <div className="contact-text">
                <p>www.aesesl.com</p>
              </div>
            </div>
          </div>
          
          {/* Logo Section */}
          <div className="footer-section footer-logo-section">
            <Link to="/" className="footer-logo-card" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/assets/aes-footer.png" alt="AES Energy Solutions" className="footer-logo" />
            </Link>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>2025 © AES PVT LTD, All Right Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
