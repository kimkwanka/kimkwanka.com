import Link from 'next/link';

import { scrollToTarget, useScrollSpyContext } from '@hooks/useScrollSpy';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const [currentScrollSection] = useScrollSpyContext();

  return (
    <nav className={styles.NavBar}>
      <div className={styles['NavBar__left-side']}>
        <Link href="/#home">
          <a className={styles.logo__link} href="#home" onClick={scrollToTarget}>
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
              <a className={currentScrollSection === 'work' ? `${styles.NavBar__link} ${styles.active}` : styles.NavBar__link} href="#work" onClick={scrollToTarget}>
                Work
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a className={currentScrollSection === 'about' ? `${styles.NavBar__link} ${styles.active}` : styles.NavBar__link} href="#about" onClick={scrollToTarget}>
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
};
export default NavBar;
