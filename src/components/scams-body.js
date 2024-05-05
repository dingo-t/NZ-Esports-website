import React from 'react';
import './scams-body.css'; 


// This component the hero section for the home page of the website
function ScamsBody() {
  return (
    <div className='body-container' id='body-cont'>
       <div className='top-section'>
            <div className='top-text-cont'>
                <div className='top-title'><h1>Discord Scams</h1></div>
                <div className='top-body'><h2>This is a scam where a user will pretend to be an official discord bot giving you a free Nitro subscription. 
                  They will send a link to a website imporsonating the offical discord site which will have a login page. If you input your login details they will gain access to your account.</h2></div>
            </div>
            <div className='top-img-cont'><img src='../images/DiscordScam.png'></img></div>
       </div>
       <div className='lower-section'>
            <div className='lower-text-cont'>
            <div className='lower-title'><h1>Steam Scams</h1></div>
                <div className='lower-body'><h2>This is an example of a common steam scam where a user will message you saying 
                  that they have accidentally reported your account which will lead to you getting banned. They will then direct you to a fake steam 
                  support site which will prompt you to input your username and password, leading to you giving them your login information. </h2></div> 
            </div>
            <div className='lower-img-cont'><img src='../images/SteamScam.png'></img></div>
       </div>
    </div>
  );
}

export default ScamsBody; 
