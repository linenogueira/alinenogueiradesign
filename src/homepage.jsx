import React, { useRef } from 'react';
import About from '../src/components/about.jsx'
import Photo from '../src/components/photo.jsx'
import Products from '../src/components/products.jsx'
import Offer from '../src/components/offer.jsx'
import './components/app.css'
import App from './App.jsx'

function Homepage({aboutRef, portfolioRef, offerRef}) {

  return (
    <>
      <Photo/>
      <About ref={aboutRef}/>
      <Products ref={portfolioRef}/>
      <Offer ref={offerRef}/>
    </>
  )
}

export default Homepage
