/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Import the React icons you want to use

const InsuranceSection = () => (
	<div className='font-[sans-serif] text-gray-800 bg-gray-100 px-6 py-12'>
		<div className='text-center mb-12'>
			<h2 className='text-4xl font-extrabold'>
				Auto & Home Insurance with U-bank
			</h2>
		</div>
		<div className='grid lg:grid-cols-2 gap-12 max-lg:max-w-2xl mx-auto'>
			<div>
				<p className='mb-4 text-sm'>
					At U-bank, we offer specialized auto and home insurance solutions
					designed to meet your unique needs. Whether you're protecting your
					vehicle or securing your home, our plans provide comprehensive
					coverage and financial security.
				</p>
				<p className='mb-4 text-sm'>
					Enjoy benefits like customizable plans, rapid claims processing, and
					unparalleled customer service. Our goal is to ensure that your
					insurance experience is both smooth and reassuring.
				</p>
				<p className='text-sm'>
					Choose from a range of options tailored for auto and home insurance.
					Our dedicated team is here to help you navigate your choices and
					answer any questions, ensuring you find the best protection for your
					assets.
				</p>
				<div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-6 mt-12'>
					<div className='flex items-center'>
						<FaCheckCircle className='text-green-500 shrink-0' size={20} />
						<h6 className='text-base font-semibold ml-4'>
							Customizable Coverage
						</h6>
					</div>
					<div className='flex items-center'>
						<FaCheckCircle className='text-green-500 shrink-0' size={20} />
						<h6 className='text-base font-semibold ml-4'>Trusted Security</h6>
					</div>
					<div className='flex items-center'>
						<FaCheckCircle className='text-green-500 shrink-0' size={20} />
						<h6 className='text-base font-semibold ml-4'>
							24/7 Customer Support
						</h6>
					</div>
					<div className='flex items-center'>
						<FaCheckCircle className='text-green-500 shrink-0' size={20} />
						<h6 className='text-base font-semibold ml-4'>
							Fast Claims Processing
						</h6>
					</div>
					<div className='flex items-center'>
						<FaCheckCircle className='text-green-500 shrink-0' size={20} />
						<h6 className='text-base font-semibold ml-4'>
							Nationwide Coverage
						</h6>
					</div>
					<div className='flex items-center'>
						<FaCheckCircle className='text-green-500 shrink-0' size={20} />
						<h6 className='text-base font-semibold ml-4'>
							Transparent Communication
						</h6>
					</div>
				</div>
			</div>
			<div>
				<p className='mb-4 text-sm'>
					When you bank with U-bank, you get more than just financial
					services—you gain access to top-tier insurance solutions. Our auto and
					home insurance options are designed to provide you with peace of mind
					and protection in all situations.
				</p>
				<p className='mb-4 text-sm'>
					Discover the benefits of U-bank’s insurance offerings. With a focus on
					customer satisfaction and comprehensive coverage, we ensure that your
					insurance experience is tailored to your needs.
				</p>
				<p className='text-sm'>
					Our team at U-bank is dedicated to helping you find the perfect
					insurance plan. Contact us today to learn more about our auto and home
					insurance options and how we can help protect what matters most to
					you.
				</p>
			</div>
		</div>
	</div>
);

export default InsuranceSection;
