import React from 'react';
import logo from './hat.png';
import './App.css';

function App() {
  return (
    <div className="page">
      <h1>Trondheim Propellhattklubb</h1>
      
      <div className="content">
        <img src={logo} />
      </div>

      <div className="tabs">
        <div className="tab"></div>
        <div className="tab"></div>
        <div className="tab"></div>
      </div>
    </div>
  );
}

export default App;
