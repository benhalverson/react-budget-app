import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
const Header = () => (
  <header>
    <h1>Budget app!</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Login</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);