import { forwardRef, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AnimatePresence, motion, useCycle } from 'framer-motion';

import { scrollToSection } from '@hooks/useSections/useSections';

import HeroBackground from './HeroBackground/HeroBackground';

import styles from './Hero.module.scss';

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
    <section className={styles.Hero} id="home" ref={ref}>
      <HeroBackground />
      <div className={styles.HeroContainer}>
        <h1 className={styles.HeroTitle}>
          <small>Hi there, my name is</small> <br /> Kim Kwanka
        </h1>
        <p className={styles.HeroText}>
          I&apos;m a Berlin-based <strong>Full Stack Developer</strong> that
          specializes in React and
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
        </p>
        <div className={styles.HeroButtonContainer}>
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
        </div>
        <div className={styles.PortraitImageContainer}>
          <Image
            unoptimized
            src="/img/retro.svg"
            alt="Kim Kwanka"
            layout="fill"
            priority
          />
        </div>
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
      </div>
    </section>
  );
});
Hero.displayName = 'About';

export default Hero;
