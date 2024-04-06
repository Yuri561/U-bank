import React from 'react';
import './hero.css';
import { Container, Row, Col, Image} from 'react-bootstrap';
import logo1 from '../../img/logo1.jpg';

const Hero = () => {
  return (
    <Container fluid className='p-5 container-img text-center'>
      <Row className="align-items-center">
        <Col xs={12} className="position-relative">
          <Image src={logo1} className='img' fluid />
          <div className="text-hero position-absolute top-50 start-50 translate-middle">
            <h1>Step into the Future</h1>
            <h2>of Mobile Banking</h2>
            <button className='btn btn-primary'>Connect to U-Account</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
