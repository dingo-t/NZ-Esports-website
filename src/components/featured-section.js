import React from 'react';
import './featured-section.css'; 
import { Link } from 'react-router-dom';


function Featured() {
  return (
    <div className='featured-section'>
      <div className='title'><h1>News</h1></div>
      <div className='sub-title'><h1>Featured</h1></div>
      <div className='featured-cards'> 
        <div className='card' id='card-1'>
          <Link className='featured-link' to='/article2'>
            <div className='card-title'><h1>Netsafe Partners with Schools to Address Online Safety in Esports</h1></div>
            <div className='card-body'><p>
            Recognizing the importance of online safety in the rapidly growing esports scene, Netsafe has teamed up with schools across New Zealand to educate students 
            about the risks and challenges associated with online gaming. The partnership aims to foster a safer and more inclusive gaming environment for young players.
            </p></div>
          </Link>
        </div>
        <div className='card' id='card-2'>
          <Link className='featured-link' to='/article1'>
            <div className='card-title'><h1>New Zealand Universities Launch Esports Minor Program</h1></div>
            <div className='card-body'><p>
                New Zealand universities have taken a bold step into the realm of esports by introducing a new minor program dedicated to the burgeoning industry. 
                The initiative aims to provide students with a comprehensive understanding of esports management, marketing, and the broader gaming ecosystem.              
            </p></div>
          </Link>  
        </div>
        <div className='card' id='card-3'>
          <Link className='featured-link' to='/article4'>
              <div className='card-title'><h1>Youth Advocacy Group Calls for Safer Gaming Environments</h1></div>
              <div className='card-body'><p>
                  A prominent youth advocacy group in New Zealand is calling for action to create safer gaming environments for young players. Citing concerns about cyberbullying, harassment, and online safety, 
                  the group is urging policymakers, gaming companies, and community leaders to implement measures to protect the well-being of young gamers.
              </p></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featured; // Exports the hero component
// for use in other parts of the web app