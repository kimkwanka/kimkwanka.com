import { forwardRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useSections } from '@hooks/useSections/useSections';

import HeroBackground from './HeroBackground/HeroBackground';

import styles from './Hero.module.scss';

const Hero = forwardRef<HTMLElement>((_, ref) => {
  const { scrollToSection } = useSections();

  return (
    <section className={styles.Hero} id="home" ref={ref}>
      <HeroBackground />
      <div className={styles.HeroContainer}>
        <h1 className={styles.HeroTitle}>
          Hi, I&apos;m Kim:
          <br />
          <span className={`${styles.HeroSpan} gradient`}>Full-Stack</span> Web
          Developer.
        </h1>
        <p className={styles.HeroText}>
          Anyone can learn to code but you can&apos;t teach someone how to enjoy
          what they&apos;re doing.
        </p>
        <Link href="/#work" scroll={false}>
          <a
            href="#work"
            className={`${styles.HeroButton} button`}
            onClick={scrollToSection}
          >
            Check out my work <span className="icon-chevron-thin-right" />
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
          <a href="#work" onClick={scrollToSection}>
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
