import { memo } from 'react';
import { motion } from 'framer-motion';

import useScrollSpy from '@src/hooks/useScrollSpy/useScrollSpy';

import NavBar from './NavBar/NavBar';

import styles from './Header.module.scss';

const variants = {
  hidden: { opacity: 0, x: 0, y: -200, backgroundColor: '#000' },
  enter: { opacity: 1, x: 0, y: 0, backgroundColor: 'rgba(0,0,0,0)' },
  exit: { opacity: 0, x: 0, y: -200 },
};

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
      <motion.header
        initial="hidden"
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          backgroundColor:
            isHomeHeader && !scrolledDown ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.9)',
        }}
        exit="exit"
        variants={variants}
        transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
        className={`
        ${isHomeHeader ? styles.HomeHeader : styles.Header} 
        ${scrolledDown && styles.scrolledDown}`}
      >
        <NavBar />
      </motion.header>
    </>
  );
};

export default memo(Header);
