import React from 'react';
import '../app.css';
import ScamsMain from '../components/scams-main.js';
import Graph from '../components/graph-section.js';
import ScamsBody from '../components/scams-body.js';

function Scams() {
  return (
    <>
      <ScamsMain></ScamsMain>
      <ScamsBody></ScamsBody>
    </>
  );
}

export default Scams;