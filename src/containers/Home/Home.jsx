/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from 'next/image';

import { useSections } from '@hooks/useSections';

import styles from './Home.module.scss';

import ProjectCard from './ProjectCard/ProjectCard';
import HeroBackground from './HeroBackground/HeroBackground';

const HomeView = () => {
  const { observeSection, scrollToSection } = useSections();

  return (
    <div className={styles['home-view']}>
      <section
        className={styles.hero}
        id="home"
        ref={observeSection('#home')}
      >
        <HeroBackground />
        <div className={styles.hero__container}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>
              Hi, I&apos;m Kim,
              <span className={`${styles.hero__span} gradient`}>
                Full-Stack
              </span>
              Web Developer.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              sagittis viverra dolor nulla integer rhoncus, et mollis adipiscing.
            </p>
            <a
              href="#work"
              className="button"
              onClick={scrollToSection}
            >
              Check out my work
              {' '}
              <span className="icon-chevron-thin-right" />
            </a>
          </div>
          <div className={styles.PortraitImageContainer}>
            <Image src="/img/portrait_round.png" alt="Kim Kwanka" className={styles.PortraitImage} layout="fill" />
          </div>
          <a
            href="#work"
            onClick={scrollToSection}
          >
            <h2 className={styles.DownArrow}>🡣</h2>
          </a>
        </div>
      </section>
      <section
        className={styles.work}
        id="work"
        ref={observeSection('#work')}
      >
        <div className={styles.work__container}>
          <div className={styles.work__content}>
            <h1 className={styles.work__title}>Work</h1>
            <ProjectCard
              title="devGaido"
              href="/devgaido"
              imgSrc="/img/devgaido.png"
              description=" A platform created to provide a guided learning
            experience for (aspiring) web developers"
            />
            <ProjectCard
              title="myFlix"
              href="/myflix"
              imgSrc="/img/myflix.png"
              description="A movie database frontend"
              mirrored
            />
            <ProjectCard
              title="Pokédex"
              href="/pokedex"
              imgSrc="/img/pokedex.png"
              description="An app that allows you to learn more about Pokémon"
            />
          </div>
        </div>
      </section>
      <section
        className={styles.about}
        id="about"
        ref={observeSection('#about')}
      >
        <div className={styles.about__container}>
          <div className={styles.about__content}>
            <h1 className={styles.about__title}>About Me</h1>
            <p className={styles.about__text}>
              I&apos;m a former executive officer of tax authorities and nurse who
              took the plunge into the world of
              {' '}
              <span className="gradient">web development</span>
              .
            </p>
            <p className={styles.about__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              sagittis viverra dolor nulla integer rhoncus, et mollis adipiscing.
            </p>
          </div>
        </div>
      </section>
      <section
        className={styles.contact}
        id="contact"
        ref={observeSection('#contact')}
      >
        <div className={styles.contact__container}>
          <div className={styles.contact__content}>
            <h1 className={styles.contact__title}>Contact</h1>
            <p>Feel free to reach out to me via:</p>
            <div className={styles.contact__info}>
              Github:
              {' '}
              <a
                target="_blank"
                href="https://github.com/kimkwanka/"
                rel="noreferrer"
              >
                kimkwanka
              </a>
              <br />
              Medium:
              {' '}
              <a
                target="_blank"
                href="https://medium.com/@kimkwanka"
                rel="noreferrer"
              >
                kimkwanka
              </a>
              <br />
              Twitter:
              {' '}
              <a
                target="_blank"
                href="https://www.twitter.com/kimkwanka/"
                rel="noreferrer"
              >
                @kimkwanka
              </a>
              <br />
              LinkedIn:
              {' '}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kimkwanka/"
                rel="noreferrer"
              >
                kimkwanka
              </a>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
