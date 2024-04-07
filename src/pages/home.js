import React from 'react';
import '../app.css';
import pages from '../components/pages';
import Hero from '../components/hero';
import Pages from '../components/pages';

function Home() {
  return (
    <>
      <Hero></Hero>
      <Pages></Pages>
    </>
  );
}

export default Home;