import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/pages/Dashboard';
import Service from './components/pages/Service';
import DataPage from './components/pages/DataPage';
import './App.css';
import Carousel from './components/serviceComponents/Carousel';
import logo192 from './assets/logo192.png';

const items = [
  { src: logo192, alt: 'Image 1' },
  { src: logo192, alt: 'Image 2' },
  { src: logo192, alt: 'Image 3' },
  { src: logo192, alt: 'Image 4' },
  { src: logo192, alt: 'Image 5' },
  { src: logo192, alt: 'Image 6' },
  { src: logo192, alt: 'Image 7' },
  { src: logo192, alt: 'Image 8' },
];

function App() {
  return (
    <Router>
      <div className="App bg-white">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/service" element={<Service />} />
          <Route path="/data" element={<Carousel items={items} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
