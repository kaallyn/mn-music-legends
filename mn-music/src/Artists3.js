import React, { Component } from 'react';
import './styles/artists.css';
import Artist from './Artist.js';
import ArtistOne from './ArtistOne.js';
import ArtistTwo from './ArtistTwo.js';

class ArtistBox extends Component {
  constructor(){
		super();

		this.state = {
			showArtist: false
		};
	}
  render() {
    const artist = this._getArtist();
    let artistNodes;
		// need the node above

		// initally sets button text to show cats
		if (this.state.showArtist) {
		// life above creates list of cats if state is true, code to display comments goes inside brackets here

			// above updates button text if state changes from button click
			artistNodes = <div className="artist-list"> {artist} </div>
			// move above div from inside "cat-box" div below
		}
    return (
      <div className="artist-box">
        <h3>Artist Box 3</h3>
        <button onClick = {this._handleClick.bind(this)}>Show Prince</button>
        {artistNodes}
      </div>
    );
  }

  _handleClick() {
    this.setState({
      showArtist: !this.state.showArtist
    });
  }

  _getArtist() {
    const artistList = [
      { id: 1, artistName: 'Prince', body: 'stuff about prince goes here.'},
      { id: 2, artistName: 'The Replacements', body: 'stuff about The Replacements goes here.'},
    ];

    return artistList.reduce((artist) => {
      return (
        <Artist
          artistName={artist.artistName} body={artist.body} key={artist.id} />
      )

    });
  }
}

export default ArtistBox;
