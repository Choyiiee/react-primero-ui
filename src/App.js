import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import Menu from './views/Menu'; // Imported your new premium Menu view
import ContactUs from './views/ContactUs';
import FindStore from './views/FindStore'; 
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
        
        {/* Added route for the curated menu page */}
        <Route path="/menu" element={<Menu />} />
        
        <Route path="/contact" element={<ContactUs onSubmitSuccess={handleContactSubmit} />} />
        
        {/* Added route for the store locator page */}
        <Route path="/find-store" element={<FindStore />} />
      </Routes>

      {/* Global App Footer */}
      <Footer />
    </div>
  );
}

export default App;