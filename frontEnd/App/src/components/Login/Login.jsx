/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import "./Login.css";
import SignUp from "./signup";
import LoginValidation from "./LoginValidation";

import axios from 'axios';

const Login = () => {
    
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    // Use event.target.name to dynamically set the state key
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LoginValidation(values));
    if(errors.email === "" && errors.password === ""){
        axios.post('http://localhost:8080/login',values)
         .then(response => {
            navigate('/');
          })
          .catch(err => console.log(err) )
  
      }
  };

  return (
    <div className="wrapper d-flex justify-content-center align-items-center bg-primary vh-100">
      <span className="border-Line"></span>
      <div className="bg-white form-box p-3 rounded w-35">
        <form className="" onSubmit={handleSubmit}>
          <h1 className="form-title text-light text-center mb-3">
            Connect U-Account
          </h1>
          <div className="form-group">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email address"
                name="email" // Use name attribute to set the state key
                onChange={handleInput}
              />
              {errors.email && <span className="text-danger">{errors.email}</span>}
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password" // Use name attribute to set the state key
                onChange={handleInput}
              />
              {errors.password && <span className="text-danger mt-3">{errors.password}</span>}
              <label htmlFor="password">Password</label>
              <div id="emailHelp" className="form-text text-light">
                We NEVER share your password
              </div>
            </div>
          </div>
          <div className="form-footer justify-content-center align-items-center">
            <button
              type="submit"
              className="btn btn-success w-100 mb-3 mx-auto"
            >
              Login
            </button>
            <p className="mb-3 text-light">
              Don't have an account? That's okay!
            </p>
            {/* Use Link for internal navigation */}
            <Link
              to="/signup"
              className="btn btn-primary w-100 mb-3 mx-auto text-decoration-none"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
