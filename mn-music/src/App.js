import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/normalize.css';
import './App.css';
import Hero from './Hero.js';
import Artists from './Artists.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Artists />
      </div>
    );
  }
}

export default App;
