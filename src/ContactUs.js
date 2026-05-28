import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import brandLogo from './assets/primerologo.jpg';

function ContactUs({ onSubmitSuccess }) {
  const [state, handleSubmit] = useForm("xeednqza");
  
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (state.succeeded && onSubmitSuccess) {
      onSubmitSuccess();
    }
  }, [state.succeeded, onSubmitSuccess]);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  // Premium Success Message Screen View - Centered Perfectly
  if (state.succeeded) {
    return (
      <section className="contact-standalone-section" style={{ opacity: 1, transform: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <div className="contact-blur-glow"></div>
        <div className="contact-surface-card" style={{ maxWidth: '500px', width: '100%', margin: '0 auto', textAlign: 'center', padding: '40px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>☕</div>
          <h3 style={{ color: '#fff', marginBottom: '10px' }}>Message Dispatched!</h3>
          <p style={{ color: '#aaa', marginBottom: '30px', lineHeight: '1.6' }}>
            Thank you for reaching out to Primero Coffee. Your transmission has been securely processed. Our corporate baristas will review it shortly.
          </p>
          <Link to="/" className="back-home-link" style={{ display: 'inline-block', padding: '12px 24px', background: '#fff', color: '#000', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none' }}>
            Return to Main House
          </Link>
        </div>
      </section>
    );
  }

  // Structured inline override blocks to eliminate mobile flex offset bugs completely
  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: '40px 1fr',
    gap: '15px',
    alignItems: 'start',
    textAlign: 'left',
    width: '100%',
    maxWidth: '420px',
    margin: '0 auto 25px auto'
  };

  const numStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#d4af37',
    fontFamily: 'monospace',
    lineHeight: '1.4',
    textAlign: 'left'
  };

  const detailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left'
  };

  return (
    <section className="contact-standalone-section" style={{ opacity: 1, transform: 'none' }}>
      <div className="contact-blur-glow"></div>

      <div className="contact-wrapper">
        
        {/* Left Column: Premium Brand Editorial Content */}
        <div className="contact-editorial-panel" style={{ textAlign: 'center' }}>
          <div className="editorial-header">
            <div className="contact-brand-identity" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <img src={brandLogo} alt="Primero Coffee Logo" className="contact-mini-logo" />
              <span className="premium-badge">PRIMERO</span>
            </div>
            <h1 className="editorial-title">Connect <br />With Our Roastery.</h1>
            <p className="editorial-lead" style={{ maxWidth: '500px', margin: '0 auto 40px auto' }}>
              Whether you are looking to explore global bean sourcing, inquire about local franchise footprints, or troubleshoot your mobile ordering profile, our corporate baristas are standing by.
            </p>
          </div>

          <div className="luxury-directory" style={{ width: '100%', padding: '0 10px' }}>
            <div className="directory-row" style={rowStyle}>
              <div className="directory-num" style={numStyle}>01</div>
              <div className="directory-details" style={detailsStyle}>
                <h5 style={{ margin: '0 0 5px 0', color: '#fff', letterSpacing: '1px' }}>MANILA HEADQUARTERS</h5>
                <p style={{ margin: 0, color: '#aaa', fontSize: '0.95rem', lineHeight: '1.5' }}>Primero Presso Building, High-Street Strip, Metro Manila, Philippines</p>
              </div>
            </div>

            <div className="directory-row" style={rowStyle}>
              <div className="directory-num" style={numStyle}>02</div>
              <div className="directory-details" style={detailsStyle}>
                <h5 style={{ margin: '0 0 5px 0', color: '#fff', letterSpacing: '1px' }}>DIGITAL INQUIRIES</h5>
                <p className="highlighted-link" style={{ margin: 0, fontSize: '0.95rem' }}>hello@primerocoffee.ph</p>
              </div>
            </div>

            <div className="directory-row" style={rowStyle}>
              <div className="directory-num" style={numStyle}>03</div>
              <div className="directory-details" style={detailsStyle}>
                <h5 style={{ margin: '0 0 5px 0', color: '#fff', letterSpacing: '1px' }}>CONCIERGE HOTLINE</h5>
                <p style={{ margin: 0, color: '#aaa', fontSize: '0.95rem' }}>+63 (2) 8123-4567</p>
              </div>
            </div>
          </div>

          <div className="editorial-footer" style={{ marginTop: '30px' }}>
            <Link to="/" className="back-home-link" style={{ textDecoration: 'none', fontWeight: '500' }}>
              ← Back To Main House
            </Link>
          </div>
        </div>

        {/* Right Column: Premium Contact Form Surface Card */}
        <div className="contact-surface-card">
          <div className="card-inner-header">
            <h3>Send a Message</h3>
            <p>Fill out the parameters below. Your transmission is processed securely.</p>
          </div>

          <form onSubmit={handleSubmit} className="luxury-interactive-form">
            <div className="floating-field-group">
              <input 
                type="text" 
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                required 
                placeholder=" " 
                autoComplete="name"
              />
              <label>FULL NAME</label>
              <span className="field-border-track"></span>
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="floating-field-group">
              <input 
                type="email" 
                name="email" 
                value={formValues.email}
                onChange={handleInputChange}
                required 
                placeholder=" " 
                autoComplete="email"
              />
              <label>EMAIL ADDRESS</label>
              <span className="field-border-track"></span>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="floating-field-group">
              <input 
                type="text" 
                name="subject" 
                value={formValues.subject}
                onChange={handleInputChange}
                required 
                placeholder=" " 
              />
              <label>SUBJECT</label>
              <span className="field-border-track"></span>
              <ValidationError prefix="Subject" field="subject" errors={state.errors} />
            </div>

            <div className="floating-field-group">
              <textarea 
                name="message" 
                rows="4" 
                value={formValues.message}
                onChange={handleInputChange}
                required 
                placeholder=" "
              ></textarea>
              <label>YOUR DETAILED MESSAGE</label>
              <span className="field-border-track"></span>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="form-action-container">
              <button 
                type="submit" 
                className="premium-submit-action" 
                disabled={state.submitting}
                style={{ opacity: state.submitting ? 0.6 : 1, cursor: state.submitting ? 'not-allowed' : 'pointer' }}
              >
                <span className="btn-label-text">
                  {state.submitting ? "Sending..." : "Dispatch Message"}
                </span>
                <span className="btn-icon-wrapper">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;