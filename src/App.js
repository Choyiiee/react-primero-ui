import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import ContactUs from './views/ContactUs';
import './App.css';

function App() {
  const [navActive, setNavActive] = useState(false);

  const handleContactSubmit = () => {
    console.log("Form submitted safely via Formspree!");
  };

  return (
    <div className="App">
      {/* Global Navigation Bar */}
      <Navbar navActive={navActive} setNavActive={setNavActive} />

      {/* Primary App Views Controller */}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contact" element={<ContactUs onSubmitSuccess={handleContactSubmit} />} />
      </Routes>

      {/* Global App Footer */}
      <Footer />
    </div>
  );
}

export default App;