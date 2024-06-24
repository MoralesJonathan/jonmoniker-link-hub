import React from 'react';

const Nav = ({ socialLinks }) => (
  <nav>
    {socialLinks.map((link, idx) => (
        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
          <i className={`la${link.brand?'b':'r'} la-${link.icon}`} title={link.name}></i>
        </a>
      ))}
  </nav>
);
export default Nav;
