import React, { Component } from 'react';
import './App.css';
import CFCLogo from './avatar-white.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Open Budget Charlotte</h1>
          <img className="cfclogo" src={CFCLogo} alt="Code For Charlotte"/>
        </header>
        <p>Our goal is to show the open budget data for Charlotte, North Carolina.</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
