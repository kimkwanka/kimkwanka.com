import React from 'react';

import './NavBar.scss';

const NavBar = () => (
  <nav className="navbar">
    <h1 className="logo">
      kim
      <span className="gradient">kwanka</span>
    </h1>
    <ul className="navbar__nav-items">
      <li>
        <a
          className="navbar__link"
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="navbar__link"
          href="#about"
        >
          About
        </a>
        <a
          className="navbar__link"
          href="#work"
        >
          Work
        </a>
        <a
          className="navbar__link button"
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
