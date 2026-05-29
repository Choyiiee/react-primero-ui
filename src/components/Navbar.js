import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import primerologo from '../assets/primerologo.jpg';

export default function Navbar({ navActive, setNavActive }) {
  // Closes the mobile navigation dropdown menu smoothly upon clicking any item
  const closeMobileMenu = () => setNavActive(false);

  // Handles moving to the absolute start/top of the website layout
  const handleHomeClick = (e) => {
    closeMobileMenu();
    // If the user is already on the homepage, scroll smoothly back to the top edge
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Helper function to handle smooth scrolling for internal section coordinates
  const handleScrollToSection = (sectionId) => {
    closeMobileMenu();
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If browsing sub-pages like /menu, bounce home with the clean structural target anchor
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* LEFT LINK GROUP - Holds the updated Home handler along with section routes */}
        <ul className={`nav-links left-links ${navActive ? 'open' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => isActive ? 'nav-active' : ''}
              onClick={handleHomeClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <a 
              href="#story" 
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('story');
              }}
            >
              Our Story
            </a>
          </li>
          <li>
            <NavLink 
              to="/menu" 
              className={({ isActive }) => isActive ? 'nav-active' : ''}
              onClick={closeMobileMenu}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <a 
              href="#app" 
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('app');
              }}
            >
              Primero App
            </a>
          </li>
        </ul>

        {/* CENTRAL LOGO CONTAINER */}
        <div className="logo-container">
          <Link to="/" className="logo-img" onClick={handleHomeClick}>
            <img 
              src={primerologo} 
              alt="Primero Coffee Official Logo" 
              className="logo-photo-render" 
            />
          </Link>
        </div>

        {/* RIGHT LINK GROUP */}
        <ul className={`nav-links right-links ${navActive ? 'open' : ''}`}>
          <li>
            <NavLink 
              to="/find-store" 
              className={({ isActive }) => isActive ? 'nav-active' : ''}
              onClick={closeMobileMenu}
            >
              Find a Store
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'nav-active' : ''}
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li>
          
          {/* Integrated Premium Search bar item */}
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

        {/* MOBILE DRAWER TOGGLE BUTTON */}
        <button 
          className={`mobile-toggle ${navActive ? 'active' : ''}`} 
          onClick={() => setNavActive(!navActive)}
          aria-label="Toggle structural menu layout"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

      </div>
    </nav>
  );
}