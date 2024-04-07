import React from 'react';
import './pages.css'; 


// This component the hero section for the home page of the website
function Pages() {
  return (
    <div className='section-cont'>
        <div className='news-section'>
            <div className='news-text-cont'>
                <div className='news-title'><h1>News</h1></div>
                <div className='news-body'><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2></div>               
            </div>
            <div className='news-img'><img src='https://i.postimg.cc/7YN3Gvyw/Esports-minor-launched-at-Uo-W-1.jpg'></img></div>
        </div>       
        <div className='gaming-section'>
            <div className='gaming-text-cont'>
                <div className='gaming-title'><h1>Healthy Gaming</h1></div>
                <div className='gaming-body'><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2></div>   
            </div>
            <div className='gaming-img'><img src='https://i.postimg.cc/Bvw9JwvC/feature-feature-healthy-gaming.png'></img></div>
        </div>
        <div className='scams-section'>
            <div className='scams-text-cont'>
                <div className='scams-title'><h1>Scams</h1></div>
                <div className='scams-body'><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2></div>   
            </div>
            <div className='scams-img'><img src='https://i.postimg.cc/gJfCZX8X/1.webp'></img></div>
        </div>
    </div>
  );
}

export default Pages; // Exports the hero component
// for use in other parts of the web app