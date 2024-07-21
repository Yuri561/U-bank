import React, { useEffect } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const FullWidthContainer = styled(Container)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
  maxWidth: 'xl',
}));

const OverlayText = styled(Typography)(({ theme }) => ({
  fontSize: '3em',
  textAlign: 'center',
  color: '#333',
  marginBottom: theme.spacing(5),
}));

const MarqueeSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  overflow: 'hidden',
  height: '40px',
  background: '#333',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
}));

const MarqueeText = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  animation: 'scroll 10s linear infinite',
  padding: theme.spacing(1),
}));

function Cards() {
  useEffect(() => {
    const sections = document.querySelectorAll('.card-section');

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <FullWidthContainer maxWidth='xl'>
      <OverlayText variant="h1">Welcome to U-Bank</OverlayText>
      <Box className='cards-content'>
        <CardSection className='card-section'>
          <Typography variant="h2">Discover the Best Deals</Typography>
          <Typography>
            Explore a variety of exclusive deals tailored just for you. Whether you're shopping for essentials or luxury items, our curated selections ensure you get the best value for your money. Start saving today with our top picks!
          </Typography>
          <Typography>
            At U-Bank, we believe in providing our users with the most lucrative deals available in the market. Our partnerships with top retailers and service providers allow you to enjoy discounts and cashbacks like never before. Don't miss out on the opportunity to save big on every purchase.
          </Typography>
          <Typography>
            From groceries to gadgets, our deals cover a wide range of categories to meet all your needs. Be sure to check back often as we continuously update our deals to bring you the latest and greatest offers.
          </Typography>
          <Grid container spacing={2} className='cards-grid'>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Deal 1</Typography>
                  <Typography>Get 20% off on all electronics. Limited time offer!</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Deal 2</Typography>
                  <Typography>Buy one, get one free on select fashion items.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Deal 3</Typography>
                  <Typography>Save 15% on your first grocery order.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Deal 4</Typography>
                  <Typography>Exclusive 30% off on home appliances.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Deal 5</Typography>
                  <Typography>Special 25% discount on all beauty products.</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardSection>
        <CardSection className='card-section'>
          <Typography variant="h2">Exclusive Offers Just for You</Typography>
          <Typography>
            Enjoy a range of exclusive offers designed to help you save more. From everyday discounts to special promotions, our cards give you access to unique benefits. Don't miss out on these limited-time opportunities.
          </Typography>
          <Typography>
            As a valued U-Bank customer, you gain access to offers that are not available to the general public. These exclusive deals are handpicked to provide you with the best value. Our goal is to ensure that every transaction you make with U-Bank is rewarding and beneficial.
          </Typography>
          <Typography>
            Sign up for our newsletter to receive notifications about upcoming offers and promotions directly in your inbox. Stay informed and take advantage of the best deals as soon as they are available.
          </Typography>
          <Grid container spacing={2} className='cards-grid'>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Offer 1</Typography>
                  <Typography>Exclusive 5% cashback on all dining transactions.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Offer 2</Typography>
                  <Typography>Special 10% discount on travel bookings.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Offer 3</Typography>
                  <Typography>Members-only early access to sales and events.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Offer 4</Typography>
                  <Typography>15% off on your first online purchase.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Offer 5</Typography>
                  <Typography>Exclusive savings on holiday packages.</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardSection>
        <CardSection className='card-section'>
          <Typography variant="h2">Maximize Your Savings</Typography>
          <Typography>
            Take advantage of our comprehensive savings programs. Our cards provide you with numerous ways to maximize your savings on every purchase. Learn more about how you can make the most out of your shopping experience.
          </Typography>
          <Typography>
            With U-Bank, saving money is easy and convenient. Our cashback program rewards you for your everyday purchases, putting money back into your account. Additionally, our savings tips and tools help you manage your finances more effectively.
          </Typography>
          <Typography>
            Our app features a smart savings calculator that shows you how much you can save over time with our deals and offers. Start planning your financial future today with U-Bank's savings solutions.
          </Typography>
          <Grid container spacing={2} className='cards-grid'>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Savings Tip 1</Typography>
                  <Typography>Use your U-Bank card for all purchases to earn maximum rewards.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Savings Tip 2</Typography>
                  <Typography>Automate your savings to grow your wealth effortlessly.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Savings Tip 3</Typography>
                  <Typography>Track your spending with our app to stay within budget.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Savings Tip 4</Typography>
                  <Typography>Set savings goals and monitor your progress regularly.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Savings Tip 5</Typography>
                  <Typography>Take advantage of our periodic double cashback promotions.</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardSection>
        <CardSection className='card-section'>
          <Typography variant="h2">Unlock Premium Rewards</Typography>
          <Typography>
            With our premium rewards program, you can unlock a world of benefits. Earn points on every purchase and redeem them for exciting rewards. Elevate your shopping experience and get more out of every transaction.
          </Typography>
          <Typography>
            Our rewards program is designed to thank you for your loyalty. Earn points every time you use your U-Bank card, and redeem these points for a variety of rewards, including gift cards, travel vouchers, and exclusive experiences.
          </Typography>
          <Typography>
            Track your points easily within the U-Bank app and explore the catalog of rewards available. The more you use your card, the more you earn. Start collecting points today and enjoy the benefits of being a U-Bank customer.
          </Typography>
          <Grid container spacing={2} className='cards-grid'>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Reward 1</Typography>
                  <Typography>Redeem points for gift cards from top retailers.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Reward 2</Typography>
                  <Typography>Earn travel vouchers for your next vacation.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Reward 3</Typography>
                  <Typography>Exclusive access to VIP events and experiences.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Reward 4</Typography>
                  <Typography>Redeem points for cashback on your account.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Reward 5</Typography>
                  <Typography>Get discounts on your next car rental.</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardSection>
        <CardSection className='card-section'>
          <Typography variant="h2">Your Gateway to Discounts</Typography>
          <Typography>
            Welcome to your ultimate gateway to amazing discounts. Our cards offer unbeatable deals across a wide range of categories. Shop smarter, save bigger, and enjoy more with our exclusive discount offers.
          </Typography>
          <Typography>
            At U-Bank, we aim to provide you with the best discounts to help you save money on your purchases. Our network of partners ensures that you receive discounts on a wide range of products and services.
          </Typography>
          <Typography>
            Join the U-Bank community today and start enjoying the financial benefits and convenience that come with our card. Whether you are a frequent shopper or someone looking to save on occasional purchases, U-Bank has something for everyone.
          </Typography>
          <Grid container spacing={2} className='cards-grid'>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Discount 1</Typography>
                  <Typography>Unbeatable deals on home appliances.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Discount 2</Typography>
                  <Typography>Save on beauty and personal care products.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Discount 3</Typography>
                  <Typography>Exclusive discounts on fitness and wellness products.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Discount 4</Typography>
                  <Typography>Special offers on books and educational materials.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Discount 5</Typography>
                  <Typography>Big savings on electronics and gadgets.</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardSection>
        <MarqueeSection>
          <MarqueeText>Welcome to U-Bank - Your one-stop solution for savings, rewards, and exclusive offers! | Discover the Best Deals | Exclusive Offers Just for You | Maximize Your Savings | Unlock Premium Rewards | Your Gateway to Discounts</MarqueeText>
        </MarqueeSection>
      </Box>
    </FullWidthContainer>
  );
}

export default Cards;
