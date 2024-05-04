import React from 'react';
import './gaming-main.css'; 


// This component the hero section for the home page of the website
function GamingMain() {
  return (
    <div className='gaming-main-cont'>
        <div className='main-text-cont'>
            <div className='gaming-main-title'><h1>Healthy Gaming</h1></div>
            <div className='gaming-main-text'><h2>Gaming can be a positive and enjoyable activity. It can help us to connect with other people. Healthy gaming can help us to enjoy our downtime, relax and have fun.
                                                  But gaming, like any behaviour, can cause harm if it is taken to extreme levels. The graph below shows the average daily time spend gaming for New Zealand youth.  </h2></div>
        </div>
    </div>
  );
}

export default GamingMain; 
