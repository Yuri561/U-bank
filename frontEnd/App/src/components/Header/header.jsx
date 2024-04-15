/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Container, Navbar, Nav } from 'react-bootstrap';

import './Header.css';
import Logo from '../../img/logo.png';

const Header = () => {
  

  return (
    <>
      <section className="header-wrapper text-light">
        <Navbar variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home" className='p-2'>
              <img src={Logo} className='img-fluid mr-2 logo-img' />
              <span className='u_bank'>U</span>-Bank<span className='u_bank'>!</span>
            </Navbar.Brand>
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
                    Signed in as: <a className='lead'>Guest</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Header;
