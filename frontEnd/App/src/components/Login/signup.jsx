/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'; // Import React
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import './SignUp.css'; // Import SignUp.css if needed
import SignupValidation from './SignUpValidation';
import axios from 'axios';



const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: ""
  });
  console.log(setValues) // to see values 

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    // Use event.target.name to dynamically set the state key
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(SignupValidation(values));
    if(errors.name === "" && errors.password === "" && errors.email === ""){
      axios.post('http://localhost:8080/signup',values)
       .then(response => {
          navigate('/')
        })
        .catch(err => console.log(err) )

    }
  };

  return (
    <div className='wrapper d-flex justify-content-center align-items-center bg-primary vh-100'>
      <span className="border-Line"></span>
      <div className='bg-white form-box p-3 rounded w-35'>
        <form className="" onSubmit={handleSubmit}>

          <h1 className='form-title text-light text-center mb-3'>Sign Up to U-Account</h1>
          <div className="form-group">
            <div className="form-floating mb-3">
              <input type="text" onChange={handleInput} className="form-control" id="username" placeholder="Username" name="name" />
              {errors.name && <span className="text-danger">{errors.name}</span>}
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-floating mb-3">
              <input type="text" onChange={handleInput} className="form-control" id="email" placeholder="Email" name="email" />
              {errors.email && <span className="text-danger">{errors.email}</span>}
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-floating mb-3">
              <input type="password" onChange={handleInput} className="form-control" id="password" placeholder="Password" name="password" />
              {errors.password && <span className="text-danger">{errors.password}</span>}
              <label htmlFor="password">Password</label>
              <div id="emailHelp" className="form-text text-light">We NEVER share your password</div>
            </div>
          </div>
          <div className='form-footer justify-content-center align-items-center'>
              <p className='mb-3 text-light'>Don't have an account? That's okay </p>
            <button type="submit" className="btn btn-success w-100 mb-3 mx-auto">Sign Up</button>
            <p className='mb-3 text-light'>Already have an account?</p>
            {/* Use Link for internal navigation */}
            <Link to='/Login' className="btn btn-primary w-100 mb-3 mx-auto text-decoration-none">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
