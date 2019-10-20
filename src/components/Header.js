import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { Navbar, Nav } from "react-bootstrap";

export const Header = ({ startLogout }) => (
  <>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/dashboard">Budget App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/create">Create Expense</Nav.Link>
        <Nav.Link href="/" onClick={startLogout}>
          Logout
        </Nav.Link>
      </Nav>
    </Navbar>
  </>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
