import React, { Component } from 'react';
import './styles/artists.css';
import Artist from './Artist.js';
import ArtistOne from './ArtistOne.js';
import ArtistTwo from './ArtistTwo.js';

class ArtistBox extends Component {
  render() {
    const artist = this._getArtist();
    return (
      <div className="artist-box">
        <h3>Artist Box 3</h3>
        {artist}
      </div>
    );
  }


  _getArtist() {
    const artistList = [
      { id: 1, artistName: 'Prince', body: 'stuff about prince goes here.'},
      { id: 2, artistName: 'The Replacements', body: 'stuff about The Replacements goes here.'},
    ];

    return artistList.map((artist) => {
      return (
        <Artist
          artistName={artist.artistName} body={artist.body} key={artist.id} />
      )

    });
  }
}

export default ArtistBox;
