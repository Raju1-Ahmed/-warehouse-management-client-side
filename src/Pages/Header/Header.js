import { signOut } from 'firebase/auth';
import React from 'react';
import navlogo from '../../image/menu-logo/menuIcon.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <Navbar className="bg bdr" collapseOnSelect expand="lg" sticky='top' variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img height={50} src={navlogo} alt="" />
        </Navbar.Brand>
        <Nav.Link as={Link} to="/">ClothingWarehouse</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto bg">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="blog">Add</Nav.Link>
            {
              user && <>
                <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                <Nav.Link as={Link} to="order">Orders</Nav.Link>
              </>
            }
            {
              user ?
                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                :
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;