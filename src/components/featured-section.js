import React from 'react';
import './featured-section.css'; 


// This component the hero section for the home page of the website
function Featured() {
  return (
    <div className='container'>
      <div className='title'><h1>News</h1></div>
      <div className='sub-title'><h1>Featured</h1></div>
      <div className='featured-cards'> 
        <div className='card' id='card-1'>
            <div className='card-title'><h1>Stanford University students undertake</h1></div>
            <div className='card-body'><p>
                Netsafe would like to express appreciation for the opportunity to engage with – and host in-country - 
                Stanford University students undertaking a research initiative on online safety for young adults. This research will have a particular 
                focus on young Chinese adults in New Zealand and the barriers they face in reporting online harm to us.
            </p></div>
        </div>
        <div className='card' id='card-2'>
            <div className='card-title'><h1>Stanford University students undertake a research initiative</h1></div>
            <div className='card-body'><p>
                Netsafe would like to express appreciation for the opportunity to engage with – and host in-country - 
                Stanford University students undertaking a research initiative on online safety for young adults. This research will have a particular 
                focus on young Chinese adults in New Zealand and the barriers they face in reporting online harm to us.
            </p></div>
        </div>
        <div className='card' id='card-3'>
            <div className='card-title'><h1>Stanford University students undertake </h1></div>
            <div className='card-body'><p>
                Netsafe would like to express appreciation for the opportunity to engage with – and host in-country - 
                Stanford University students undertaking a research initiative on online safety for young adults. This research will have a particular 
                focus on young Chinese adults in New Zealand and the barriers they face in reporting online harm to us.
            </p></div>
        </div>
      </div>
    </div>
  );
}

export default Featured; // Exports the hero component
// for use in other parts of the web app