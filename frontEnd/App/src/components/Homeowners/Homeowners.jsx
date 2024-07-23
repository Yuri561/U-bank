import React, { useState } from 'react';
import { Container, Box, Typography, Paper, Grid } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

import heroImage from '../../img/hero-image.jpg'; // Ensure the path is correct
import Agent from '../../img/agent.jpg'; // Ensure the path is correct
import Broker from '../../img/broker.jpg'; // Ensure the path is correct
import Lawyer from '../../img/lawyer.jpg'; // Ensure the path is correct
import Inspector from '../../img/inspector.jpg'; // Ensure the path is correct
import './Homeowners.css'; // Import the CSS file for bubbles

const HeroSection = styled(Box)(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '550px',
	background: `url(${heroImage}) no-repeat center center`,
	backgroundSize: 'cover',
	color: '#fff',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	[theme.breakpoints.down('sm')]: {
		height: '300px',
		backgroundPosition: 'center',
	},
}));

const CardSection = styled('section')(({ theme }) => ({
	marginBottom: theme.spacing(5),
	padding: theme.spacing(2),
	background: '#f0f0f0',
	borderRadius: theme.shape.borderRadius,
	opacity: 0,
	transform: 'translateY(50px)',
	transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
	'&.visible': {
		opacity: 1,
		transform: 'translateY(0)',
	},
}));

const StepsContainer = styled(Paper)(({ theme }) => ({
	position: 'absolute',
	bottom: '-25px',
	maxWidth: '1200px',
	left: '50%',
	transform: 'translateX(-50%)',
	width: '90%',
	padding: theme.spacing(2),
	marginBottom: '23rem',
	display: 'flex',
	justifyContent: 'space-between',
	background: 'linear-gradient(to bottom, #a8c0ff, #3f2b96)',
	boxShadow: theme.shadows[3],
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		position: 'relative',
		bottom: '0',
		left: '0',
		transform: 'none',
		padding: theme.spacing(1),
	},
}));

const StepBox = styled(Box)(({ theme, active }) => ({
	flex: '1',
	textAlign: 'center',
	padding: theme.spacing(1),
	cursor: 'pointer',
	position: 'relative',
	borderBottom:
		active === 'true' ? `2px solid ${theme.palette.primary.main}` : 'none',
	'&:not(:last-child)': {
		borderRight: `1px solid ${theme.palette.divider}`,
		[theme.breakpoints.down('sm')]: {
			borderRight: 'none',
			borderBottom: `1px solid ${theme.palette.divider}`,
		},
	},
	display: 'block',
	'&:hover': {
		borderRadius: '5px',
		transform: 'scale(1.1)',
		boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
		background: 'linear-gradient(to right, #f0f0f0, #ffff)',
	},
	...(active === 'true' && {
		borderRadius: '5px',
		boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
		background: 'linear-gradient(to right, #f0f0f0, #ffff)',
		'& .chevron-icon': {
			display: 'block',
		},
	}),
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(0.5),
	},
}));

const ChevronIcon = styled(ExpandMoreIcon)(({ theme }) => ({
	position: 'absolute',
	top: '75px',
	right: '75px',
	display: 'none',
	[theme.breakpoints.down('sm')]: {
		top: '50px',
		right: '50px',
	},
}));

const stepContent = [
	{
		title: 'What can you afford',
		content: (
			<Box className='p-6 mx-auto flex flex-col justify-center items-center bg-yellow-500 rounded shadow my-3'>
				<Typography variant='h2'>Understanding Your Budget</Typography>
				<Box
					my={4}
					display='flex'
					flexDirection='column'
					alignItems='center'
					gap={4}
					p={2}
					sx={{ border: '2px solid black' }}
					borderRadius={5}>
					<Typography variant='body1'>
						One of the first steps in the home buying process is to fully
						understand your finances. It's not as fun as looking at homes, but
						it's important and necessary to help you determine how much you can
						afford. Utilize U-Bank's mobile app to track your income and
						expenses effortlessly. Set up a budget, monitor your spending
						habits, and get real-time alerts to stay on top of your financial
						health.
					</Typography>
				</Box>
				<Box
					my={4}
					display='flex'
					flexDirection='column'
					alignItems='center'
					className='bg-yellow-500'
					gap={4}
					p={2}
					sx={{ border: '2px solid black' }}
					borderRadius={10}>
					<Typography variant='body2'>
						Buying a home requires that you get a firm handle on your finances,
						gathering your supporting documentation, and answering a handful of
						questions, including:
					</Typography>
					<BarChart
						series={[
							{ data: [35, 44, 24, 34] },
							{ data: [51, 6, 49, 30] },
							{ data: [15, 25, 30, 50] },
							{ data: [60, 50, 15, 25] },
						]}
						height={290}
						xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
						margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
					/>
				</Box>
				<Typography variant='body3'>
					To get a rough estimate of what you can afford, most lenders suggest
					you spend no more than 28% of your monthly income—before taxes are
					taken out—on your mortgage payment, including principal, interest,
					taxes, and insurance. U-Bank's app can help you calculate this with
					ease.
				</Typography>
			</Box>
		),
	},
	{
		title: 'Down payment and PMI',
		content: (
			<Box p={3} className='bg-yellow-500 rounded shadow my-3'>
				<Typography variant='h2' gutterBottom>
					Saving for a Down Payment
				</Typography>
				<Typography variant='body1'>
					Saving for a down payment is a crucial part of buying a home.
					Typically, you'll need to save 20% of the home's purchase price to
					avoid Private Mortgage Insurance (PMI). However, there are options
					with lower down payment requirements, especially for first-time
					buyers, though these may require PMI.
				</Typography>
				<Typography variant='body2' paragraph>
					With U-Bank, you can set specific savings goals within our mobile app.
					Track your progress, receive reminders, and get personalized tips to
					help you reach your goal faster. Explore various loan options that
					might require lower down payments, and use our comparison tools to
					find the best fit for your needs.
				</Typography>
				<Typography variant='body3' paragraph>
					Remember, a larger down payment reduces your loan amount and monthly
					payments. Use our mortgage calculators to see how different down
					payment amounts will affect your mortgage.
				</Typography>
				<Box
					my={4}
					display='flex'
					flexDirection='column'
					alignItems='center'
					gap={4}
					p={2}
					sx={{ border: '2px solid black' }}
					borderRadius={10}
					className='bg-yellow-500'>
					<Box className='flex flex-col p-4 my-3'>
						<Typography variant='body2' className='my-5'>
							Saving for a down payment requires disciplined budgeting and
							planning. Utilize U-Bank’s budgeting tools to allocate a portion
							of your income towards your down payment goal. Our app also offers
							features to analyze your spending patterns and identify areas
							where you can cut costs to save more efficiently.
						</Typography>
						<LineChart
							series={[
								{ data: [300, 400, 200, 500], label: 'Monthly Savings' },
								{ data: [200, 300, 250, 450], label: 'Target Savings' },
							]}
							height={290}
							xAxis={[
								{ data: ['Jan', 'Feb', 'Mar', 'Apr'], scaleType: 'band' },
							]}
							margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
						/>
					</Box>
				</Box>
				<Box
					my={4}
					display='flex'
					flexDirection='column'
					alignItems='center'
					gap={4}
					p={2}
					sx={{ border: '2px solid black' }}
					borderRadius={10}
					className='bg-yellow-500'>
					<Box className='flex flex-col p-4 my-3'>
						<Typography variant='body2' className='my-5'>
							Explore various investment options that can help grow your
							savings. U-Bank offers advisory services to guide you through safe
							and effective investment strategies. Whether it's high-yield
							savings accounts, bonds, or mutual funds, our experts are here to
							help you make the best financial decisions.
						</Typography>
						<PieChart
							series={[
								{
									data: [
										{ value: 40, label: 'Savings Accounts' },
										{ value: 30, label: 'Bonds' },
										{ value: 20, label: 'Mutual Funds' },
										{ value: 10, label: 'Other Investments' },
									],
								},
							]}
							height={290}
							margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
						/>
					</Box>
				</Box>
			</Box>
		),
	},
	{
		title: 'Find your team',
		content: (
			<Box p={3} className='bg-yellow-500 rounded shadow my-3'>
				<Typography variant='h2' gutterBottom>
					Building Your Home Buying Team
				</Typography>
				<Typography variant='body1'>
					Building the right team of professionals is essential. This includes a
					real estate agent, mortgage broker, lawyer, and home inspector. Each
					plays a vital role in ensuring your home purchase is smooth and
					legally sound. Take your time to find experienced professionals who
					understand your needs.
				</Typography>
				<Typography variant='body2'>
					U-Bank app offers a network of trusted professionals you can connect
					with. Read reviews, compare services, and contact them directly from
					your mobile device. Schedule appointments, manage communications, and
					keep all your documents organized in one place.
				</Typography>
				<Typography variant='body3'>
					A good team can make the home buying process less stressful and more
					efficient. Make sure to interview multiple candidates and choose the
					ones who best match your style and requirements.
				</Typography>
				<Box
					my={4}
					display='flex'
					flexDirection='column'
					alignItems='center'
					gap={4}
					p={2}
					sx={{
						border: '2px solid black',
						background: 'linear-gradient(to bottom, #FFDEE9, #B5FFFC)',
					}}
					borderRadius={10}>
					<Box className='flex flex-col p-6 my-5'>
						<Typography variant='h2' className='text-center mt-5 mb-9 '>
							Meet Your Team
						</Typography>
						<Grid container spacing={2} justifyContent='center'>
							<Grid item xs={6} sm={4} md={3} lg={2}>
								<Box className='p-4 bg-white rounded shadow mx-5'>
									<Typography variant='body1'>Real Estate Agent</Typography>
									<img
										src={Agent}
										alt='Real Estate Agent'
										className='rounded-full w-24 h-24 mx-auto'
									/>
								</Box>
							</Grid>
							<Grid item xs={6} sm={4} md={3} lg={2}>
								<Box className='p-4 bg-white rounded shadow mx-5'>
									<Typography variant='body1'>Mortgage Broker</Typography>
									<img
										src={Broker}
										alt='Mortgage Broker'
										className='rounded-full w-24 h-24 mx-auto'
									/>
								</Box>
							</Grid>
							<Grid item xs={6} sm={4} md={3} lg={2}>
								<Box className='p-4 bg-white rounded shadow mx-5'>
									<Typography variant='body1'>Mortgage Broker</Typography>
									<img
										src={Broker}
										alt='Mortgage Broker'
										className='rounded-full w-24 h-24 mx-auto'
									/>
								</Box>
							</Grid>
							<Grid item xs={6} sm={4} md={3} lg={2}>
								<Box className='p-4 bg-white rounded shadow mx-5'>
									<Typography variant='body1'>Mortgage Broker</Typography>
									<img
										src={Broker}
										alt='Mortgage Broker'
										className='rounded-full w-24 h-24 mx-auto'
									/>
								</Box>
							</Grid>
							<Grid item xs={6} sm={4} md={3} lg={2}>
								<Box className='p-4 bg-white rounded shadow mx-5'>
									<Typography variant='body1'>Home Lawyer</Typography>
									<img
										src={Lawyer}
										alt='Lawyer'
										className='rounded-full w-24 h-24 mx-auto'
									/>
								</Box>
							</Grid>
							<Grid item xs={6} sm={4} md={3} lg={2}>
								<Box className='p-4 bg-white rounded shadow mx-5'>
									<Typography variant='body1'>Home Lawyer</Typography>
									<img
										src={Lawyer}
										alt='Lawyer'
										className='rounded-full w-24 h-24 mx-auto'
									/>
								</Box>
							</Grid>
							<Grid item xs={6} sm={4} md={3} lg={2}>
								<Box className='p-4 bg-white rounded shadow mx-5'>
									<Typography variant='body1'>Home Lawyer</Typography>
									<img
										src={Lawyer}
										alt='Lawyer'
										className='rounded-full w-24 h-24 mx-auto'
									/>
								</Box>
							</Grid>
							<Grid item xs={6} sm={4} md={3} lg={2}>
								<Box className='p-4 bg-white rounded shadow mx-5'>
									<Typography variant='body1'>Home Lawyer</Typography>
									<img
										src={Lawyer}
										alt='Lawyer'
										className='rounded-full w-24 h-24 mx-auto'
									/>
								</Box>
							</Grid>
							<Grid item xs={6} sm={4} md={3} lg={2}>
								<Box className='p-4 bg-white rounded shadow mx-5'>
									<Typography variant='body1'>Home Inspector</Typography>
									<img
										src={Inspector}
										alt='Home Inspector'
										className='rounded-full w-24 h-24 mx-auto'
									/>
								</Box>
							</Grid>
							<Grid item xs={6} sm={4} md={3} lg={2}>
								<Box className='p-4 bg-white rounded shadow mx-5'>
									<Typography variant='body1'>Home Inspector</Typography>
									<img
										src={Inspector}
										alt='Home Inspector'
										className='rounded-full w-24 h-24 mx-auto'
									/>
								</Box>
							</Grid>
							<Grid item xs={6} sm={4} md={3} lg={2}>
								<Box className='p-4 bg-white rounded shadow mx-5'>
									<Typography variant='body1'>Home Inspector</Typography>
									<img
										src={Inspector}
										alt='Home Inspector'
										className='rounded-full w-24 h-24 mx-auto'
									/>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
		),
	},
	{
		title: 'Finding the right home',
		content: (
			<Box p={3} className='bg-yellow-500 rounded shadow my-3'>
				<Typography variant='h2' gutterBottom>
					Finding the Right Home
				</Typography>
				<Typography variant='body1' paragraph>
					Finding the perfect home involves several key steps. Here, we provide
					a comprehensive guide to help you through the process, ensuring you
					make an informed decision.
				</Typography>

				<Typography variant='h4' gutterBottom>
					Define Your Needs and Wants
				</Typography>
				<Typography variant='body1' paragraph>
					Start by listing your must-haves and nice-to-haves. Consider factors
					such as location, size, number of bedrooms and bathrooms, school
					districts, and proximity to work and amenities. Having a clear
					understanding of your priorities will help narrow down your search.
				</Typography>

				<Typography variant='h4' gutterBottom>
					Work with a Real Estate Agent
				</Typography>
				<Typography variant='body1' paragraph>
					A knowledgeable real estate agent can provide invaluable assistance in
					your home search. They have access to listings, market insights, and
					negotiation skills that can help you find the right home and get the
					best deal.
				</Typography>
				<Box
					my={4}
					display='flex'
					flexDirection='column'
					alignItems='center'
					gap={4}>
					<img
						src={Agent}
						alt='Real Estate Agent'
						className='rounded'
						style={{ maxWidth: '100%' }}
					/>
					<Typography variant='caption' display='block'>
						Working with a real estate agent can simplify the home-buying
						process.
					</Typography>
				</Box>

				<Typography variant='h4' gutterBottom>
					Explore Different Neighborhoods
				</Typography>
				<Typography variant='body1' paragraph>
					Visit various neighborhoods to get a feel for the community. Consider
					factors such as safety, amenities, public transportation, and future
					development plans. Exploring neighborhoods will help you determine
					where you feel most comfortable.
				</Typography>

				<Typography variant='h4' gutterBottom>
					Attend Open Houses and Tours
				</Typography>
				<Typography variant='body1' paragraph>
					Attending open houses and scheduling tours is a great way to see homes
					in person. Take notes and pictures during your visits to keep track of
					features and potential issues.
				</Typography>

				<Typography variant='h4' gutterBottom>
					Compare Listings
				</Typography>
				<Box
					my={4}
					display='flex'
					flexDirection='column'
					alignItems='center'
					gap={4}>
					<Typography variant='body1' paragraph>
						Use comparison tools to evaluate different properties. Consider
						factors such as price, condition, size, and features. Here’s a quick
						comparison of some popular listings:
					</Typography>
					<BarChart
						series={[
							{ data: [350000, 450000, 500000, 400000] },
							{ data: [4, 3, 5, 4] },
							{ data: [2000, 2500, 3000, 2200] },
						]}
						height={290}
						xAxis={[
							{
								data: ['Listing 1', 'Listing 2', 'Listing 3', 'Listing 4'],
								scaleType: 'band',
							},
						]}
						margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
					/>
					<Typography variant='caption' display='block'>
						Comparison of home listings based on price, bedrooms, and square
						footage.
					</Typography>
				</Box>

				<Typography variant='h4' gutterBottom>
					Evaluate Home Conditions
				</Typography>
				<Typography variant='body1' paragraph>
					Assess the condition of each home you visit. Look for signs of wear
					and tear, structural issues, and potential repairs. Hiring a home
					inspector can provide a detailed evaluation of a property's condition.
				</Typography>

				<Typography variant='h4' gutterBottom>
					Make an Offer
				</Typography>
				<Typography variant='body1' paragraph>
					Once you've found the right home, work with your real estate agent to
					make a competitive offer. Consider factors such as the home's
					condition, market conditions, and your budget.
				</Typography>

				<Typography variant='h4' gutterBottom>
					Close the Deal
				</Typography>
				<Typography variant='body1' paragraph>
					After your offer is accepted, complete the necessary paperwork, secure
					financing, and conduct a final walkthrough. Once everything is in
					order, close the deal and take possession of your new home.
				</Typography>

				<Typography variant='h4' gutterBottom>
					Additional Resources
				</Typography>
				<Typography variant='body1' paragraph>
					Utilize the following resources to assist you in your home-buying
					journey:
				</Typography>
				<Box
					my={4}
					display='flex'
					flexDirection='column'
					alignItems='center'
					gap={4}>
					<Typography variant='body1'>
						<ul>
							<li>
								<Link to='/home-buying-guide'>Home Buying Guide</Link>
							</li>
							<li>
								<Link to='/mortgage-calculator'>Mortgage Calculator</Link>
							</li>
							<li>
								<Link to='/neighborhood-reviews'>Neighborhood Reviews</Link>
							</li>
							<li>
								<Link to='/real-estate-agents'>Find a Real Estate Agent</Link>
							</li>
						</ul>
					</Typography>
				</Box>

				<Typography variant='h4' gutterBottom>
					Final Thoughts
				</Typography>
				<Typography variant='body1' paragraph>
					Finding the right home is a significant step in your life. Take your
					time, do your research, and seek professional advice to ensure you
					make the best decision for you and your family.
				</Typography>
			</Box>
		),
	},
];

const stepHeader = [
	'What can you afford',
	'Down payment and PMI',
	'Find your team',
	'Finding the right home',
	'Working with your lender',
	'Making your offer',
	'Inspecting and Appraising',
	'Closing on your loan',
];

function Homeowners() {
	const [activeStep, setActiveStep] = useState(0);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<div>
			<HeroSection />
			<StepsContainer elevation={3}>
				{stepHeader.map((step, index) => (
					<StepBox
						key={index}
						onClick={() => setActiveStep(index)}
						active={activeStep === index ? 'true' : 'false'}>
						<Typography variant='h6' sx={{ fontSize: '0.75rem' }}>
							STEP {index + 1}
						</Typography>
						<Typography sx={{ fontSize: '0.75rem' }}>{step}</Typography>
						<ChevronIcon className='chevron-icon' />
					</StepBox>
				))}
			</StepsContainer>
			<Container>
				<Box mt={isMobile ? 4 : 8}>{stepContent[activeStep].content}</Box>
			</Container>
			<div className='bubbles'>
				<div className='bubble' style={{ '--i': 1 }}></div>
				<div className='bubble' style={{ '--i': 2 }}></div>
				<div className='bubble' style={{ '--i': 3 }}></div>
				<div className='bubble' style={{ '--i': 4 }}></div>
				<div className='bubble' style={{ '--i': 5 }}></div>
				<div className='bubble' style={{ '--i': 6 }}></div>
				<div className='bubble' style={{ '--i': 7 }}></div>
				<div className='bubble' style={{ '--i': 8 }}></div>
				<div className='bubble' style={{ '--i': 9 }}></div>
				<div className='bubble' style={{ '--i': 10 }}></div>
			</div>
		</div>
	);
}

export default Homeowners;
