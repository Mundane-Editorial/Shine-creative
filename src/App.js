import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/Home'; // Example page
import Services from './Pages/Services'; // Example page
import Products from './Pages/Products'; // Example page
import Contactme from './Pages/Contactme'; // Correct path
import AboutUs from './Pages/Aboutus';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactme" element={<Contactme />} />
      </Routes>
    </Router>
  );
}

export default App;
