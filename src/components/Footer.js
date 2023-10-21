import React from 'react';

const Footer = ({ year, socialLinks }) => (
  <footer>
    <p>&copy; {year} Jon Moniker</p>
    <div>
      {socialLinks.map((link, idx) => (
        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
          <i className={`la${link.brand?'b':'r'} la-${link.icon}`} title={link.name}></i>
        </a>
      ))}
    </div>
  </footer>
);
export default Footer;