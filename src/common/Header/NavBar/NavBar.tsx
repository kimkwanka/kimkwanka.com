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
          <li
            className={
              currentSection === '#work'
                ? styles.activeListItem
                : styles.ListItem
            }
          >
            <Link href="/#work" scroll={false}>
              <a
                className={styles.NavBarLink}
                href="#work"
                onClick={scrollToSection}
              >
                Work
              </a>
            </Link>
          </li>
          <li
            className={
              currentSection === '#about'
                ? styles.activeListItem
                : styles.ListItem
            }
          >
            <Link href="/#about" scroll={false}>
              <a
                className={styles.NavBarLink}
                href="#about"
                onClick={scrollToSection}
              >
                About
              </a>
            </Link>
          </li>
          <li
            className={
              currentSection === '#contact'
                ? styles.activeListItem
                : styles.ListItem
            }
          >
            <Link href="/#contact" scroll={false}>
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
        <Link href="/#home" scroll={false}>
          <a className={styles.LogoLink} href="#home" onClick={scrollToSection}>
            <div className={styles.LogoImageContainer}>
              <Image
                src="/img/logo.svg"
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
          aria-label="menu button"
          onClick={handleClick}
        >
          <span className={styles.HamburgerSpan} />
          <span className={styles.HamburgerSpan} />
          <span className={styles.HamburgerSpan} />
        </button>
        <ul className={styles.NavBarNavItems}>
          <li
            className={
              currentSection === '#work'
                ? styles.activeListItem
                : styles.ListItem
            }
          >
            <Link href="/#work" scroll={false}>
              <a
                className={styles.NavBarLink}
                href="#work"
                onClick={scrollToSection}
              >
                Work
              </a>
            </Link>
          </li>
          <li
            className={
              currentSection === '#about'
                ? styles.activeListItem
                : styles.ListItem
            }
          >
            <Link href="/#about" scroll={false}>
              <a
                className={styles.NavBarLink}
                href="#about"
                onClick={scrollToSection}
              >
                About
              </a>
            </Link>
          </li>
          <li
            className={
              currentSection === '#contact'
                ? styles.activeListItem
                : styles.ListItem
            }
          >
            <Link href="/#contact" scroll={false}>
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
    </nav>
  );
};

export default NavBar;
