/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/signup";
import Cards from "./components/Cards/Cards";
import Homeowners from "./components/Homeowners/Homeowners";
import Auto from "./components/Auto/Auto";
import InsurancesAndBenefits from "./components/Insurance&benefits/InsurancesAndBenefits";
import Cashbacks from "./components/Cashbacks/Cashbacks";
import Blog from "./components/Blog/Blog";
import Account from "./components/Account/Account";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          
          {/* All routes that require the header and footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="cards" element={<Cards />} />
            <Route path="homeowners" element={<Homeowners />} />
            <Route path="auto" element={<Auto />} />
            <Route path="insurances-benefits" element={<InsurancesAndBenefits />} />
            <Route path="cashbacks" element={<Cashbacks />} />
            <Route path="blog" element={<Blog />} />
            <Route path="account" element={<Account />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
