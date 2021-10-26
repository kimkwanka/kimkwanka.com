/* eslint-disable no-restricted-globals */
import { forwardRef, useState, useRef, MouseEvent } from 'react';

import dynamic from 'next/dynamic';

import useScrollSpy from '@hooks/useScrollSpy/useScrollSpy';

import styles from './Contact.module.scss';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'));

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

const Contact = forwardRef<HTMLElement>((_, ref) => {
  const { observe, isInView } = useScrollSpy();

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
    <section className={styles.Contact} id="contact" ref={ref}>
      <div
        className={styles.ContactContainer}
        ref={observe({ id: '#contact-container', unobserveOnEnter: true })}
      >
        <div className={styles.ContactContent}>
          <h1 className={styles.ContactTitle}>Get In Touch</h1>
          <h2 className={styles.ContactSubTitle}>
            Want to build something awesome together or just say hello?
          </h2>
          <h2 className={styles.ContactSubTitle}>Get in touch via:</h2>
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
          <h2 className={styles.ContactSubTitle}>Or drop me a line below - </h2>
          <h2 className={styles.ContactSubTitle}>
            I&apos;d love to hear from you.
          </h2>
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
            {isInView('#contact-container') && (
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
            )}
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
  );
});
Contact.displayName = 'About';

export default Contact;
