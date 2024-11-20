import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login/Login';
import Signup from './auth/Signup/Signup';
import Homepage from './pages/Homepage/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> 
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
