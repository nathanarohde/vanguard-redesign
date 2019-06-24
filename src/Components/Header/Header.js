import React from 'react';
import './Header.css';
import VanguardLogo from '../../vanguard-logo.png';

const header = () => {
  return (
    <header>
      <div className="header-top">
        <img src={VanguardLogo}/>
        <input id="headerSearch" className="headerSearch" placeholder="Search the site or get a quote"/>
      </div>
      <div className="header-links-wrapper">
        <p className="header-links">
          <a href="https://investor.vanguard.com/home">Home</a>
          <a>My Accounts</a>
        </p>
      </div>
    </header>
  )
}

export default header;
