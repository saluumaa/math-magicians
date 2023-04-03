import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Calculator from './components/calculator';
import Quote from './components/quote';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
