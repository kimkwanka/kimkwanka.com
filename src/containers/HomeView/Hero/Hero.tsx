import { forwardRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { scrollToSection } from '@hooks/useSections/useSections';

import HeroBackground from './HeroBackground/HeroBackground';

import styles from './Hero.module.scss';

const Hero = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={styles.Hero} id="home" ref={ref}>
      <HeroBackground />
      <div className={styles.HeroContainer}>
        <h1 className={styles.HeroTitle}>
          <small>Hi there, my name is</small> <br /> Kim Kwanka
        </h1>
        <p className={styles.HeroText}>
          Berlin-based <strong>Full-Stack Web Developer</strong> that
          specializes in React and
          <span className={`${styles.HeroSpan} gradient`}> loves coffee</span>.
        </p>
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
        <div className={styles.PortraitImageContainer}>
          <Image
            src="/img/retro.svg"
            alt="Kim Kwanka"
            className={styles.PortraitImage}
            layout="fill"
            priority
          />
        </div>
        <Link href="/#work" scroll={false}>
          <a href="#work" onClick={scrollToSection} aria-label="work">
            <h2 className={styles.DownArrow}>
              <span className="icon-arrow-down2" />
            </h2>
          </a>
        </Link>
      </div>
    </section>
  );
});
Hero.displayName = 'About';

export default Hero;
