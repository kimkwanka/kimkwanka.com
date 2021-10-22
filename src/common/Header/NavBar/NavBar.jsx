import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { useSections } from '@hooks/useSections';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const { scrollToSection, currentSection } = useSections();
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  return (
    <nav className={styles.NavBar}>
      <div className={isHamburgerMenuOpen ? styles.HamburgerMenu : styles.hiddenHamburgerMenu}>
        <ul className={styles.HamburgerNavItems}>
          <li>
            <Link href="/#work">
              <a
                className={
                    currentSection === '#work'
                      ? styles.activeNavBarLink
                      : styles.NavBarLink
                  }
                href="#work"
                onClick={scrollToSection}
              >
                Work
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a
                className={
                    currentSection === '#about'
                      ? styles.activeNavBarLink
                      : styles.NavBarLink
                  }
                href="#about"
                onClick={scrollToSection}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a
                className={styles.NavBarLink}
                href="#contact"
                onClick={scrollToSection}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.NavBarLeftSide}>
        <Link href="/#home">
          <a className={styles.LogoLink} href="#home" onClick={scrollToSection}>
            <div className={styles.LogoImageContainer}>
              <Image
                src="/img/logo15.svg"
                alt="Kim Kwanka logo"
                className={styles.LogoImage}
                layout="fill"
                priority
              />
            </div>
            {/* <h4 className={styles.Logo}>
              <span className="gradient--secondary">kwanka</span>
            </h4> */}
          </a>
        </Link>
      </div>
      <div className={styles.NavBarRightSide}>
        <button
          className={isHamburgerMenuOpen ? styles.openHamburgerButton : styles.HamburgerButton}
          type="button"
          onClick={handleClick}
        >
          <span className={styles.HamburgerSpan} />
          <span className={styles.HamburgerSpan} />
          <span className={styles.HamburgerSpan} />
        </button>
        <ul className={styles.NavBarNavItems}>
          <li>
            <Link href="/#work">
              <a
                className={
                  currentSection === '#work'
                    ? styles.activeNavBarLink
                    : styles.NavBarLink
                }
                href="#work"
                onClick={scrollToSection}
              >
                Work
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a
                className={
                  currentSection === '#about'
                    ? styles.activeNavBarLink
                    : styles.NavBarLink
                }
                href="#about"
                onClick={scrollToSection}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a
                className={`${styles.NavBarLinkButton} button clear--secondary`}
                href="#contact"
                onClick={scrollToSection}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
