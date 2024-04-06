import React from 'react';
import './hero.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import logo1 from '../../img/logo1.jpg';

const Hero = () => {
  return (
    <Container fluid className='p-4 container-img'>
      <Row className="align-items-center">
        <Col xs={12} className="text-center align-items-center">
          <Image src={logo1} className='img' fluid />
          <div className="text-hero">
            <h1>Step into the Future</h1>
            <h2>of Mobile Banking</h2>
                <Button className='btn btn-outline btn-primary'>Connect to U-Account</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
