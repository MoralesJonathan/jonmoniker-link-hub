import React from 'react';

const LinkCard = ({ linkData }) => (
  <div className="link-card">
    <img src={linkData.thumbnail} alt={linkData.title} />
    <div>
      <h2>{linkData.title}</h2>
      <p>{linkData.subtitle}</p>
    </div>
    <a href={linkData.url} className="cta-button">
      {linkData.ctaText}
    </a>
  </div>
);
export default LinkCard;