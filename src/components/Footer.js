import React from 'react';
// Fixed CSS import path to accurately reflect your new 'styles' folder structure
import '../styles/components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <span>Follow us on</span>
        <div className="social-icons">
          
          {/* INSTAGRAM ICON BUTTON */}
          <a 
            href="https://www.instagram.com/primerocoffeeph/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-hover-icon"
            aria-label="Follow Primero Coffee on Instagram"
          >
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* FACEBOOK ICON BUTTON */}
          <a 
            href="https://www.facebook.com/primero.cafedefilipinas/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-hover-icon"
            aria-label="Follow Primero Coffee on Facebook"
          >
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>

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
  );
}

export default Footer;