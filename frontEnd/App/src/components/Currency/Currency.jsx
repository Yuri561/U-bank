/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Image, Accordion } from 'react-bootstrap';
import { FaBitcoin, FaMoneyBill, FaCreditCard, FaUniversity, FaHome, FaCar } from 'react-icons/fa'; // Importing React Icons
import cBanner from '../../img/cBanner.jpeg';
import './Currency.css';

const Currency = () => {
  return (
    <section className='p-5 currency-container'>
      <div className='container'>
        <div className='row align-items-center justify-content-space-between'>
          <div className='col-md p-5 text-light'>
            <div className="d-flex align-items-center mb-4">
              <FaBitcoin className="me-2" size={24} />
              <h1 className='text-center mt-5 mb-4'><span className='left-text'>Redefine</span> the Way u-Coin</h1>
            </div>
            <p className='lead'>
              u-Coin is a cryptocurrency that is used to create a platform that allows users to earn and spend u-coins.
              Users can earn u-coins by sending u-coins to other users.
              Users can spend u-coins by sending u-coins from other users.
            </p>
            <Accordion className='text-light' flush>
              <Accordion.Item eventKey="0" className='mb-5'>
                <Accordion.Header>
                  <FaMoneyBill className="me-2" size={30} />
                  Instant Cash Backs
                </Accordion.Header>
                <Accordion.Body>
                  Experience the benefits of banking with U-Bank!
                  Get rewarded with instant cashbacks on every transaction. 
                  As a valued customer, enjoy an exclusive 10% cashback on all your purchases, 
                  whether it's shopping, dining, or paying bills. With U-Bank, your money works harder for you, 
                  providing unbeatable rewards every step of the way.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='mb-5'>
                <Accordion.Header>
                  <FaCreditCard className="me-2" size={30} />
                  Insane Deposits
                </Accordion.Header>
                <Accordion.Body>
                  With U-Bank's revolutionary deposit system, you can enjoy unparalleled flexibility and benefits.
                  Deposit your funds with confidence and watch your savings grow with competitive interest rates.
                  Whether you're saving for a rainy day or planning for your future, U-Bank's deposit solutions
                  ensure that your money works harder for you. Say goodbye to mediocre returns and hello to
                  a brighter financial future with U-Bank's insane deposit options.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <FaCreditCard className="me-2" size={30} />
                  Better Rates
                </Accordion.Header>
                <Accordion.Body>
                Experience the benefits of banking with U-Bank's better rates!
                With our competitive interest rates, your savings will grow faster.
                Whether you're saving for a rainy day or planning for your future,
                U-Bank's deposit solutions ensure that your money works harder for you.
                Say goodbye to mediocre returns and hello to a brighter financial future
                with U-Bank's incredible deposit options and better rates.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md d-md-block">
          <div className="d-flex align-items-center mb-4 text-light">
          <FaBitcoin className="me-2" size={24} />
          <h1 className='text-center mt-5 mb-4'><span className='left-text'>Bank</span> the Way u-Bank</h1>
        </div>
            <div className="icons-container">
              <FaBitcoin className="me-2" size={30} />
              <FaMoneyBill className="me-2" size={30} />
              <FaHome className="me-2" size={30} />
              <FaCreditCard className="me-2" size={30} />
              <FaUniversity className="me-2" size={30} />
              <FaCar className="me-2" size={30} />
            </div>
            <Image src={cBanner} className='fluid img-banner' />
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Currency;
