import React from 'react';
import '../app.css';
import Survey from '../components/survey.js';
import Graph from '../components/graph-section.js';
import GamingMain from '../components/gaming-main.js';
import Tips from '../components/tips.js';

function Gaming() {
  return (
    <>
      <GamingMain></GamingMain>
      <Graph></Graph>
      <Survey></Survey>
      <Tips></Tips>
    </>
  );
}

export default Gaming;