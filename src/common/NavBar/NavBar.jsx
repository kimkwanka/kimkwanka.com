import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => (
  <nav className="navbar">
    <h1 className="logo">
      kim
      <span className="gradient">kwanka</span>
    </h1>
    <ul className="navbar__nav-items">
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
          className="navbar__link button"
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
