// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IssuePage from './pages/IssuePage';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/issues" element={<IssuePage />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
