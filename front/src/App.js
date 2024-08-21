import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/pages/Dashboard';
import Service from './components/pages/Service';
import DataPage from './components/pages/DataPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App bg-white">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/service" element={<Service />} />
          <Route path="/data" element={<DataPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
