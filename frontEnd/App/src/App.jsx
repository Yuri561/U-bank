/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from 'react-bootstrap/Button';

import './App.css'
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Currency from './components/Currency/Currency';
import Newsletter from './components/Newsletter/Newsletter';
import Boxes from './components/Boxes/Boxes';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Currency/>
      <Newsletter/>
      <Boxes/>
      <Footer/>
    </div>
  );
}

export default App;
