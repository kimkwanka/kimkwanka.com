import Link from 'next/link';

import { useSections } from '@hooks/useSections';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const { scrollToSection, currentSection } = useSections();

  return (
    <nav className={styles.NavBar}>
      <div className={styles['NavBar__left-side']}>
        <Link href="/#home">
          <a className={styles.logo__link} href="#home" onClick={scrollToSection}>
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
              <a className={currentSection === '#work' ? `${styles.NavBar__link} ${styles.active}` : styles.NavBar__link} href="#work" onClick={scrollToSection}>
                Work
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a className={currentSection === '#about' ? `${styles.NavBar__link} ${styles.active}` : styles.NavBar__link} href="#about" onClick={scrollToSection}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a
                className={`${styles.NavBar__LinkButton} button`}
                href="#contact"
                onClick={scrollToSection}
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
