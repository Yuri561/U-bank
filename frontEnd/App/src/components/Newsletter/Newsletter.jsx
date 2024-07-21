/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaEnvelope, FaBitcoin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Newsletter.css';
import Bank from '../../img/bankbg.jpeg'

const envelopeVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Newsletter = () => {
  return (
<section className="relative overflow-hidden text-white font-sans p-6 bg-purpledsa" >
      <div className="max-w-7xl mx-auto min-h-[350px] grid lg:grid-cols-2 items-center gap-16">
        <motion.div initial="hidden" animate="visible" variants={envelopeVariants} className="mb-8 lg:mb-0">
          <FaEnvelope className="text-6xl md:text-8xl text-white mb-4" />
          <h3 className="text-4xl font-extrabold">Subscribe to Our Newsletter</h3>
          <p className="text-base mt-4 text-gray-300">
            Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers. Get valuable insights. Join our community today!
          </p>
          <div className="bg-transparent border border-gray-500 flex px-2 py-1 rounded-full mt-8">
            <input type="email" placeholder="Enter your email" className="w-full outline-none bg-transparent text-sm px-4 py-3" />
            <button type="button" className="bg-blue-700 hover:bg-blue-800 transition-all text-white font-semibold text-sm rounded-full px-8 py-3">
              Subscribe
            </button>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial="hidden" animate="visible" variants={cardVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaBitcoin className="text-blue-600 text-4xl mb-4 inline-block border border-gray-500 p-3 rounded-md" />
            <h3 className="text-xl font-semibold mb-4">Customization</h3>
            <p className="text-gray-300 text-sm">
              With U-Bank, customize your banking experience to fit your needs. Tailor your account settings, notifications, and services to match your lifestyle.
            </p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={cardVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 mb-4 inline-block border border-gray-500 p-3 rounded-md text-blue-600" viewBox="0 0 682.667 682.667">
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" />
                </clipPath>
              </defs>
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" />
                <path d="M178 271.894 233.894 216 334 316.105" />
              </g>
            </svg>
            <h3 className="text-xl font-semibold mb-4">Security</h3>
            <p className="text-gray-300 text-sm">
              U-Bank takes your security seriously. We use advanced encryption and multi-factor authentication to protect your accounts and transactions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
