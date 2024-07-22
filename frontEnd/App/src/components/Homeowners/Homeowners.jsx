import React, { useState } from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

import heroImage from '../../img/hero-image.jpg'; // Ensure the path is correct
import Agent from '../../img/agent.jpg'; // Ensure the path is correct
import Broker from '../../img/broker.jpg'; // Ensure the path is correct
import Lawyer from '../../img/lawyer.jpg'; // Ensure the path is correct
import Inspector from '../../img/inspector.jpg'; // Ensure the path is correct
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
  marginBottom: '12rem',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '90%',
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  background: 'linear-gradient(to bottom, #a8c0ff, #3f2b96)',
  boxShadow: theme.shadows[3],
}));

const StepBox = styled(Box)(({ theme, active }) => ({
  flex: '1',
  textAlign: 'center',
  padding: theme.spacing(1),
  cursor: 'pointer',
  position: 'relative',
  borderBottom: active === "true" ? `2px solid ${theme.palette.primary.main}` : 'none',
  '&:not(:last-child)': {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  display: 'block',
  '&:hover': {
    borderRadius: '5px',
    transform: 'scale(1.1)',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(to right, #f0f0f0, #ffff)',
  },
  ...(active === "true" && {
    borderRadius: '5px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(to right, #f0f0f0, #ffff)',
    '& .chevron-icon': {
      display: 'block',
    },
  }),
}));

const ChevronIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  position: 'absolute',
  top: '75px',
  right: '75px',
  display: 'none',
}));

const stepContent = [
  {
    title: "What can you afford",
    content: (
      <div className='p-6 mx-auto flex flex-col justify-center items-center bg-white rounded shadow my-3'>
        
        <Typography variant="h2">Understanding Your Budget</Typography>
        <Box
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid black' }}
      borderRadius={5}
    >
      
        <Typography variant="body1">One of the first steps in the home buying process is to fully understand your finances. It's not as fun as looking at homes, but it's important and necessary to help you determine how much you can afford. Utilize U-Bank's mobile app to track your income and expenses effortlessly. Set up a budget, monitor your spending habits, and get real-time alerts to stay on top of your financial health.</Typography>
    </Box>
    <Box
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid black' }}
      borderRadius={10}
    >
        <Typography variant="body2">Buying a home requires that you get a firm handle on your finances, gathering your supporting documentation, and answering a handful of questions, including:</Typography>
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
        <Typography variant="body3">To get a rough estimate of what you can afford, most lenders suggest you spend no more than 28% of your monthly income—before taxes are taken out—on your mortgage payment, including principal, interest, taxes, and insurance. U-Bank's app can help you calculate this with ease.</Typography>
      </div>
    )
  },
  {
    title: "Down payment and PMI",
    content: (
      <Box p={3} className='bg-white rounded shadow my-3'>
        <Typography variant="h2" gutterBottom>Saving for a Down Payment</Typography>
        <Typography variant="body1">Saving for a down payment is a crucial part of buying a home. Typically, you'll need to save 20% of the home's purchase price to avoid Private Mortgage Insurance (PMI). However, there are options with lower down payment requirements, especially for first-time buyers, though these may require PMI.</Typography>
        <Typography variant="body2" paragraph>With U-Bank, you can set specific savings goals within our mobile app. Track your progress, receive reminders, and get personalized tips to help you reach your goal faster. Explore various loan options that might require lower down payments, and use our comparison tools to find the best fit for your needs.</Typography>
        <Typography variant="body3" paragraph>Remember, a larger down payment reduces your loan amount and monthly payments. Use our mortgage calculators to see how different down payment amounts will affect your mortgage.</Typography>
        <Box
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: '2px solid black' }}
          borderRadius={10}
        >
          <div className='flex flex-col p-4 my-3'>
            <Typography variant="body2" className='my-5'>
              Saving for a down payment requires disciplined budgeting and planning. Utilize U-Bank’s budgeting tools to allocate a portion of your income towards your down payment goal. Our app also offers features to analyze your spending patterns and identify areas where you can cut costs to save more efficiently.
            </Typography>
            <LineChart
              series={[
                { data: [300, 400, 200, 500], label: 'Monthly Savings' },
                { data: [200, 300, 250, 450], label: 'Target Savings' },
              ]}
              height={290}
              xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
        </Box>
        <Box
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: '2px solid black' }}
          borderRadius={10}
        >
          <div className='flex flex-col p-4 my-3'>
            <Typography variant="body2" className='my-5'>
              Explore various investment options that can help grow your savings. U-Bank offers advisory services to guide you through safe and effective investment strategies. Whether it's high-yield savings accounts, bonds, or mutual funds, our experts are here to help you make the best financial decisions.
            </Typography>
            <PieChart
              series={[
                { data: [{ value: 40, label: 'Savings Accounts' }, { value: 30, label: 'Bonds' }, { value: 20, label: 'Mutual Funds' }, { value: 10, label: 'Other Investments' }] }
              ]}
              height={290}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
        </Box>
      </Box>
    )
  },
  {
    title: "Find your team",
    content: (
      <Box p={3} className='bg-white rounded shadow my-3'>
        <Typography variant="h2" gutterBottom>Building Your Home Buying Team</Typography>
        <Typography variant="body1">Building the right team of professionals is essential. This includes a real estate agent, mortgage broker, lawyer, and home inspector. Each plays a vital role in ensuring your home purchase is smooth and legally sound. Take your time to find experienced professionals who understand your needs.</Typography>
        <Typography variant="body2">U-Bank's app offers a network of trusted professionals you can connect with. Read reviews, compare services, and contact them directly from your mobile device. Schedule appointments, manage communications, and keep all your documents organized in one place.</Typography>
        <Typography variant="body3">A good team can make the home buying process less stressful and more efficient. Make sure to interview multiple candidates and choose the ones who best match your style and requirements.</Typography>
        <Box
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: '2px solid black', background: 'linear-gradient(to bottom, #FFDEE9, #B5FFFC)' }}
          borderRadius={10}
        >
          <div className='flex flex-col p-6 my-5'>
            <Typography variant="h2" className='text-center mt-5 mb-9 '>
              Meet Your Team
            </Typography>
            <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap={7}>
              <div className='p-4 bg-white rounded shadow mx-5'>
                <Typography variant="body1">Real Estate Agent</Typography>
                <img src={Agent} alt="Real Estate Agent" className="rounded-full w-24 h-24 mx-auto" />
              </div>
              <div className='p-4 bg-white rounded shadow mx-5'>
                <Typography variant="body1">Mortgage Broker</Typography>
                <img src={Broker} alt="Mortgage Broker" className="rounded-full w-24 h-24 mx-auto" />
              </div>
              <div className='p-4 bg-white rounded shadow mx-5'>
                <Typography variant="body1">Mortgage Broker</Typography>
                <img src={Broker} alt="Mortgage Broker" className="rounded-full w-24 h-24 mx-auto" />
              </div>
              <div className='p-4 bg-white rounded shadow mx-5'>
                <Typography variant="body1">Mortgage Broker</Typography>
                <img src={Broker} alt="Mortgage Broker" className="rounded-full w-24 h-24 mx-auto" />
              </div>
              <div className='p-4 bg-white rounded shadow mx-5'>
                <Typography variant="body1">Mortgage Broker</Typography>
                <img src={Broker} alt="Mortgage Broker" className="rounded-full w-24 h-24 mx-auto" />
              </div>
              <div className='p-4 bg-white rounded shadow mx-5'>
                <Typography variant="body1"> Home Lawyer</Typography>
                <img src={Lawyer} alt="Lawyer" className="rounded-full w-24 h-24 mx-auto" />
              </div>
              <div className='p-4 bg-white rounded shadow mx-5'>
                <Typography variant="body1">Real Estate Agent</Typography>
                <img src={Agent} alt="Real Estate Agent" className="rounded-full w-24 h-24 mx-auto" />
              </div>
              <div className='p-4 bg-white rounded shadow mx-5'>
                <Typography variant="body1">Home Inspector</Typography>
                <img src={Inspector} alt="Home Inspector" className="rounded-full w-24 h-24 mx-auto" />
              </div>
            </Box>
          </div>
        </Box>
      </Box>
    )
  },
  {
    title: "Finding the right home",
    content: (
      
    ),
  }
];

const stepHeader = [
  "What can you afford",
  "Down payment and PMI",
  "Find your team",
  "Finding the right home",
  "Working with your lender",
  "Making your offer",
  "Inspecting and Appraising",
  "Closing on your loan"
];

function Homeowners() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      <HeroSection>
       
      </HeroSection>
      <StepsContainer elevation={3}>
        {stepHeader.map((step, index) => (
          <StepBox
            key={index}
            onClick={() => setActiveStep(index)}
            active={activeStep === index ? "true" : "false"}>
            <Typography variant='h6' sx={{ fontSize: '0.75rem' }}>STEP {index + 1}</Typography>
            <Typography sx={{ fontSize: '0.75rem' }}>{step}</Typography>
            <ChevronIcon className="chevron-icon" />
          </StepBox>
        ))}
      </StepsContainer>
      <Container>
        <Box mt={8}>
          {stepContent[activeStep].content}
        </Box>
      </Container>
    </div>
  );
}

export default Homeowners;
