import React from 'react';
import Header from './components/Header';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import './App.css'; // Importing CSS to style your components

const linkData = [
  { thumbnail: 'https://placehold.it/100x100', title: 'Link Title', subtitle: 'Link Subtitle', url: 'https://link.url', ctaText: 'Listen Now' }
];

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/jonmoniker' }
];

const App = () => (
  <div className="app">
    <div className='container'>
    <Header logoSrc="path/to/logo" tagLine="Jon Moniker" />
    <main>
      {linkData.map((link, idx) => (
        <LinkCard key={idx} linkData={link} />
      ))}
    </main>
    <Footer year={new Date().getFullYear()} socialLinks={socialLinks} />
    </div>
  </div>
);

export default App;