import { memo } from 'react';

import useScrollSpy from '@hooks/useScrollSpy/useScrollSpy';

import NavBar from './NavBar/NavBar';

import styles from './Header.module.scss';

const Header = ({ transparentAtTop = false }) => {
  const { observe, isInView } = useScrollSpy();

  return (
    <>
      <div id="header-sentinel" ref={observe('header-sentinel')} />
      <header
        className={
          transparentAtTop
            ? `${styles.transparentAtTopHeader} ${
              !isInView('header-sentinel') && styles.scrolledDown
            }`
            : `${styles.Header} ${
              !isInView('header-sentinel') && styles.scrolledDown
            }`
        }
      >
        <NavBar />
      </header>
    </>
  );
};

export default memo(Header);
