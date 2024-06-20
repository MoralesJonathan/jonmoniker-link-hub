import React from 'react';
import Header from './components/Header';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import './App.css'; 

const linkData = [
  { thumbnail: 'TFR022.jpg', title: 'Pressure Pleasure', subtitle: 'My latest release on The Forgotten Records!', url: 'https://releases.jonmoniker.com/pressurepleasure', ctaText: 'STREAM', embed: true },
  { thumbnail: 'twistandshout.jpg', title: 'Twist and Shout Bootleg', subtitle: 'Bootleg of the beatles!', url: 'https://releases.jonmoniker.com/twist-and-shout-bootleg', ctaText: 'DOWNLOAD', embed: false },
  { thumbnail: 'blahblahart.jpg', title: 'BLAH BLAH', subtitle: 'My first official release as Jon Moniker. Stream now!', url: 'https://ffm.to/cdyshk018', ctaText: 'STREAM', embed: true }
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
    </div>
    <Footer year={new Date().getFullYear()} socialLinks={socialLinks} />
  </div>
);

export default App;