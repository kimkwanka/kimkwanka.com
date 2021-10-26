import { useState, MouseEvent } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { useSections, scrollToSection } from '@hooks/useSections/useSections';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const { currentSection } = useSections();
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  return (
    <nav className={styles.NavBar}>
      <div
        className={
          isHamburgerMenuOpen
            ? styles.HamburgerMenu
            : styles.hiddenHamburgerMenu
        }
      >
        <ul className={styles.HamburgerNavItems}>
          <li>
            <Link href="/#work" scroll={false}>
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
            <Link href="/#about" scroll={false}>
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
            <Link href="/#contact" scroll={false}>
              <a
                className={
                  currentSection === '#contact'
                    ? styles.activeNavBarLink
                    : styles.NavBarLink
                }
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
        <Link href="/#home" scroll={false}>
          <a className={styles.LogoLink} href="#home" onClick={scrollToSection}>
            <div className={styles.LogoImageContainer}>
              <Image
                src="/img/logo16.svg"
                alt="Kim Kwanka logo"
                className={styles.LogoImage}
                layout="fill"
                priority
              />
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.NavBarRightSide}>
        <button
          className={
            isHamburgerMenuOpen
              ? styles.openHamburgerButton
              : styles.HamburgerButton
          }
          type="button"
          onClick={handleClick}
        >
          <span className={styles.HamburgerSpan} />
          <span className={styles.HamburgerSpan} />
          <span className={styles.HamburgerSpan} />
        </button>
        <ul className={styles.NavBarNavItems}>
          <li>
            <Link href="/#work" scroll={false}>
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
            <Link href="/#about" scroll={false}>
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
            <Link href="/#contact" scroll={false}>
              <a
                className={
                  currentSection === '#contact'
                    ? styles.activeNavBarLink
                    : styles.NavBarLink
                }
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
