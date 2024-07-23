/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaBitcoin, FaMoneyBill, FaCreditCard, FaUniversity, FaHome, FaCar } from 'react-icons/fa'; // Importing React Icons
import { motion } from 'framer-motion';

import './Currency.css';

const bubbleVariants = {
  animate: {
    y: [0, -20, 0],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Currency = () => {
  return (
		<section className='p-10 text-white relative overflow-hidden currency-bg bg-blue-800'>
			{/* Bubbles Background */}
			<div className='absolute inset-0 overflow-hidden'>
				{Array.from({ length: 20 }).map((_, index) => (
					<motion.div
						key={index}
						className='absolute bg-primary rounded-full opacity-50'
						style={{
							width: `${Math.random() * 100 + 20}px`,
							height: `${Math.random() * 100 + 20}px`,
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
						}}
						variants={bubbleVariants}
						animate='animate'
					/>
				))}
			</div>

			<div className='container mx-auto relative z-10 p-10 bg-currency rounded shadow text-white'>
				<div className='text-center mb-10'>
					<motion.h1
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className='text-4xl md:text-5xl font-bold mb-4'>
						Why Choose U-Bank?
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						className='text-lg md:text-xl'>
						No Maintenance Fees. No Hidden Charges. Just Pure Banking Freedom.
					</motion.p>
				</div>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
					<motion.div
						initial='hidden'
						animate='visible'
						variants={cardVariants}
						className='bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-opacity-75'>
						<FaMoneyBill className='text-primary mb-4' size={40} />
						<h2 className='text-2xl font-bold mb-3'>No Maintenance Fees</h2>
						<p className='text-gray-400'>
							With U-Bank, you can enjoy all the benefits of modern banking
							without any maintenance fees. Your money is yours to keep and
							grow.
						</p>
					</motion.div>
					<motion.div
						initial='hidden'
						animate='visible'
						variants={cardVariants}
						className='bg-gray-900 bg-opacity-85 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
						<FaCreditCard className='text-primary mb-4' size={40} />
						<h2 className='text-2xl font-bold mb-3'>No Hidden Charges</h2>
						<p className='text-gray-400'>
							Transparency is key. U-Bank ensures that you are never surprised
							by hidden fees. What you see is what you get.
						</p>
					</motion.div>
					<motion.div
						initial='hidden'
						animate='visible'
						variants={cardVariants}
						className='bg-gray-900 bg-opacity-85 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
						<FaBitcoin className='text-primary mb-4' size={40} />
						<h2 className='text-2xl font-bold mb-3'>u-Coin Rewards</h2>
						<p className='text-gray-400'>
							Earn u-Coins with every transaction and enjoy rewards that truly
							benefit you. Spend and save with confidence.
						</p>
					</motion.div>
					<motion.div
						initial='hidden'
						animate='visible'
						variants={cardVariants}
						className='bg-gray-900 bg-opacity-85 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
						<FaUniversity className='text-primary mb-4' size={40} />
						<h2 className='text-2xl font-bold mb-3'>Competitive Rates</h2>
						<p className='text-gray-400'>
							Experience better savings with U-Bank's competitive interest
							rates. Your money grows faster here.
						</p>
					</motion.div>
					<motion.div
						initial='hidden'
						animate='visible'
						variants={cardVariants}
						className='bg-gray-900 bg-opacity-85 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
						<FaHome className='text-primary mb-4' size={40} />
						<h2 className='text-2xl font-bold mb-3'>Home Loans</h2>
						<p className='text-gray-400'>
							Get the best deals on home loans with flexible terms and
							unbeatable rates. Make your dream home a reality with U-Bank.
						</p>
					</motion.div>
					<motion.div
						initial='hidden'
						animate='visible'
						variants={cardVariants}
						className='bg-gray-900 bg-opacity-85 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
						<FaCar className='text-primary mb-4' size={40} />
						<h2 className='text-2xl font-bold mb-3'>Car Loans</h2>
						<p className='text-gray-400'>
							Drive your dream car with our affordable car loans. U-Bank offers
							flexible financing options tailored to your needs.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Currency;
