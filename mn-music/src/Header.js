import React, { Component } from 'react';
import './styles/header.css';

class Header extends Component {
  render() {
    return (
      <header className="clearfix">
            <div className="header-centered clearfix">
               <a href="index.html"><img src={logo} className="logo" alt="logo" /> </a>
               <div className="hamburger">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
               </div>
               <nav>
                  <ul>
                     <li><a href="menu.html">Menu</a></li>
                     <li><a href="cats.html">Cats</a></li>
                     <li><a href="visit.html">Visit</a></li>
                  </ul>
               </nav>
            </div>
         </header>
    );
  }
}

export default Header;
