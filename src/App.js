import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css'; 
import ContactUs from './ContactUs';

import primerobroll from './assets/primerobroll.mp4'; 
import primerologo from './assets/primerologo.jpg';
import berryCheese from './assets/berrycheese.jpg'; 
import irishCream from './assets/irishcream.jpg';
import javaJelly from './assets/javajelly.jpg';
import latteImg from './assets/latte.jpg';
import ui1 from './assets/ui1.jpg'; 
import ui2 from './assets/ui2.jpg'; 

// --- MAIN HOME VIEW COMPONENT ---
function HomeView({ duplicatedMenu, handleCardMouseMove, handleCardMouseLeave }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <header className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={primerobroll} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">a Necessity,<br/>not a Luxury</h1>
          <p className="hero-subtitle">
            For many, coffee is a daily need.<br/>
            Specialty coffee, however, is often seen as a luxury.<br/>
            We started Primero Coffee to change this perception.
          </p>
        </div>
      </header>

      <section className="story-section reveal-on-scroll" id="story">
        <div className="story-text">
          <h2>Mabuhay, Philippines!</h2>
          <p>
            Primero Coffee is thrilled to bring our specialty coffee straight to your cups. 
            We believe that premium coffee should be accessible to everyone, and we're 
            committed to delivering exceptional quality at an affordable price.
          </p>
          <button className="primary-btn animated-btn">Our Story</button>
        </div>
        <div className="story-image-group" id="app">
          <motion.div 
            className="phone-mockup-left floating-element interactive-phone"
            whileHover={{ scale: 1.04, y: -18, rotate: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="phone-notch"></div>
            <div className="phone-screen-content">
              <img src={ui1} alt="Primero Mobile App UI Main View" className="phone-embedded-png" />
            </div>
          </motion.div>
          
          <motion.div 
            className="phone-mockup-right floating-element-delayed interactive-phone"
            whileHover={{ scale: 1.04, y: -8, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="phone-notch"></div>
            <div className="phone-screen-content">
              <img src={ui2} alt="Primero Mobile App UI Secondary View" className="phone-embedded-png" />
            </div>
          </motion.div>

          <div className="decorative-dot"></div>
        </div>
      </section>

      <section className="menu-section reveal-on-scroll" id="menu">
        <div className="menu-header-content">
          <span className="menu-badge">OUR HANDCRAFTED BREWS</span>
          <h2 className="section-title">A Brew To Beat The Blues</h2>
          <p className="section-subtitle">
            Fuel your day with a perfectly balanced dose of premium Primero Coffee, crafted meticulously by our expert baristas.
          </p>
        </div>

        <div className="menu-marquee-viewport">
          <motion.div 
            className="menu-marquee-track"
            animate={{ x: [ "-33.33%", "0%" ] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedMenu.map((item, index) => (
              <div 
                className="menu-card tilt-card-3d" 
                key={index}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="menu-img-container">
                  <img src={item.image} alt={item.name} className="menu-item-photo" />
                  <div className="menu-hover-overlay">
                    <span className="overlay-action-btn">View Ingredients</span>
                  </div>
                </div>
                <div className="menu-text-content">
                  <span className="menu-card-category">{item.category}</span>
                  <h3 className="menu-name">{item.name}</h3>
                  <div className="menu-details">
                    <span className="menu-type-tag">{item.type}</span>
                    <span className="menu-order-cta">Order Now →</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="menu-footer-actions">
          <button className="menu-discover-btn">
            <span>Explore Full Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </section>
    </>
  );
}

// --- MAIN WRAPPER CORE ---
function App() {
  const [navActive, setNavActive] = useState(false);

  const menuItems = [
    { name: 'Spanish Latté', type: 'Ice/Hot', category: 'Latté', image: latteImg },
    { name: 'Berry Cheesecake', type: 'Ice', category: 'Frappes', image: berryCheese },
    { name: 'Irish Cream', type: 'Ice', category: 'Frappes', image: irishCream },
    { name: 'Triple Java Jelly', type: 'Ice', category: 'Frappes', image: javaJelly },
    { name: 'CEO Latté', type: 'Hot', category: 'Latté', image: latteImg }
  ];

  const duplicatedMenu = [...menuItems, ...menuItems, ...menuItems];

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    const angleX = -(y / (box.height / 2)) * 8;
    const angleY = (x / (box.width / 2)) * 8;
    card.style.setProperty('--rx', `${angleX}deg`);
    card.style.setProperty('--ry', `${angleY}deg`);
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  // FIXED: No longer references data.name to avoid runtime crash shown in image_c98ee3.png
  const handleContactSubmit = () => {
    console.log("Form submitted safely via Formspree!");
  };

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
    <div className="App">
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

      {/* --- MULTI-PAGE ROUTE HANDLING --- */}
      <Routes>
        <Route path="/" element={
          <HomeView 
            duplicatedMenu={duplicatedMenu} 
            handleCardMouseMove={handleCardMouseMove} 
            handleCardMouseLeave={handleCardMouseLeave} 
          />
        } />
        <Route path="/contact" element={
          <ContactUs onSubmitSuccess={handleContactSubmit} />
        } />
      </Routes>

      <footer className="footer">
        <div className="social-links">
          <span>Follow us on</span>
          <div className="social-icons">
            <span className="social-hover-icon">📷</span>
            <span className="social-hover-icon">📘</span>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p><strong>PRIMERO PRESSO PHILIPPINES INC.</strong></p>
            <p>COPYRIGHT 2026 © PRIMERO COFFEE</p>
          </div>
          <div className="footer-policy">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;