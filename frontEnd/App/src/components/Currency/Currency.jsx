/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Row, Col, Card, Image, Accordion } from 'react-bootstrap';
import cBanner from '../../img/cBanner.jpeg';
import './Currency.css';


const Currency = () => {
  return (
    <Container className='p-5' fluid>
      <Row md>
        <Col md={6} className='text-light'>
          <h1 className='text-center mt-5 mb-4'>Redefine the Way u-Coin</h1>
        <Accordion className='text-light'>
        <Accordion.Item eventKey="0" className='mb-5'>
          <Accordion.Header>Instant Cash Backs</Accordion.Header>
          <Accordion.Body>
          Experience the benefits of banking with U-Bank!
          Get rewarded with instant cashbacks on every transaction. 
          As a valued customer, enjoy an exclusive 10% cashback on all your purchases, 
          whether it's shopping, dining, or paying bills. With U-Bank, your money works harder for you, 
          providing unbeatable rewards every step of the way.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
    </Accordion>
        </Col>
        <Col md={6}>
          <div className="text-end">
            <Card border='dark'>
              <Image src={cBanner} className='w-100' />
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Currency;
