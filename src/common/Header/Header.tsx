import { memo } from 'react';

import useScrollSpy from '@src/hooks/useScrollSpy/useScrollSpy';

import NavBar from './NavBar/NavBar';

import styles from './Header.module.scss';

const Header = ({ isHomeHeader = false }) => {
  const { observe, isInView } = useScrollSpy();

  // On first render, isInView() returns undefined
  const scrolledDown = !(
    isInView('header-sentinel') ||
    typeof isInView('header-sentinel') === 'undefined'
  );

  return (
    <>
      <div
        id="header-sentinel"
        className={styles.HeaderSentinel}
        ref={observe('header-sentinel')}
      />
      <header
        className={`
        ${isHomeHeader ? styles.HomeHeader : styles.Header} 
        ${scrolledDown && styles.scrolledDown}`}
      >
        <NavBar />
      </header>
    </>
  );
};

export default memo(Header);
