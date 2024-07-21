/* eslint-disable react/no-unknown-property */
import React from "react";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Boxes.css';
import cBanner from '../../img/withdrawl.jpg';

const reviews = [
  {
    text: "UBank has transformed my financial life. The virtual services are top-notch and super convenient.",
    author: "Alex J."
  },
  {
    text: "I love the instant cashbacks! It feels great to be rewarded for every transaction.",
    author: "Sarah P."
  },
  {
    text: "No maintenance fees and flexible auto loans. UBank is the best!",
    author: "Michael T."
  },
  {
    text: "The mobile app is user-friendly and makes banking so easy.",
    author: "Jessica K."
  },
  {
    text: "UBank's customer service is responsive and helpful.",
    author: "David R."
  },
  {
    text: "I appreciate the high-interest rates on savings accounts.",
    author: "Megan L."
  },
  {
    text: "The financial advice and tools provided are incredibly useful.",
    author: "Chris P."
  },
  {
    text: "UBank's investment options have helped me grow my portfolio.",
    author: "Samantha T."
  },
  {
    text: "I love the seamless integration with other financial apps.",
    author: "George H."
  },
  {
    text: "The real-time transaction alerts are very reassuring.",
    author: "Emma W."
  }
];

const faqs = [
  {
    question: "How do I open an account with UBank?",
    answer: "Opening an account with UBank is simple and straightforward. Download our mobile app from the App Store or Google Play, fill in the required details, and submit your application. Your account will be verified and activated within minutes."
  },
  {
    question: "What types of accounts does UBank offer?",
    answer: "UBank offers a variety of accounts including savings accounts, checking accounts, and fixed deposits. Each account type comes with unique benefits tailored to meet your financial needs."
  },
  {
    question: "Is my money safe with UBank?",
    answer: "Absolutely. UBank uses state-of-the-art encryption and security protocols to ensure that your money and personal information are safe. We are also FDIC insured, which means your deposits are protected up to $250,000."
  },
  {
    question: "How can I contact UBank customer support?",
    answer: "You can reach UBank customer support via the in-app chat feature, by calling our toll-free number, or by emailing support@ubank.com. Our support team is available 24/7 to assist you with any inquiries."
  },
  {
    question: "Are there any fees associated with UBank accounts?",
    answer: "UBank prides itself on offering no-fee banking for most of our services. There are no monthly maintenance fees for our accounts, and most transactions are free. Check our fee schedule on the app for details on specific services."
  },
  {
    question: "How do I apply for a loan with UBank?",
    answer: "You can apply for a loan directly through the UBank mobile app. Simply select the type of loan you are interested in, fill out the necessary information, and submit your application. Our team will review your application and get back to you promptly."
  },
  {
    question: "Can I manage my investments through UBank?",
    answer: "Yes, UBank offers a comprehensive investment platform that allows you to manage your investments directly through the mobile app. You can view your portfolio, make trades, and access financial advice from our experts."
  },
  {
    question: "Does UBank offer financial planning services?",
    answer: "UBank provides a range of financial planning services to help you achieve your financial goals. Our financial advisors are available to assist with retirement planning, wealth management, and more."
  },
  {
    question: "What are the benefits of UBank's business accounts?",
    answer: "UBank's business accounts offer numerous benefits including no maintenance fees, high transaction limits, and access to business loans and lines of credit. Our mobile app also provides tools to manage payroll and expenses efficiently."
  },
  {
    question: "How can I improve my credit score with UBank?",
    answer: "UBank offers various tools and resources to help you improve your credit score. Our app provides tips on managing credit, alerts for potential issues, and personalized advice to boost your creditworthiness."
  }
];

const Boxes = () => {
  return (
    <section className="p-5 boxes-container relative bg-purple-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble w-32 h-32 bg-blue-300 absolute bottom-10 left-10 rounded-full"></div>
        <div className="bubble w-24 h-24 bg-purple-300 absolute top-20 right-20 rounded-full"></div>
        <div className="bubble w-16 h-16 bg-pink-300 absolute top-1/3 left-1/3 rounded-full"></div>
        <div className="bubble w-16 h-16 bg-pink-300 absolute bottom-1/3 left-1/3 rounded-full"></div>
        <div className="bubble w-16 h-16 bg-pink-300 absolute top-2/3 left-1/3 rounded-full"></div>
        <div className="bubble w-20 h-20 bg-green-300 absolute top-1/4 right-1/4 rounded-full"></div>
        <div className="bubble w-28 h-28 bg-yellow-300 absolute bottom-1/4 right-1/4 rounded-full"></div>
        <div className="bubble w-24 h-24 bg-orange-300 absolute top-1/2 left-1/2 rounded-full"></div>
        <div className="bubble w-32 h-32 bg-red-300 absolute bottom-1/5 right-1/5 rounded-full"></div>
      </div>
      <div className="relative z-10 container mx-auto">
        <div className="text-center my-4 bg-white py-7 rounded border-t border-b">
          <h2 className='font-large font-bold text-4xl'>Answers To All Your Questions</h2>
        </div>
        <motion.div
          className="relative w-full h-64 mb-8 p-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={cBanner} alt="Banner" className="w-full h-full object-cover rounded-lg shadow-lg" />
          
        </motion.div>

        <div className="mt-8 max-w-6xl mx-auto container bg-[#f2f8f6] rounded-md divide-y font-[sans-serif] shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.slice(0, 5).map((faq, index) => (
            <div key={index} role="accordion">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`w-full sm:text-lg text-base font-bold text-left p-6 text-gray-800 flex items-center ${open ? 'bg-gray-200' : ''}`}>
                      <span className="mr-6 text-3xl text-gray-400 font-extrabold max-sm:hidden">{index + 1}</span>
                      <span className="mr-4">{faq.question}</span>
                      <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} className="w-4 fill-current ml-auto shrink-0" />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-6 px-6">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
          {faqs.slice(5).map((faq, index) => (
            <div key={index + 5} role="accordion">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`w-full sm:text-lg text-base font-bold text-left p-6 text-gray-800 flex items-center ${open ? 'bg-gray-200' : ''}`}>
                      <span className="mr-6 text-3xl text-gray-400 font-extrabold max-sm:hidden">{index + 6}</span>
                      <span className="mr-4">{faq.question}</span>
                      <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} className="w-4 fill-current ml-auto shrink-0" />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-6 px-6">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-center text-light mb-4 text-4xl">What Our Users Are Saying</h3>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee space-x-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0 w-80">
                  <p className="review-text text-black">{`"${review.text}"`}</p>
                  <small>- {review.author}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
