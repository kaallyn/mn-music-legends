import React, { Component } from 'react';
import './styles/artists.css';
import Artist from './Artist.js';

class ArtistBox extends Component {
  constructor(){
		super();
		this.state = {
			showArtist: false
		};
	}
  render() {
    const artists = this._getArtists();
		let artistNodes;
		// need the node above
		let buttonText = 'show artist';
		// initally sets button text to show cats
		if (this.state.showArtist) {
		// life above creates list of cats if state is true, code to display comments goes inside brackets here
			buttonText = 'Hide artist';
			// above updates button text if state changes from button click
			catNodes = <div className="artist-list"> {cats} </div>
			// move above div from inside "cat-box" div below

      return (
        <section className="artist-box">
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
            <h4 className="artist-count">{this._getArtistsTitle(artists.length)}</h4>
            {catNodes}
            <p>lorem</p>

            <Artist />

          </div>
        </section>
      );
  }
}

// handleClick changes the state to true or false when button is pressed.
_handleClick() {
  this.setState({
    showArtist: !this.state.showArtist
  });
}

_getArtist() {
  const artistList = [
    { id: 1, author: 'Jeff Lebowski', body: 'It really tied the room together.' },
    { id: 2, author: 'Walter', body: 'Take the ringer!' }
  ];
  return artistList.map((cat) => {
    return (
      <Artist
        author={artist.author}	body={artist.body}	key={artist.id}	/>
    );
  });
}


export default ArtistBox;
