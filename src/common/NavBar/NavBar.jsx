import React from 'react';
import Link from 'next/link';

import styles from './NavBar.module.scss';

const scrollToTarget = (e) => {
  if (window.location.pathname !== '/') {
    return;
  }
  e.preventDefault();

  const anchorTarget = document.querySelector(e.currentTarget.hash);
  anchorTarget.scrollIntoView({ behavior: 'smooth' });
};

const NavBar = () => (
  <nav className={styles.NavBar}>
    <div className={styles['NavBar__left-side']}>
      <Link href="/#home">
        <a className={styles.logo__link} href="#work" onClick={scrollToTarget}>
          <h1 className={styles.logo}>
            kim
            <span className="gradient--secondary">kwanka</span>
            .io
          </h1>
        </a>
      </Link>
    </div>
    <div className={styles['NavBar__right-side']}>
      <ul className={styles['NavBar__nav-items']}>
        <li>
          <Link href="/#work">
            <a className={styles.NavBar__link} href="#work" onClick={scrollToTarget}>
              Work
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a className={styles.NavBar__link} href="#about" onClick={scrollToTarget}>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a
              className={`${styles.NavBar__LinkButton} button`}
              href="#contact"
              onClick={scrollToTarget}
            >
              Contact Me
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
