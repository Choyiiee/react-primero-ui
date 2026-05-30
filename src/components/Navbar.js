import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/components/Navbar.css';
import primerologo from '../assets/primerologo.jpg';

export default function Navbar({ navActive, setNavActive }) {
  const closeMobileMenu = () => setNavActive(false);

  const handleHomeClick = (e) => {
    closeMobileMenu();
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId) => {
    closeMobileMenu();
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* HAMBURGER TRIGGER BUTTON */}
        <button 
          className={`mobile-toggle ${navActive ? 'active' : ''}`} 
          onClick={() => setNavActive(!navActive)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* MOBILE DRAWER OPEN OVERLAY VIEW */}
        {navActive ? (
          <ul className="nav-links mobile-open-view">
            <li>
              <NavLink to="/" end onClick={handleHomeClick}>Home</NavLink>
            </li>
            <li>
              <a href="#story" onClick={(e) => { e.preventDefault(); handleScrollToSection('story'); }}>Our Story</a>
            </li>
            <li>
              <NavLink to="/menu" onClick={closeMobileMenu}>Menu</NavLink>
            </li>
            <li>
              <a href="#app" onClick={(e) => { e.preventDefault(); handleScrollToSection('app'); }}>Primero App</a>
            </li>
            <li>
              <NavLink to="/find-store" onClick={closeMobileMenu}>Find a Store</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMobileMenu}>Contact Us</NavLink>
            </li>
            <li className="search-item-wrapper">
              <div className="search-bar">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" placeholder="SEARCH..." aria-label="Search layout items" />
              </div>
            </li>
          </ul>
        ) : (
          /* STANDARD DESKTOP WEB VIEW LAYOUT */
          <>
            {/* LEFT CONTAINER LAYER (Balanced with 4 items) */}
            <div className="nav-grid-item left-side-wrapper">
              <ul className="nav-links left-links">
                <li>
                  <NavLink to="/" end onClick={handleHomeClick}>Home</NavLink>
                </li>
                <li>
                  <a href="#story" onClick={(e) => { e.preventDefault(); handleScrollToSection('story'); }}>Our Story</a>
                </li>
                <li>
                  <NavLink to="/menu" onClick={closeMobileMenu}>Menu</NavLink>
                </li>
                {/* Moved here to seamlessly balance visual weighting on the left side of the logo */}
                <li>
                  <a href="#app" onClick={(e) => { e.preventDefault(); handleScrollToSection('app'); }}>Primero App</a>
                </li>
              </ul>
            </div>

            {/* DEAD CENTER LOGO CONTAINER */}
            <div className="logo-container">
              <Link to="/" className="logo-img" onClick={handleHomeClick}>
                <img 
                  src={primerologo} 
                  alt="Primero Coffee Official Logo" 
                  className="logo-photo-render" 
                />
              </Link>
            </div>

            {/* RIGHT CONTAINER LAYER */}
            <div className="nav-grid-item right-side-wrapper">
              <ul className="nav-links right-links">
                <li>
                  <NavLink to="/find-store" onClick={closeMobileMenu}>Find a Store</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={closeMobileMenu}>Contact Us</NavLink>
                </li>
                <li className="search-item-wrapper">
                  <div className="search-bar">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" placeholder="SEARCH..." aria-label="Search layout items" />
                  </div>
                </li>
              </ul>
            </div>
          </>
        )}

      </div>
    </nav>
  );
}