import React from 'react';

const Header = ({ logoSrc, tagLine }) => (
  <header>
    <img src={logoSrc} alt="Logo" />
    <h1>{tagLine}</h1>
  </header>
);
export default Header;
