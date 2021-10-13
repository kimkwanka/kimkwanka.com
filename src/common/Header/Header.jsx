import { memo } from 'react';

import useScrollSpy from '@hooks/useScrollSpy';

import NavBar from './NavBar/NavBar';

import styles from './Header.module.scss';

const Header = ({ doesChangeOnScroll = false }) => {
  const { observe, isInView } = useScrollSpy();

  return (
    <>
      {doesChangeOnScroll && (
      <div
        id="header-sentinel"
        ref={observe('header-sentinel')}
      />
      )}
      <header
        className={doesChangeOnScroll && isInView('header-sentinel') ? styles.Header : `${styles.Header} ${styles.solid}`}
      >
        <NavBar />
      </header>
    </>
  );
};

export default memo(Header);
