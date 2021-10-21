/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useRef } from 'react';
import Image from 'next/image';

import ReCAPTCHA from 'react-google-recaptcha';

import { useSections } from '@hooks/useSections';

import styles from './Home.module.scss';

import ProjectCard from './ProjectCard/ProjectCard';
import HeroBackground from './HeroBackground/HeroBackground';

const unCrypt = (s, shift) => {
  let n = 0;
  let r = '';
  for (let i = 0; i < s.length; i++) {
    n = s.charCodeAt(i);
    if (n >= 8364) {
      n = 128;
    }
    r += String.fromCharCode(n - shift);
  }
  return r;
};

const unCryptMailTo = (s, shift) => {
  if (typeof location !== 'undefined') {
    location.href = unCrypt(s, shift);
  }
};

const HomeView = () => {
  const { observeSection, scrollToSection } = useSections();
  const contactFormRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    recaptchaSuccess: false,
    submitDisabled: true,
  });

  const isSubmitDisabled = !(
    formData.name && formData.email && formData.message && formData.recaptchaSuccess
  );

  const isContactFormValid = () => contactFormRef.current.reportValidity();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isContactFormValid()) {
      try {
        const sendEmailResponse = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const sendEmailResponseData = await sendEmailResponse.json();

        if (sendEmailResponseData.success) {
          setFormData({
            name: '',
            email: '',
            message: '',
            recaptchaSuccess: formData.recaptchaSuccess,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

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
            <h2 className={styles.DownArrow}>
              <span className="icon-arrow-down2" />
            </h2>
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
              Hi, I&apos;m Kim, a curious and tech-loving web developer with a
              background in fiscal economics.
            </p>
            <p>
              When I was only 7, I saw my uncle play NES for the first time when
              suddenly, two thoughts crossed my mind: &quot;How does this work?
              I want to build something like this myself!&quot;
            </p>
            <p>
              Since then, I read PC magazines when I didn’t even own a computer,
              learned to code at 13, created countless small games, apps, and
              websites, and even studied Computer Science.
            </p>
            <p>
              Wanting to support my family financially I gave up my studies
              though and started a &quot;combined vocational training and degree
              program&quot; in fiscal economics instead.
            </p>
            <p>
              While giving financial stability and being fulfilling in its own
              right, working as a tax officer sadly couldn&apos;t quench my
              thirst for knowledge and satisfy my urge to create, so it felt
              natural to transition back into IT.
            </p>
            <p>
              That&apos;s why I started becoming a Full-Stack Developer and got
              my hands dirty in VR and educational software projects and also
              dipped my toes into UI/UX design on the side.
            </p>
            <p>
              I’m always looking for the next opportunity to enrich
              people&apos;s lives by helping turn ideas into reality.
            </p>
            <p>
              When I’m not coding, I’m probably hanging out with my family or
              friends, cuddling with my cute little dog, playing a video game or
              messing around with some geeky gadget.
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
              Email:
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto: kimkwanka"
                onClick={() => unCryptMailTo('thps{vArptr~hurhGnthps5jvt', 7)}
              >
                kimkwanka
              </a>
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
            <form ref={contactFormRef}>
              <label htmlFor="contactFormName">
                Name:
                <span>*</span>
                <input
                  type="text"
                  id="contactFormName"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  required
                />
              </label>
              <label htmlFor="contactFormEmail">
                Email:
                <span>*</span>
                <input
                  type="email"
                  id="contactFormEmail"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  required
                />
              </label>
              <label htmlFor="contactFormMessage">
                Message:
                <span>*</span>
                <textarea
                  id="contactFormMessage"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  required
                />
              </label>
              {/* <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
                onChange={async (response) => {
                  try {
                    const res = await fetch('/api/recaptcha', {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json, text/plain, *',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ response }),
                    });
                    const data = await res.json();
                    setFormData({
                      ...formData,
                      recaptchaSuccess: data.success,
                    });
                  } catch (error) {
                    console.error(error);
                  }
                }}
              /> */}
              <buttonbutton
                className={styles.ContactButton}
                type="button"
                onClick={(e) => handleSubmit(e)}
                disabled={isSubmitDisabled}
              >
                Send Message
              </buttonbutton>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
