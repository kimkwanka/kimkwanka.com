import { forwardRef, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AnimatePresence, motion, useCycle } from 'framer-motion';

import { scrollToSection } from '@hooks/useSections/useSections';

import HeroBackground from './HeroBackground/HeroBackground';

import styles from './Hero.module.scss';

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      // type: 'spring',
      // bounce: 0.6,
    },
  },
};

const Hero = forwardRef<HTMLElement>((_, ref) => {
  const [heroText, cycleHeroText] = useCycle(
    'loves to solve problems.',
    'drinks too much coffee.',
    'has a knack for UI/UX.',
    'is scared of spiders.',
    'creates awesome things with code.',
    'enjoys baking cakes.',
  );

  useEffect(() => {
    const timeOut = setTimeout(cycleHeroText, 5000);
    return () => clearTimeout(timeOut);
  }, [heroText, cycleHeroText]);

  return (
    <AnimatePresence>
      <section className={styles.Hero} id="home" ref={ref}>
        <HeroBackground />
        <motion.div
          className={styles.HeroContainer}
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className={styles.HeroTitle} variants={itemVariants}>
            <small>Hi there, my name is</small> <br /> Kim Kwanka
          </motion.h1>
          <motion.p className={styles.HeroText} variants={itemVariants}>
            I&apos;m a Berlin-based <strong>Full-Stack Web Developer</strong>{' '}
            that specializes in React and
            <span className={styles.HeroSpanContainer}>
              <AnimatePresence>
                <motion.span
                  className={styles.HeroSpan}
                  key={heroText}
                  initial={{ opacity: 0, y: -20 }}
                  exit={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    type: 'tween',
                    ease: 'anticipate',
                  }}
                >
                  {heroText}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.p>
          <motion.div
            className={styles.HeroButtonContainer}
            variants={itemVariants}
          >
            <Link href="/#work" scroll={false}>
              <a
                href="#work"
                className={`${styles.HeroButton} button`}
                onClick={scrollToSection}
              >
                Check out my{' '}
                <span>
                  work <span className="icon-chevron-thin-right" />
                </span>
              </a>
            </Link>
            <Link href="/files/Kim_Kwanka_Resume.pdf" scroll={false}>
              <a
                href="/files/Kim_Kwanka_Resume.pdf"
                className={`${styles.HeroButtonSecondary}`}
                target="_blank"
                download
              >
                <span>
                  <span className="icon-download" /> Download
                </span>{' '}
                Resume
              </a>
            </Link>
          </motion.div>
          <motion.div
            className={styles.PortraitImageContainer}
            variants={itemVariants}
          >
            <Image
              src="/img/retro.svg"
              alt="Kim Kwanka"
              className={styles.PortraitImage}
              layout="fill"
              priority
            />
          </motion.div>
          <Link href="/#work" scroll={false}>
            <a
              className={styles.DownArrow}
              href="#work"
              onClick={scrollToSection}
              aria-label="work"
            >
              <span className="icon-arrow-down2" />
            </a>
          </Link>
        </motion.div>
      </section>
    </AnimatePresence>
  );
});
Hero.displayName = 'About';

export default Hero;
