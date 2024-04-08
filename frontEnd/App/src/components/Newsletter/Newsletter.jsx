import React from 'react';
import './Newsletter.css';

import { FaEnvelope } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section className='bg-primary p-5 newsletter-container'>
      <div className='container my-auto p-5'>
        <div className='row d-flex align-items-center justify-content-space-between'>
          <div className='col-md-6'>
            <FaEnvelope className='icon-news'/>
            <h3 className='display-4 text-white'><span className='left-text'>Sign</span> Up For U-Letter</h3>
          </div>
          <div className='col-md-6'>
            <div className="d-flex gap-3 align-items-center">
              <input type='text' className='form-control w-50' placeholder='Enter Email'/>
              <button className='btn btn-dark'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;