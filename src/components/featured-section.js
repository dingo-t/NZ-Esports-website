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
            <div className='card-title'><h1>New Zealand Universities Launch Esports Minor Program</h1></div>
            <div className='card-body'><p>
                New Zealand universities have taken a bold step into the realm of esports by introducing a new minor program dedicated to the burgeoning industry. 
                The initiative aims to provide students with a comprehensive understanding of esports management, marketing, and the broader gaming ecosystem.              
            </p></div>
        </div>
        <div className='card' id='card-3'>
            <div className='card-title'><h1>Youth Advocacy Group Calls for Safer Gaming Environments in New Zealand</h1></div>
            <div className='card-body'><p>
                A prominent youth advocacy group in New Zealand is calling for action to create safer gaming environments for young players. Citing concerns about cyberbullying, harassment, and online safety, 
                the group is urging policymakers, gaming companies, and community leaders to implement measures to protect the well-being of young gamers.
            </p></div>
        </div>
      </div>
    </div>
  );
}

export default Featured; // Exports the hero component
// for use in other parts of the web app