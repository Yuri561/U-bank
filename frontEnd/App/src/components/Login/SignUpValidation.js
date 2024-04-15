const SignupValidation = (values) => {
    // Initialize error object
    let error = {};
  
    // Define email and password patterns
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  

     // Check username validity
    if (values.name === '') {
         error.name = 'Username is required';

    } else {
        error.name = '';
    }
    // Check email validity
    if (values.email === '') {
      error.email = 'Email is required';
    } else if (!email_pattern.test(values.email)) {
      error.email = 'Invalid email';
    } else {
      error.email = '';
    }
  
    // Check password validity
    if (values.password === '') {
      error.password = 'Password is required';
    } else if (!password_pattern.test(values.password)) {
      error.password = 'Password do not match our records';
    } else {
      error.password = '';
    }
  
    // Return the error object
    return error;
  };
  
  export default SignupValidation;
  