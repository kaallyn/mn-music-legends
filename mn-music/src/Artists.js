import React, { Component } from 'react';
import './styles/artists.css';
import Artist from './Artist.js';
import ArtistOne from './ArtistOne.js';
import ArtistTwo from './ArtistTwo.js';

class ArtistBox extends Component {
  // CommentBox created below
  constructor() {
    super();

    this.state = {
      showArtist: false
    };
  }
  	render() {
      let buttonText = 'show comments';

      if (this.state.showArtist) {
        buttonText= "hide comments";
      }

      let currentSlide = <ArtistOne />;
      if (this.state.showNextSlide) {
        currentSlide = <ArtistTwo />;
    }
  		return(
  			<div className = "artist-box">
        <nav>
          <ul className="cl-effect-1">
            <li><a>Prince</a></li>
            <li><a>The Replacements</a></li>
            <li><a>Soul Asylum</a></li>
          </ul>
          <div className='divider'></div>
        </nav>

  				<h3>Comments</h3>
  				<h4> 2 comments</h4>
          <button onClick = {this._handleClick.bind(this)}>Artist</button>
  				{/*button above that will toggle state on click event*/}
  				<div className = "artist-list">
  					<Artist author = "Prince" body = "McGee's comment goes here!"/>
  					<Artist author = "The Replacements" body = "if you're not into the brevity thing"/>
            <Artist author = "Soul Asylum" body = "if you're not into the brevity thing"/>
  				{/* This is how you comment in JSX*/}
  				</div>
  			</div>
  		);
  	}

    _handleClick() {
          this.setState({
            showArtist: !this.state.showArtist
          });
      }



  }




export default ArtistBox;
