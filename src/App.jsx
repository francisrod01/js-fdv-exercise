import React from 'react';

import logo from './statics/images/logoCollective_600.png';
import './statics/styles/App.css';

const App = () => (
  <div className="App">

    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Intive FDV</h1>
    </header>

    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
