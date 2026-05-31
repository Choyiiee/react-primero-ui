import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../data/menuData';

// Fixed CSS import path
import '../styles/views/HomeView.css';

import primerobroll from '../assets/primerobroll.mp4';
import ui1 from '../assets/ui1.jpg';
import ui2 from '../assets/ui2.jpg';

function HomeView() {
  const navigate = useNavigate();

  // Reveal animations on scroll
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

  // 3D Tilt Card Effects
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
          {/* Left Phone: Static -4deg tilt + floating */}
          <motion.div 
            className="phone-mockup-left interactive-phone"
            animate={{ y: [0, -15, 0], rotate: -4 }}
            transition={{ 
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 0 } 
            }}
            whileHover={{ scale: 1.05, rotate: -6, y: -25 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="phone-notch"></div>
            <div className="phone-screen-content">
              <img src={ui1} alt="Primero Mobile App UI Main View" className="phone-embedded-png" />
            </div>
          </motion.div>
          
          {/* Right Phone: Straight + floating + delayed */}
          <motion.div 
            className="phone-mockup-right interactive-phone"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } 
            }}
            whileHover={{ scale: 1.05, rotate: 2, y: -25 }}
            whileTap={{ scale: 0.98 }}
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
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...menuItems, ...menuItems, ...menuItems].map((item, index) => (
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
                  <span className="menu-card-category" style={{ textTransform: 'uppercase' }}>{item.category}</span>
                  <h3 className="menu-name">{item.name}</h3>
                  <div className="menu-details">
                    <span className="menu-type-tag">{item.tags ? item.tags[0] : 'Premium'}</span>
                    <span className="menu-order-cta">Order Now &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="menu-footer-actions">
          <button className="menu-discover-btn" onClick={() => navigate('/menu')}>
            <span>Explore Full Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </section>
    </>
  );
}

export default HomeView;