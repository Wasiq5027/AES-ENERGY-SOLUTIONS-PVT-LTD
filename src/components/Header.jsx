import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about', hasDropdown: true },
    { name: 'PRODUCTS', path: '/products', hasDropdown: true },
    { name: 'PARTNERS', path: '/partners', hasDropdown: true },
    { name: 'OUR CLIENTS', path: '/clients' },
    { name: 'CONTACT US', path: '#contact', isScroll: true }
  ];

  const handleMouseEnter = (itemName) => {
    if (itemName) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const contactSection = document.querySelector('.contact-us-section, .visit-us-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-container" onClick={handleNavClick}>
          <img src="/assets/Asset 9@4x.png" alt="AES Logo" className="logo" />
        </Link>

        {/* Navigation */}
        <nav className={`nav ${mobileMenuOpen ? 'nav-mobile-open' : ''}`}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(item.hasDropdown ? item.name : null)}
              onMouseLeave={handleMouseLeave}
            >
              {item.isScroll ? (
                <a href="#contact" className="nav-link" onClick={handleContactClick}>
                  {item.name}
                </a>
              ) : (
                <Link to={item.path} className="nav-link" onClick={handleNavClick}>
                  {item.name}
                </Link>
              )}
              
              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.name}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;