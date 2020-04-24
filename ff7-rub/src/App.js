import React from 'react';
import logo from './logo.svg';
import './App.css';

import Characters from './components/Characters'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Characters></Characters>
      </header>
    </div>
  );
}

export default App;
