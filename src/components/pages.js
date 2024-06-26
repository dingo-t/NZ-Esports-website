import React, { useState, useEffect } from 'react';
import './pages.css'; 
import { Link } from 'react-router-dom';

// This component the hero section for the home page of the website
function Pages() {
  return (
    <div className='section-cont'>
        <Link className='pages-link' to='/news'>
        <div className='news-section'>
                <div className='news-text-cont'>
                    <div className='news-title'><h1>News</h1></div>
                    <div className='news-body'><h2>View News Articles</h2></div>               
                </div>
            <div className='news-img'><img src='../images/UOW.png'></img></div>
        </div>    
        </Link>
        <Link className='pages-link' to='/gaming'>
        <div className='gaming-section'>
            <div className='gaming-text-cont'>
                <div className='gaming-title'><h1>Healthy Gaming</h1></div>
                <div className='gaming-body'><h2>Explore the gaming section to stay healthy while having fun</h2></div>   
            </div>
            <div className='gaming-img'><img src='../images/console.png'></img></div>
        </div>
        </Link>
        <Link className='pages-link' to='/scams'>
        <div className='scams-section'>
            <div className='scams-text-cont'>
                <div className='scams-title'><h1>Scams</h1></div>
                <div className='scams-body'><h2>The internet is a useful tool but you should be aware of its dangers</h2></div>   
            </div>
            <div className='scams-img'><img src='../images/scams.png'></img></div>
        </div>
        </Link>
    </div>
    
  );
}

export default Pages; // Exports the hero component 
// for use in other parts of the web app