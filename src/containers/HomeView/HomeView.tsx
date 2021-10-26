/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { motion } from 'framer-motion';

import { useSections } from '@hooks/useSections/useSections';

import styles from './HomeView.module.scss';

import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Work from './Work/Work';
import About from './About/About';

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 200 },
};

const HomeView = () => {
  const { observeSection } = useSections();

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
      className={styles.Home}
    >
      <Hero ref={observeSection('#home')} />
      <Work ref={observeSection('#work')} />
      <About ref={observeSection('#about')} />
      <Contact ref={observeSection('#contact')} />
    </motion.div>
  );
};

export default HomeView;
