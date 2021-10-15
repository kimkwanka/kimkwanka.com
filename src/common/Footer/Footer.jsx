import { useState } from 'react';

import Image from 'next/image';

import styles from './Footer.module.scss';

const Footer = () => {
  const [isImprintShown, setIsImprintShown] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsImprintShown(!isImprintShown);
  };

  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <p>
          Created with
          {' '}
          <span className="icon-heart gradient--secondary" />
          {' '}
          and
          powered by
          {' '}
          <span className="icon-coffee gradient" />
          .
        </p>
        <div className={styles.SocialIconContainer}>
          <a
            className={styles.SocialIcon}
            href="https://github.com/kimkwanka"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <span className="h2 icon-github" />
          </a>
          <a
            className={styles.SocialIcon}
            href="https://www.linkedin.com/in/kimkwanka/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin"
          >
            <span className="h2 icon-linkedin2" />
          </a>
          <a
            className={styles.SocialIcon}
            href="https://twitter.com/kimkwanka/"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <span className="h2 icon-twitter" />
          </a>
        </div>
        <a className={styles.ImprintLink} href="#imprint" onClick={handleClick}>
          Imprint / Impressum
        </a>
        <div
          className={
            isImprintShown
              ? styles.ImprintContainer
              : styles.hiddenImprintContainer
          }
          id="imprint"
        >
          <Image
            src="/img/imprint.png"
            alt="Imprint / Impressum"
            className={styles.Imprint}
            layout="fill"
          />
        </div>
        <small className={styles.Copyright}>
          &copy;
          {`${new Date().getFullYear()}`}
          {' '}
          Kim Kwanka
        </small>
      </div>
    </footer>
  );
};

export default Footer;
