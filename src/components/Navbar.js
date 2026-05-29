import React from 'react';
import { Link } from 'react-router-dom';
import primerologo from '../assets/primerologo.jpg';

function Navbar({ navActive, setNavActive }) {
  const handleHashLink = (e, targetId) => {
    setNavActive(false);
    if (window.location.pathname !== '/') {
      return; 
    }
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button 
          className={`mobile-toggle ${navActive ? 'active' : ''}`} 
          onClick={() => setNavActive(!navActive)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links left-links ${navActive ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setNavActive(false)}>HOME</Link></li>
          <li><a href="/#story" onClick={(e) => handleHashLink(e, 'story')}>OUR STORY</a></li>
          <li><a href="/#menu" onClick={(e) => handleHashLink(e, 'menu')}>MENU</a></li>
          <li><a href="/#app" onClick={(e) => handleHashLink(e, 'app')}>PRIMERO APP</a></li>
        </ul>
        
        <div className="logo-container">
          <Link to="/" className="logo-img" onClick={() => setNavActive(false)}>
            <img src={primerologo} alt="Primero Coffee Brand Logo" className="logo-photo-render" />
          </Link>
        </div>

        <ul className={`nav-links right-links ${navActive ? 'open' : ''}`}>
          <li><a href="/#find" onClick={(e) => handleHashLink(e, 'find')}>FIND A STORE</a></li>
          <li><Link to="/contact" onClick={() => setNavActive(false)}>CONTACT US</Link></li>
          <li className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="SEARCH..." />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;