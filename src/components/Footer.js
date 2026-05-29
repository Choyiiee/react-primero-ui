import React from 'react';

function Footer() {
  return (
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
  );
}

export default Footer;