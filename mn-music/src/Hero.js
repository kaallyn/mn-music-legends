import React, { Component } from 'react';
import './styles/hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-content">
          <hgroup>
            <h1>Explore Minnesota Music</h1>
            <h2>Legends</h2>
          </hgroup>
          <div className="hero-bg"> </div>
        </div>
      </section>
    );
  }
}

export default Hero;
