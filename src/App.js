import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import './App.css'; 

const linkData = [
  { thumbnail: 'campinn.jpg', title: 'DJ Contest', subtitle: 'Checkout my entry for the Dirtybird DJ Contest!', url: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&autoplay=1&feed=%2FJonMoniker%2Fdirtybird-campinn-2025-dj-contest-jon-moniker%2F', ctaText: 'LISTEN', embed: true, embedHeight: '200px' },
  { thumbnail: 'GAH.jpg', title: 'GIMME A HUG [EDIT]', subtitle: 'Free edit of Drake\'s GIMME A HUG!', url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2037532480&color=%23ff1d00&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true', ctaText: 'STREAM/DL', embed: true },
  { thumbnail: 'TFR022.jpg', title: 'Pressure Pleasure', subtitle: 'My latest release on The Forgotten Records!', url: 'https://releases.jonmoniker.com/pressurepleasure', ctaText: 'STREAM', embed: true },
  { thumbnail: 'twistandshout.jpg', title: 'Twist and Shout Bootleg', subtitle: 'Bootleg of the beatles!', url: 'https://releases.jonmoniker.com/twist-and-shout-bootleg', ctaText: 'DOWNLOAD', embed: false },
  { thumbnail: 'blahblahart.jpg', title: 'BLAH BLAH', subtitle: 'My first official release as Jon Moniker. Stream now!', url: 'https://ffm.to/cdyshk018', ctaText: 'STREAM', embed: true },
  { thumbnail: 'gmail.png', title: 'Book Me', subtitle: `Let's talk about performing at your show!`, url: 'mailto:bookings@jonmoniker.com', ctaText: 'BOOK', embed: false }
];

const socialLinks = [
  { name: 'Spotify', url: 'https://open.spotify.com/artist/3UB5BJZN8VcGlOSmG5U3Yt?si=3KX3gcB3QMaeusDK7GVZGw', icon: 'spotify', brand: true},
  { name: 'Apple Music', url: 'https://music.apple.com/us/artist/jon-moniker/1712851999', icon: 'apple', brand: true},
  { name: 'SoundCloud', url: 'https://soundcloud.com/jonmoniker', icon: 'soundcloud', brand: true},
  { name: 'Instagram', url: 'https://instagram.com/jonmoniker', icon: 'instagram', brand: true },
  { name: 'Facebook', url: 'https://facebook.com/jonmoniker', icon: 'facebook', brand: true},
];

const footerLinks = [
  { name: 'Email', url: 'mailto:hello@jonmoniker.com', icon: 'envelope' },
  { name: 'Instagram', url: 'https://instagram.com/jonmoniker', icon: 'instagram', brand: true },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/3UB5BJZN8VcGlOSmG5U3Yt?si=3KX3gcB3QMaeusDK7GVZGw', icon: 'spotify', brand: true}
];


const ua =  navigator.userAgent.toLowerCase();

const App = () => (
  <div className="app">
    <div className='container'>
    <Header logoSrc="logo.png" tagLine="Miami DJ/Producer 🌴"/>
    <Nav socialLinks={socialLinks}/>
    <main>
      {linkData.map((link, idx) => (
        <LinkCard key={idx} linkData={link} />
      ))}
    </main>
      {ua.includes("instagram") && ua.includes("android")?
        <a id="mobile_deeplink" className='cta-button' href={window.location.href} target='_blank' download>Open in browser</a> :
        ""}
    </div>
    <Footer year={new Date().getFullYear()} socialLinks={footerLinks} />
  </div>
);

export default App;