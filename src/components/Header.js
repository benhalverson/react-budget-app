import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header>
    <h1>Budget app!</h1>
    <nav>
      <ul>
        <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
        <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
        <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header;