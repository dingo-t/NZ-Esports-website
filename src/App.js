import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, createContext, useEffect } from 'react';
import Home from './pages/home';
import News from './pages/news';
import Gaming from './pages/gaming';
import Scams from './pages/scams';
import Navbar from './components/navbar';
import Article1 from './articles/Article1';
import Article2 from './articles/Article2';
import Article3 from './articles/Article3';
import Article4 from './articles/Article4';
import Article5 from './articles/Article5';
import Article6 from './articles/Article6';

function App() {
  return (

      <>
        {/*The routing for each page is handled here */}
        <Router>
          {/* The Navbar is outside the Routes so that they are
           visible regardless of the current path*/}
          <Navbar></Navbar>
          <Routes>
            <Route path='/' exact element={<Home></Home>}/>
            <Route path='/news' exact element={<News></News>}/>
            <Route path='/gaming' exact element={<Gaming></Gaming>}/>
            <Route path='/scams' exact element={<Scams></Scams>}/>
            <Route path='/article1' exact element={<Article1></Article1>}/>
            <Route path='/article2' exact element={<Article2></Article2>}/>
            <Route path='/article3' exact element={<Article3></Article3>}/>
            <Route path='/article4' exact element={<Article4></Article4>}/>
            <Route path='/article5' exact element={<Article5></Article5>}/>
            <Route path='/article6' exact element={<Article6></Article6>}/>
          </Routes>
        </Router>
      </>
 
  );
}

export default App;