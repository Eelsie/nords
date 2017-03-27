import React from 'react';
import logo from '../img/nords-logo.png';

const Header = () => {
  return (
    <header className="main-header p-32">
      <img className="main-logo" src={logo} alt="Nord Software main logo"/>
      <h3 className="main-title">Nord Software</h3>
    </header>
  );
}

export default Header;
