import React, { Component } from 'react';
import './styles/artists.css';

class Artists extends Component {
  render() {
    return (
      <section className="artists">
        <nav>
          <ul className="cl-effect-1">
            <li><a>Prince</a></li>
            <li><a>The Replacements</a></li>
            <li><a>Soul Asylum</a></li>
          </ul>
          <div className='divider'></div>
        </nav>
        <div className="artist-content">
          <h3>Artist Name</h3>
          <p>lorem</p>

        </div>
      </section>
    );
  }
}

export default Artists;
