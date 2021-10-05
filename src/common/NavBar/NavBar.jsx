import React from 'react';

import styles from './NavBar.module.scss';

const scrollToTarget = (e) => {
  e.preventDefault();

  const anchorTarget = document.querySelector(e.currentTarget.hash);
  anchorTarget.scrollIntoView({ behavior: 'smooth' });
};

const NavBar = () => (
  <nav className={styles.NavBar}>
    <div className={styles['NavBar__left-side']}>
      <a className={styles.logo__link} href="#home" onClick={scrollToTarget}>
        <h1 className={styles.logo}>
          kim
          <span className="gradient">kwanka</span>
          .io
        </h1>
      </a>
    </div>
    <div className={styles['NavBar__right-side']}>
      <ul className={styles['NavBar__nav-items']}>
        <li>
          <a className={styles.NavBar__link} href="#work" onClick={scrollToTarget}>
            Work
          </a>
        </li>
        <li>
          <a className={styles.NavBar__link} href="#about" onClick={scrollToTarget}>
            About
          </a>
        </li>
        <li>
          <a
            className={`${styles.NavBar__LinkButton} button`}
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
