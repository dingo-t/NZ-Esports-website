import React from 'react';
import './scams-main.css'; 


// This component the hero section for the home page of the website
function ScamsMain() {
  return (
    <div className='container' id='top-cont'>
        <div className='title'><h1>Scams</h1></div>
        <div className='main-cont'>
            <div className='main-text'>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h2>
            </div>
            <div className='main-img'><img src='https://i.postimg.cc/7YN3Gvyw/Esports-minor-launched-at-Uo-W-1.jpg'></img></div>
        </div>
    </div>
  );
}

export default ScamsMain; 
