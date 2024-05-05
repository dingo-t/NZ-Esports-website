import React, { useState, useEffect } from 'react';
import './hero.css'; 


// This component the hero section for the home page of the website
function Hero() {



  return (
    <div className='container'>
      <div className='background-image'>
        <img src='../images/Hero.png'></img>
        <div class="overlay"></div>
      </div>
      <img id='esports-logo' src='../images/NZ-Esports_Logo_White-1024x1024.png'></img>
      <img id='netsafe-logo' src='../images/NetSafe-logo_imagelarge.png'></img>
      <div className='text-cont'>
        <div className='body-cont' id='hero-body'>
          <h2>Welcome to your hub for safe gaming, scam awareness, and Esports updates. We're here to make sure your gaming experience is enjoyable and secure. 
              Explore our resources for tips on healthy gaming habits and staying safe from scams, aswell as keeping up with Esport and Netsafe news.</h2>
        </div>
        <div className='title-cont' id='hero-title' >
          <h1>Staying Safe Online</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero; // Exports the hero component
// for use in other parts of the web app