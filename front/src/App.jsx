import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Wine from './pages/Wine';
import Menu from './pages/Menu';
import Booking from './pages/Book';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/wine" element={<Wine />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book" element={<Booking />} />
        {/* 
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
