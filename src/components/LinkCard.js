import React, { useState, useRef, useEffect } from 'react';

const LinkCard = ({ linkData }) => {
  const [showIframe, setShowIframe] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (showIframe && cardRef.current) {
      const cardTop = cardRef.current.offsetTop - 10;
      const cardContentHeight = cardRef.current.querySelector(".link-card-content").offsetHeight;
      const footerHeight = document.querySelector("footer").offsetHeight;
      const paddingMarginHeight = 60;
      const iframeContainer = cardRef.current.querySelector(".iframe-container");
      iframeContainer.style.height = `${window.innerHeight - cardContentHeight - footerHeight - paddingMarginHeight}px`;
      setTimeout(() => window.scrollTo({top: cardTop, behavior: 'smooth'}), 501);
    } else {
      const iFrameContainer = cardRef.current.querySelector('.iframe-container');
      iFrameContainer && (iFrameContainer.style.height = 0);
    }
  }, [showIframe]);

  return (
    <div className="link-card" ref={cardRef}>
      <div className="link-card-content">
        <img src={linkData.thumbnail} alt={linkData.title} />
        <div>
          <h2>{linkData.title}</h2>
          <p>{linkData.subtitle}</p>
        </div>
        {linkData.embed ? (
          <button onClick={() => setShowIframe(!showIframe)} className="cta-button">
            {showIframe?'CLOSE':linkData.ctaText}
          </button>
        ) : (
          <a href={linkData.url} className="cta-button">
            {linkData.ctaText}
          </a>
        )}
      </div>
      {linkData.embed && (
        <div className="iframe-container" style={{ maxHeight: linkData.embedHeight ? linkData.embedHeight : 'auto' }}>
        {showIframe && (
          <iframe src={linkData.url} title={linkData.title} />
          )}
        </div>
      )}
    </div>
  );
};

export default LinkCard;