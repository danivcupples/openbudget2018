import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
