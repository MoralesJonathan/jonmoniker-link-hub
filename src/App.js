import React from 'react';
import Header from './components/Header';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import './App.css'; // Importing CSS to style your components

const linkData = [
  { thumbnail: 'blahblahart.jpg', title: 'Presave BLAH BLAH', subtitle: 'My first official release as Jon Moniker. Presave now!', url: 'https://ffm.to/cdyshk018', ctaText: 'Presave' }
];

const socialLinks = [
  { name: 'SoundCloud', url: 'https://soundcloud.com/jonmoniker', icon: 'soundcloud', brand: true},
  { name: 'Instagram', url: 'https://instagram.com/jonmoniker', icon: 'instagram', brand: true },
  { name: 'Facebook', url: 'https://facebook.com/jonmoniker', icon: 'facebook-f', brand: true},
  { name: 'Email', url: 'mailto:hello@jonmoniker.com', icon: 'envelope' }
];

const App = () => (
  <div className="app">
    <div className='container'>
    <Header logoSrc="logo.png" tagLine="Miami DJ/Producer 🌴"/>
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