import React from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';

import { startLogout } from '../actions/auth';

const Header = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(startLogout());
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='/dashboard'>Budget App</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
          <Nav.Link href='/create'>Create Expense</Nav.Link>
          <Nav.Link href='/' onClick={logout}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
