import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="font-sans tracking-wide bg-[#213343] py-10 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-5">
            <li>
              <a href="/our-story" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Our Story</a>
            </li>
            <li>
              <a href="/newsroom" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Newsroom</a>
            </li>
            <li>
              <a href="/careers" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Careers</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Services</h4>
          <ul className="space-y-5">
            <li>
              <a href="/personal-banking" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Personal Banking</a>
            </li>
            <li>
              <a href="/business-banking" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Business Banking</a>
            </li>
            <li>
              <a href="/loan-services" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Loan Services</a>
            </li>
            <li>
              <a href="/investment-services" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Investment Services</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Resources</h4>
          <ul className="space-y-5">
            <li>
              <a href="/faq" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">FAQ</a>
            </li>
            <li>
              <a href="/support" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Customer Support</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Company</h4>
          <ul className="space-y-5">
            <li>
              <a href="/about-us" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">About Us</a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Contact Us</a>
            </li>
            <li>
              <a href="/accessibility" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Accessibility</a>
            </li>
            <li>
              <a href="/learn-more" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Learn More</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
        <p className="text-gray-300 text-[15px]">
          Copyright © 2023
          <a href="https://ubank.com/" target="_blank" rel="noopener noreferrer" className="hover:underline mx-1">UBank</a>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
