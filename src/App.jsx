import React, { useRef } from 'react';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import './components/styles/app.css';
import Homepage from './homepage.jsx';
import Portfolio from './components/portfolio.jsx';
import SingleProject from './components/singleproject.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  const aboutRef = useRef(null);
  const offerRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  
  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        offerRef={offerRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <Routes>
        <Route path="/" element={<Homepage aboutRef={aboutRef} offerRef={offerRef} portfolioRef={portfolioRef} />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:projectId" element={<SingleProject />} /> {/* Corrigido */}
      </Routes>
      <Footer ref={contactRef} />
    </>
  );
}

export default App;
