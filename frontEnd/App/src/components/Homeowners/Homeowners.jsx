import React, { useState } from 'react';
import { Container, Box, Typography, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import heroImage from '../../img/hero-image.jpg'; // Ensure the path is correct
import './Homeowners.css';

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
	left: '50%',
	transform: 'translateX(-50%)',
	width: '90%',
	padding: theme.spacing(2),
	display: 'flex',
	justifyContent: 'space-between',
	background: 'linear-gradient(to bottom, #a8c0ff, #3f2b96)',
	overflowX: 'auto',
	whiteSpace: 'nowrap',
}));

const StepBox = styled(Box)(({ theme, active }) => ({
	flex: '1 0 auto',
	textAlign: 'center',
	padding: theme.spacing(1),
	cursor: 'pointer',
	position: 'relative', // Add this line to position the icon
	borderBottom: active ? `2px solid ${theme.palette.primary.main}` : 'none',
	'&:not(:last-child)': {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
	'&:hover': {
		borderRadius: '5px',
		transform: 'scale(1.1)',
		boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
		background: 'linear-gradient(to right, #f0f0f0, #ffff)',
		'& .chevron-icon': {
			// Add this to show the icon on hover
			display: 'block',
		},
	},
}));

const ChevronIcon = styled(ExpandMoreIcon)(({ theme }) => ({
	position: 'absolute',
	bottom: '5px',
	right: '5px',
	display: 'none', // Initially hide the icon
}));

const stepContent = [
  {
    title: "What can you afford",
    content: (
      <div className='p-6 mx-auto flex flex-col justify-center items-center'>
        <Typography variant="body1">What can you afford content goes here.</Typography>
      </div>
    )
  },
  {
    title: "Down payment and PMI",
    content: (
      <div className='p-6 mx-auto flex flex-col justify-center items-center'>
        <Typography variant="body1">Content for down payments and PMI goes here.</Typography>
      </div>
    )
  },
  {
    title: "Find your team",
    content: (
      <div className='p-6 mx-auto flex flex-col justify-center items-center'>
        <Typography variant="body1">Content for finding your team goes here.</Typography>
      </div>
    )
  },
  {
    title: "Finding the right home",
    content: (
      <div className='p-6 mx-auto flex flex-col justify-center items-center'>
        <Typography variant="body1">Content for finding the right home goes here.</Typography>
      </div>
    )
  },
  {
    title: "Working with your lender",
    content: (
      <div className='p-6 mx-auto flex flex-col justify-center items-center'>
        <Typography variant="body1">Content for working with your lender goes here.</Typography>
      </div>
    )
  },
  {
    title: "Making your offer",
    content: (
      <div className='p-6 mx-auto flex flex-col justify-center items-center'>
        <Typography variant="body1">Content for making your offer goes here.</Typography>
      </div>
    )
  },
  {
    title: "Inspecting and Appraising",
    content: (
      <div className='p-6 mx-auto flex flex-col justify-center items-center'>
        <Typography variant="body1">Content for inspecting and appraising goes here.</Typography>
      </div>
    )
  },
  {
    title: "Closing on your loan",
    content: (
      <div className='p-6 mx-auto flex flex-col justify-center items-center'>
        <Typography variant="body1">Content for closing your loan goes here.</Typography>
      </div>
    )
  }
];

const stepHeader =[
  "What can you afford.",
  "Down payment and PMI.",
  "Find your team.",
  "Finding the right home",
  "Working with your lender.",
  "Making your offer.",
  "Inspecting and Appraising.",
  "Closing on your loan."

]

function Homeowners() {
  const [activeStep, setActiveStep] = useState(0);

  return (
		<div>
			<HeroSection>
		
			</HeroSection>
			<StepsContainer elevation={3} className='mb-[20rem]'>
				{stepHeader.map((step, index) => (
					<StepBox
						key={index}
						onClick={() => setActiveStep(index)}
						active={activeStep === index}>
						<Typography variant='h6'>STEP {index + 1}</Typography>
						<Typography>{step}</Typography>
					</StepBox>
				))}
			</StepsContainer>
			<Box mt={25} className='card-content '>
				<CardSection className='card-section visible h-screen'>
					<Typography variant='h2'>{stepContent[activeStep].content}</Typography>
				</CardSection>
			</Box>
		</div>
	);
}

export default Homeowners;
