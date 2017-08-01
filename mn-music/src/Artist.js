import React, { Component } from 'react';
import './styles/artists.css';


class Artist extends React.Component{
	render() {
		return(
			<div className="artist">
				<p className="artist-header"> {this.props.artistName} </p>
				<p className="artist-body"> {this.props.body} </p>
				<div className="artist-footer">
					<a href="#" className="artist-footer-delete"> Delete This Cat </a>
				</div>
			</div>
		);
	}
}

export default Artist;
