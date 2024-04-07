
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, createContext, useEffect } from 'react';
import Home from './pages/home';
import News from './pages/news';
import Gaming from './pages/gaming';
import Scams from './pages/scams';


function App() {
  return (

      <>
        {/*The routing for each page is handled here */}
        <Router>
          {/* The Navbar and Footer are outside the Routes so that they are
           visible regardless of the current path*/}
    
          <Routes>
            <Route path='/' exact element={<Home></Home>}/>
            <Route path='/' exact element={<News></News>}/>
            <Route path='/' exact element={<Gaming></Gaming>}/>
            <Route path='/' exact element={<Scams></Scams>}/>
          </Routes>
      
        </Router>
      </>
 
  );
}

export default App;
