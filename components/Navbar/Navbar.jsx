import React from 'react';
import './Navbar.css';
import homeicon from './homeicon.png';
import searchicon from './searchicon.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={homeicon} id="home"></img>
        <div className="search-container">
        <img src={searchicon} id="search"></img>
          <input
            type="text" 
            placeholder="What do you want to play?"
            className="search-input"
          />
        </div>
      </div>

      <div className="nav-right">
       
        <div className="profile-circle">
          <span>P</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
