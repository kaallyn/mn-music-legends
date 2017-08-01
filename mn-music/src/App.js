import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/normalize.css';
import './App.css';
import Hero from './Hero.js';
import ArtistBox from './Artists3.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <ArtistBox />
      </div>
    );
  }
}

export default App;
