import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// 1. Global styles and resets
import './styles/index.css';

// 2. Component-specific styles
import './styles/components/Navbar.css';
import './styles/components/Footer.css';

// 3. View/Page-specific styles
import './styles/views/HomeView.css';
import './styles/views/Menu.css';
import './styles/views/FindStore.css';
import './styles/views/ContactUs.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();