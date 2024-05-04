import React from 'react';
import './tips.css'; 


// This component the hero section for the home page of the website
function Tips() {

 

  return (
    <div className='tips-cont'>
        <div className='tips-title-cont'>
            <h1>Health Tips</h1>
        </div>
        <div className='tips-body-cont'>
        <div className='top-row'>
    <div className='tip-elem'>
        <div className='tip-elem-title'><h2>Take Regular Breaks</h2></div>
        <div className='tip-elem-body'><p>It's important to take short breaks every hour to rest your eyes and stretch your muscles.</p></div>
    </div>
    <div className='tip-elem'>
        <div className='tip-elem-title'><h2>Use Ergonomic Equipment</h2></div>
        <div className='tip-elem-body'><p>Invest in a comfortable chair and ergonomic keyboard and mouse to prevent strain injuries.</p></div>
    </div>
    <div className='tip-elem'>
        <div className='tip-elem-title'><h2>Stay Hydrated</h2></div>
        <div className='tip-elem-body'><p>Remember to drink plenty of water to keep yourself hydrated during long gaming sessions.</p></div>
    </div>
</div>
<div className='bottom-row'>
    <div className='tip-elem'>
        <div className='tip-elem-title'><h2>Get Enough Sleep</h2></div>
        <div className='tip-elem-body'><p>Ensure you get adequate sleep each night to support your overall health and gaming performance.</p></div>
    </div>
    <div className='tip-elem'>
        <div className='tip-elem-title'><h2>Practice Good Posture</h2></div>
        <div className='tip-elem-body'><p>Sit up straight and adjust your monitor to eye level to maintain good posture while gaming.</p></div>
    </div>
    <div className='tip-elem'>
        <div className='tip-elem-title'><h2>Connect with Others</h2></div>
        <div className='tip-elem-body'><p>Don't forget to socialize with friends and family outside of gaming to maintain a healthy balance.</p></div>
    </div>
</div>

        </div>
    </div>
  );
}

export default Tips; // Exports the hero component
// for use in other parts of the web app