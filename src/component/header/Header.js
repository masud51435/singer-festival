import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-text'>
        <h1>Singer Festival 2021</h1>
        <h5>“Music gives a soul to the universe, wings to the mind, <br /> flight to the imagination and life to everything.”</h5>
        <h2>Total Prize Money: <span style={{fontWeight:'900'}}>1 Millon</span></h2>
      </div>
    </div>
  );
};

export default Header;