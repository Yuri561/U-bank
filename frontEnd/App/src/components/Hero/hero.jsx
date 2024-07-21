/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './hero.css';

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center hero-background">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-6 bg-black  bg-yellow-300 rounded-lg shadow-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-3"
        >
          Revolutionize Your Banking with U-Bank
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          Experience the future of banking with U-Bank. Manage your finances effortlessly and securely with our state-of-the-art mobile banking solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col md:flex-row justify-center mt-4 space-y-3 md:space-y-0 md:space-x-4"
        >
          <Link to="/signup" className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105">
            Sign Up Now
          </Link>
          <Link to="/learn-more" className="bg-white bg-opacity-20 text-white py-2 px-4 rounded-lg hover:bg-opacity-40 transition-transform transform hover:scale-105">
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
