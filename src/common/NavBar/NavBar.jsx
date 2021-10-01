import React from 'react';

import './NavBar.scss';

const scrollToTarget = (e) => {
  e.preventDefault();
  const anchorTarget = document.querySelector(e.target.hash);
  anchorTarget.scrollIntoView({ behavior: 'smooth' });
};

const NavBar = () => (
  <nav className="navbar">
    <h1 className="logo">
      kim
      <span className="gradient">kwanka</span>
      .io
    </h1>
    <ul className="navbar__nav-items">
      <li>
        <a className="navbar__link" href="#home" onClick={scrollToTarget}>
          Home
        </a>
      </li>
      <li>
        <a className="navbar__link" href="#work" onClick={scrollToTarget}>
          Work
        </a>
      </li>
      <li>
        <a className="navbar__link" href="#about" onClick={scrollToTarget}>
          About
        </a>
      </li>
      <li>
        <a
          className="navbar__link button"
          href="#contact"
          onClick={scrollToTarget}
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
