import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import Quote from './components/quote';

function App() {
  return (
    <div>
      <h1>Simplify Math</h1>
      <Calculator />
      <Quote />
    </div>
  );
}

export default App;
