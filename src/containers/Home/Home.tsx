/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';

import ReCAPTCHA from 'react-google-recaptcha';

import { useSections } from '@hooks/useSections/useSections';

import styles from './Home.module.scss';

import ProjectCard from './ProjectCard/ProjectCard';
import HeroBackground from './HeroBackground/HeroBackground';

const unCrypt = (s: string, shift: number) => {
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

const unCryptMailTo = (s: string, shift: number) => {
  if (typeof location !== 'undefined') {
    location.href = unCrypt(s, shift);
  }
};

const HomeView = () => {
  const { observeSection, scrollToSection } = useSections();
  const contactFormRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    recaptchaSuccess: false,
  });

  const isSubmitDisabled = !(
    formData.name &&
    formData.email &&
    formData.message &&
    formData.recaptchaSuccess
  );

  const isContactFormValid = () => contactFormRef?.current?.reportValidity();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
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
    <div className={styles.Home}>
      <section className={styles.Hero} id="home" ref={observeSection('#home')}>
        <HeroBackground />
        <div className={styles.HeroContainer}>
          <h1 className={styles.HeroTitle}>
            Hi, I&apos;m Kim:
            <br />
            <span className={`${styles.HeroSpan} gradient`}>
              Full-Stack
            </span>{' '}
            Web Developer.
          </h1>
          <p className={styles.HeroText}>
            Anyone can learn to code but you can&apos;t teach someone how to
            enjoy what they&apos;re doing.
          </p>
          <a
            href="#work"
            className={`${styles.HeroButton} button`}
            onClick={scrollToSection}
          >
            Check out my work <span className="icon-chevron-thin-right" />
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
      <section className={styles.Work} id="work" ref={observeSection('#work')}>
        <div className={styles.WorkContainer}>
          <div className={styles.WorkContent}>
            <h1 className={styles.WorkTitle}>Work</h1>
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
        className={styles.About}
        id="about"
        ref={observeSection('#about')}
      >
        <div className={styles.AboutContainer}>
          <h1 className={styles.AboutTitle}>About Me</h1>
          <div className={styles.AboutLeft}>
            <h4 className={styles.AboutSubtitle}>
              Hi, I&apos;m an an ex-nurse, ex CS-student, ex-tax officer turned
              web developer.*
            </h4>
            <div className={styles.AboutImageContainer}>
              <Image
                src="/img/portrait_round.png"
                alt="Kim Kwanka"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAM0lEQVQImQEoANf/ALmSgc6jlFpGQQD//OPqsaCTbWIAopmO/+/Rq4x/AAsAD9iumwMACbjwE7MJq4V2AAAAAElFTkSuQmCC"
                className={styles.AboutImage}
                layout="fill"
              />
            </div>
          </div>
          <div className={styles.AboutRight}>
            <small className={styles.AboutSmall}>
              *When I’m not coding, I’m probably hanging out with my family or
              friends, cuddling with my cute little dog, playing a video game or
              messing around with some geeky gadget.
            </small>
            <p>
              Ever since I saw my uncle play NES when I was 7, I wanted to
              understand how things work and create them myself.
            </p>
            <p>
              That&apos;s why I read PC magazines when I didn’t even own a
              computer, learned to code at 13, created countless small games,
              apps, and websites, and of course, studied Computer Science.
            </p>
            <p>
              To support my family, I gave up my studies though and started a
              career in fiscal economics instead - but neither this nor working
              as a nurse could quench my thirst for knowledge or satisfy my urge
              to create, so it felt natural to transition back into IT.
            </p>
            <p>
              Consequently, I became a Full-Stack Developer and have since got
              my hands dirty in VR and educational software projects, and also
              dipped my toes into UI/UX design on the side.
            </p>
          </div>
          <h5 className={styles.AboutEndText}>
            <strong>
              I&apos;m now on the lookout for the next opportunity to enrich
              people&apos;s lives by turning ideas into reality.
            </strong>
          </h5>
        </div>
      </section>
      <section
        className={styles.Contact}
        id="contact"
        ref={observeSection('#contact')}
      >
        <div className={styles.ContactContainer}>
          <div className={styles.ContactContent}>
            <h1 className={styles.ContactTitle}>Get In Touch</h1>
            <h5 className={styles.ContactSubTitle}>
              Want to build something awesome together or just say hello?
            </h5>
            <h5 className={styles.ContactSubTitle}>Get in touch via:</h5>
            <div className={styles.SocialIconContainer}>
              <a
                className={styles.SocialIcon}
                href="mailto: kimkwanka"
                target="_blank"
                rel="noreferrer"
                onClick={() => unCryptMailTo('thps{vArptr~hurhGnthps5jvt', 7)}
                aria-label="Email"
              >
                <span className="h1 icon-mail2" />
              </a>
              <a
                className={styles.SocialIcon}
                href="https://www.linkedin.com/in/kimkwanka/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                <span className="h1 icon-linkedin2" />
              </a>
              <a
                className={styles.SocialIcon}
                href="https://twitter.com/kimkwanka/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <span className="h1 icon-twitter" />
              </a>
            </div>
            <h5>Or drop me a line below - </h5>
            <h5>I&apos;d love to hear from you.</h5>
            <form className={styles.ContactForm} ref={contactFormRef}>
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
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY || ''}
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
              />
              <div className={styles.ContactButtonContainer}>
                <button
                  className={styles.ContactButton}
                  type="button"
                  onClick={(e) => handleSubmit(e)}
                  disabled={isSubmitDisabled}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
