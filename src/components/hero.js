import React from 'react';
import './hero.css'; 


// This component the hero section for the home page of the website
function Hero() {
  return (
    <div className='container'>
      <div className='background-image'>
        <img src='https://i.postimg.cc/mDTmCpMx/ai-generated-3440x1440-v0-6n4rkerak5ja1.webp'></img>
      </div>
      <div className='text-cont'>
        <div className='body-cont'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
             in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h2>
        </div>
        <div className='title-cont'>
          <h1>Staying Safe Online</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero; // Exports the hero component
// for use in other parts of the web app