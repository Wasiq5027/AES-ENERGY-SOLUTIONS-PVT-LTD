import React, { useState } from 'react'
import './VisitUs.css'

export default function VisitUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Using EmailJS or your backend API
      // Option 1: EmailJS (recommended for client-side)
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_sutj4c3', // Replace with your EmailJS service ID
          template_id: 'template_j5mr2lj', // Replace with your EmailJS template ID
          user_id: 'RSLORMaP-rjNAKrSF', // Replace with your EmailJS public key
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            to_email: 'info@aesesl.com'
          }
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
        alert('Failed to send message. Please try again or contact us directly at info@aesesl.com')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      alert('Failed to send message. Please try again or contact us directly at info@aesesl.com')
    } finally {
      setIsSubmitting(false)
    }
  }

   return (
    <section className="visit-us-section">
      <div className="visit-us-background-image">
      <div className="visit-us-container">
        <h2 className="visit-us-title">Visit Us!</h2>
        
        <div className="visit-us-content">
          {/* Map Section */}
          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483.0233130786127!2d74.22991489436593!3d31.467613356623236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190300346bfa01%3A0x992d4e9661a29e1a!2sAES%20ENERGY%20SOLUTIONS%20PVT%20LTD!5e0!3m2!1sen!2s!4v1761906150680!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AES Office Location"
            ></iframe>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input full-width"
              />
              
              <textarea
                name="message"
                placeholder="Send Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                rows="5"
              ></textarea>
              
              {/* UPDATE THIS BUTTON */}
              <button 
                type="submit" 
                className="form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
