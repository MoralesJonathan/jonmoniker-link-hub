import React from 'react';

const Footer = ({ year, socialLinks }) => (
  <footer>
    <p>&copy; {year} Jon Moniker</p>
    <div>
      {socialLinks.map((link, idx) => (
        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.name}
        </a>
      ))}
    </div>
  </footer>
);
export default Footer;