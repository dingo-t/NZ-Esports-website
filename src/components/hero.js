import React, { useState, useEffect } from 'react';
import './hero.css'; 


// This component the hero section for the home page of the website
function Hero() {



  return (
    <div className='container'>
      <div className='background-image'>
        <img src='https://i.postimg.cc/mDTmCpMx/ai-generated-3440x1440-v0-6n4rkerak5ja1.webp'></img>
      </div>
      <div className='text-cont'>
        <div className='body-cont' id='hero-body'>
          <h2>Welcome to your hub for safe gaming, scam awareness, and Esports updates. We're here to make sure your gaming experience is enjoyable and secure. 
              Explore our resources for tips on healthy gaming habits and staying safe from scams, aswell as keeping up with with Esport and Netsafe news.</h2>
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