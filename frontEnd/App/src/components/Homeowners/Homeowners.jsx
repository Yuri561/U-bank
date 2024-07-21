import React, { useState } from 'react';
import { Container, Box, Typography, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import heroImage from '../../img/hero-image.jpg'; // Ensure the path is correct
import './Homeowners.css';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '400px',
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
  backgroundColor: '#fff',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
}));

const StepBox = styled(Box)(({ theme }) => ({
  flex: '1 0 auto',
  textAlign: 'center',
  padding: theme.spacing(1),
  cursor: 'pointer',
  '&:not(:last-child)': {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const stepContent = [
  "Content for what can you afford goes here.",
  "Content for down payments and PMI goes here.",
  "Content for finding your team goes here.",
  "Content for finding the right home goes here.",
  "Content for working with your lender goes here.",
  "Content for making your offer goes here.",
  "Content for inspecting and appraising goes here.",
  "Content for closing your loan goes here."
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
        {stepContent.map((step, index) => (
          <StepBox key={index} onClick={() => setActiveStep(index)}>
            <Typography variant="h6">STEP {index + 1}</Typography>
            <Typography>{step.split(' ')}</Typography>
          </StepBox>
        ))}
      </StepsContainer>
      <Box mt={25} className='card-content'>
        <CardSection className='card-section visible'>
          <Typography variant="h2">{stepContent[activeStep]}</Typography>
        </CardSection>
      </Box>
    </div>
  );
}

export default Homeowners;
