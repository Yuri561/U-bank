/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from 'react-bootstrap/Button';

import './App.css'
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Currency from './components/Currency/Currency';
import { motion } from "framer-motion"


function App() {
  return (
    <motion.div className="App">
      <Header/>
      <Hero/>
      <Currency/>
    </motion.div>
  );
}

export default App;
