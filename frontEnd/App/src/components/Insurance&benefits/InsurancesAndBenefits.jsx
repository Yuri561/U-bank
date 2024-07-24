/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import InsuranceImage from '../../img/insurance_benefits.webp';
import AllstateLogo from '../../img/allstate.webp';
import GeicoLogo from '../../img/geico.png';
import ProgressiveLogo from '../../img/progressive.jpg';
import StatefarmLogo from '../../img/statefarm.jpg';
import InsuranceSection from  './InsuranceSection'

const InsurancesAndBenefits = () => {
	return (
		<div className='py-12'>
			<div className='font-sans p-3 max-w-8xl max-md:max-w-md mx-auto'>
				<div className='grid mt-12 md:grid-cols-2 items-center md:gap-8 gap-6'>
					<div className='max-md:order-1 max-md:text-center'>
						<p className='text-sm font-bold text-blue-600 mb-2'>
							<span className='rotate-90 inline-block mr-2'>|</span> ALL IN ONE
							INSURANCE AND BENEFITS PACKAGE WITH U-BANK
						</p>
						<h2 className='text-white md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]'>
							Feel at ease with our insurance and benefits package
						</h2>
						<hr></hr>
						<p className='mt-4 text-base text-gray-300 leading-relaxed'>
							Discover peace of mind with U-Bank's comprehensive insurance
							solutions. Whether you’re protecting your home, car, or health,
							our tailored policies provide the coverage you need at competitive
							rates. Enjoy the assurance of 24/7 customer support, swift claims
							processing, and flexible plans that adapt to your lifestyle. Trust
							U-Bank to safeguard your future with the reliability and security
							you deserve.
						</p>

						<div className='mt-8 space-x-4'>
							<button
								type='button'
								className='bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold tracking-wide text-sm rounded-full px-6 py-2.5'>
								Get started
							</button>
							<button
								type='button'
								className='bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition-all text-blue-600 font-semibold tracking-wide text-sm rounded-full px-6 py-2.5'>
								Learn more
							</button>
						</div>

						<hr className='mt-8 border-gray-300' />

						<div className='mt-8'>
							<h4 className='text-gray-300 font-bold text-base mb-4'>
								Trusted by agencies around the world
							</h4>
							<div className='grid grid-cols-2 md:grid-cols-4 gap-4 items-center'>
								<img
									src={GeicoLogo}
									className='w-28 mx-auto'
									alt='google-logo'
								/>
								<img
									src={StatefarmLogo}
									className='w-28 h-7 rounded-lg mx-auto'
									alt='facebook-logo'
								/>
								<img
									src={ProgressiveLogo}
									className='w-28 h-9 rounded-lg mx-auto'
									alt='linkedin-logo'
								/>
								<img
									src={AllstateLogo}
									className='w-28 h-9 rounded-lg mx-auto'
									alt='pinterest-logo'
								/>
							</div>
						</div>
					</div>
					<div className='lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-blue-200 before:h-full before:w-3/4 before:right-0 before:z-0 '>
						<img
							src={InsuranceImage}
							className='rounded-md lg:w-3/4 md:w-11/12 z-50 relative'
							alt='Insurance'
						/>
					</div>
				</div>
      </div>
      <InsuranceSection />
		</div>
	);
};

export default InsurancesAndBenefits;
