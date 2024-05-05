import React from 'react';
import './scams-main.css'; 


// This component the hero section for the home page of the website
function ScamsMain() {
  return (
    <div className='container' id='top-cont'>
        <div className='title'><h1>Scams</h1></div>
        <div className='main-cont'>
            <div className='main-text'>
                <h2>In this digital age, staying vigilant against online scams is crucial. Scams can come is many different forms and can have major consequences if fallen for. 
                  In this section we will look at common scams and general rules for being safe.</h2>
            </div>
            <div className='main-img'><img src='../images/banknotes.jpg'></img></div>
        </div>
    </div>
  );
}

export default ScamsMain; 
