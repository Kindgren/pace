import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="Pace-calculator">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

