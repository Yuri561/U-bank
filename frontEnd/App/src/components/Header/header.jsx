/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Container, Form, InputGroup, Button, Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import Logo from '../../img/logo.png'



const Header = () => {
   const [IsLoginIn, SetIsLogIn] = useState(false);
   const [username, SetUsername] = useState('');

   const HandleClick = () => {
    //   // changing the value to true
    const username = document.getElementById('inlineFormInputGroupUsername');
    setUserName(username);
    SetIsLogIn(true);
   }

  return (
    <>
      <section className="header-wrapper text-light">
        <Navbar bg="body-dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home" className='p-2'>
            <img src={Logo} className='img-fluid mr-2 logo-img' />

             <span className='u_bank'>U</span>-Bank<span className='u_bank'>!</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">U-auto</Nav.Link>
            <Nav.Link href="#pricing">Credit Cards</Nav.Link>
            <Nav.Link href="#pricing">Benefits</Nav.Link>
            <Nav.Link href="#pricing">U-Connect</Nav.Link>
            </Nav>
              <Navbar.Text>
                Signed in as: <a className='lead'>{IsLoginIn ? userName : 'Guest'}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <Container fluid className='mt-3'>
        <Form method='POST' className="row row-cols-lg-auto g-4 align-items-center form-header" action='https://script.google.com/macros/s/AKfycbxqAdu97HTkVnqSxrAY4mwVZ5Cz6sSDGBBs_cJ6GtTqervEBTwJRDsbxJ3xaAjhMKGC/exec'>
          <div className="col-12">
            <Form.Label htmlFor="inlineFormInputGroupUsername" className="visually-hidden">
              Username
            </Form.Label>
            <InputGroup type ='text' className="w-sm-50">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control type="text" id="inlineFormInputGroupUsername" placeholder="Username" />
            </InputGroup>
          </div>
          <div className="col-12">
            <Form.Label htmlFor="inlineFormInputGroupPassword" className="visually-hidden">
              Password
            </Form.Label>
            <InputGroup type='text' className="w-sm-50">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control type="password" id="inlineFormInputGroupPassword" placeholder="Password" />
            </InputGroup>
          </div>
          <div className="col-12">
            <Form.Check type="checkbox" id="inlineFormCheck" label="Remember Me" className="form-check-input text-light" />
          </div>
          <div className="col-12">
            <Button type="submit" className="btn btn-primary">Sign In</Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Header;
