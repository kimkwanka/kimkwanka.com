import React from 'react';

import './NavBar.scss';

const scrollToTarget = (e) => {
  e.preventDefault();

  const anchorTarget = document.querySelector(e.currentTarget.hash);
  anchorTarget.scrollIntoView({ behavior: 'smooth' });
};

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar__left-side">
      <a className="logo__link" href="#home" onClick={scrollToTarget}>
        <h1 className="logo">
          kim
          <span className="gradient">kwanka</span>
          .io
        </h1>
      </a>
    </div>
    <div className="navbar__right-side">
      <ul className="navbar__nav-items">
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
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
