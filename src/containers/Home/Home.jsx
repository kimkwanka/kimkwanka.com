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
      <section className={styles.hero} id="home" ref={observeSection('#home')}>
        <HeroBackground />
        <div className={styles.hero__container}>
          <h1 className={styles.hero__title}>
            Hi, I&apos;m Kim:
            <br />
            <span className={`${styles.hero__span} gradient`}>
              Full-Stack
            </span>
            {' '}
            Web Developer.
          </h1>
          <p className={styles.hero__text}>
            Anyone can learn to code but you can&apos;t teach someone how to
            enjoy what they&apos;re doing.
          </p>
          <a
            href="#work"
            className={`${styles.hero__button} button`}
            onClick={scrollToSection}
          >
            Check out my work
            {' '}
            <span className="icon-chevron-thin-right" />
          </a>
          <div className={styles.PortraitImageContainer}>
            <Image
              src="/img/retro.svg"
              alt="Kim Kwanka"
              className={styles.PortraitImage}
              layout="fill"
              priority
            />
          </div>
          <a href="#work" onClick={scrollToSection}>
            <h2 className={styles.DownArrow}>🡣</h2>
          </a>
        </div>
      </section>
      <section className={styles.work} id="work" ref={observeSection('#work')}>
        <div className={styles.work__container}>
          <div className={styles.work__content}>
            <h1 className={styles.work__title}>Work</h1>
            <ProjectCard
              title="devGaido"
              href="/devgaido"
              imgSrc="/img/devgaido.png"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVQImQEaAOX/AAAcIAAEAJSjqmuBiwCdra/Uxb7+//+UoKZ4fwy/eXMlXgAAAABJRU5ErkJggg=="
              description=" A platform created to provide a guided learning
            experience for (aspiring) web developers"
            />
            <ProjectCard
              title="myFlix"
              href="/myflix"
              imgSrc="/img/myflix.png"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVQImQEaAOX/AAAcIAAEAJSjqmuBiwCdra/Uxb7+//+UoKZ4fwy/eXMlXgAAAABJRU5ErkJggg=="
              description="A movie database frontend app with a custom backend"
              mirrored
            />
            <ProjectCard
              title="Pokédex"
              href="/pokedex"
              imgSrc="/img/pokedex.png"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVQImQEaAOX/AAAcIAAEAJSjqmuBiwCdra/Uxb7+//+UoKZ4fwy/eXMlXgAAAABJRU5ErkJggg=="
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

          <h1 className={styles.about__title}>About Me</h1>
          <div className={styles.PortraitImageContainer}>
            <Image
              src="/img/portrait_round.png"
              alt="Kim Kwanka"
              className={styles.PortraitImage}
              layout="fill"
              priority
            />
          </div>
          <div className={styles.about__content}>
            <p>
              Hi, I'm Kim, a curious and tech-loving web developer with a
              background in fiscal economics.
            </p>
            <p>
              When I was only 7, I saw my uncle
              play NES for the first time when suddenly, two thoughts crossed my
              mind: "How does this work? I want to build something like this
              myself!"
            </p>
            <p>
              Since then, I read PC magazines when I didn’t even own a
              computer, learned to code at 13, created countless small games,
              apps, and websites, and even studied Computer Science.
            </p>
            <p>
              Wanting to
              support my family financially I gave up my studies though and
              started a "combined vocational training and degree program" in
              fiscal economics instead.
            </p>
            <p>
              While giving financial stability and
              being fulfilling in its own right, working as a tax officer sadly
              couldn't quench my thirst for knowledge and satisfy my urge to
              create, so it felt natural to transition back into IT.
            </p>
            <p>
              That's why
              I started becoming a Full-Stack Developer and got my hands dirty
              in VR and educational software projects and also dipped my toes
              into UI/UX design on the side.
            </p>
            <p>
              I’m always looking for the next
              opportunity to enrich people's lives by helping turn ideas into
              reality.
            </p>
            <p>
              When I’m not coding, I’m probably hanging out with my
              family or friends, cuddling with my cute little dog, playing a
              video game or messing around with some geeky gadget.
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
