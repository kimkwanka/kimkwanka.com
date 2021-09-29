import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => (
  <nav className="navbar">
    <h1 className="logo">
      <span className="gradient">kimkwanka</span>
    </h1>
    <ul>
      <li>
        <NavLink
          className="navbar__link"
          activeClassName="navbar__link--active"
          to="/"
          exact
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navbar__link"
          activeClassName="navbar__link--active"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="navbar__link"
          activeClassName="navbar__link--active"
          to="/work"
        >
          Work
        </NavLink>
        <NavLink
          className="navbar__link"
          activeClassName="navbar__link--active"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
