import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationBar } from './components/ui/NavigationBar';
import { Footer } from './components/website/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { AIAssistant } from './components/website/AIAssistant';

import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div style={{ minHeight: '100vh', position: 'relative' }}>
          {/* Global Background Blobs */}
          <div className="bg-blob" style={{ top: '10%', left: '20%', width: '400px', height: '400px' }} />
          <div className="bg-blob" style={{ top: '40%', right: '10%', width: '500px', height: '500px', animationDelay: '-5s' }} />
          <div className="bg-blob" style={{ bottom: '10%', left: '30%', width: '300px', height: '300px', animationDelay: '-10s' }} />

          <NavigationBar />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <Footer />
          <AIAssistant />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
