import React from 'react';
import './header.css';
import { Container, Navbar, Nav, NavDropdown, Form, Row, Col, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <>
    <section>

      <Navbar bg="dark" variant="dark" className='p-2 h-md-50' expand="lg">
        <Container fluid className='g-3'>
          <Navbar.Brand  href="#home">
            <span className='u_bank'>U</span>-Bank<span className='u_bank'>!</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='p-4'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <div className=''>
              <NavDropdown title="Credit Cards" id="credit-cards-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              </div>
              <div>
              <NavDropdown title="U-Auto" id="u-auto-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              </div>
              <div>
              <NavDropdown title="U-Colab" id="u-colab-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              </div>
              <div>
              <NavDropdown title="Benefits" id="benefits-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              </div>
              <div>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
      <Container fluid className='mt-3'>
        <form class="row row-cols-lg-auto g-4 align-items-center form-header">
          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
            <div class="input-group w-sm-50">
              <div class="input-group-text">@</div>
              <input type="text" class="form-control w-" id="inlineFormInputGroupUsername" placeholder="Username" />
            </div>
          </div>
          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupPassword">Password</label>
            <div class="input-group w-sm-50">
              <div class="input-group-text">@</div>
              <input type="text" class="form-control" id="inlineFormInputGroupPassword" placeholder="Password" />
            </div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
              <label class="form-check-label text-light" for="inlineFormCheck">
                Remember me
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign In</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Header;
