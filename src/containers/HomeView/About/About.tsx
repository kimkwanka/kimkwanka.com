import { forwardRef } from 'react';

import Image from 'next/image';

import styles from './About.module.scss';

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={styles.About} id="about" ref={ref}>
      <div className={styles.AboutContainer}>
        <p className={styles.AboutSubTitle}>My Story</p>
        <h1 className={styles.AboutTitle}>About</h1>
        <div className={styles.About2ColumnContainer}>
          <div className={styles.AboutImageContainer}>
            <Image
              src="/img/about.jpg"
              alt="Kim Kwanka"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAM0lEQVQImQEoANf/ALmSgc6jlFpGQQD//OPqsaCTbWIAopmO/+/Rq4x/AAsAD9iumwMACbjwE7MJq4V2AAAAAElFTkSuQmCC"
              className={styles.AboutImage}
              layout="fill"
            />
          </div>
          <div className={styles.AboutRight}>
            <h3 className={styles.AboutTitle2}>
              “Anyone can learn how to code, but you can’t teach someone to
              enjoy what they’re doing.”
            </h3>
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
            <p className={styles.AboutEndText}>
              I&apos;m now on the lookout for the next opportunity to enrich
              people&apos;s lives by turning ideas into reality.*
            </p>
            <small className={styles.AboutSmall}>
              *When I’m not coding, I’m probably hanging out with my family or
              friends, cuddling with my cute little dog, playing a video game or
              messing around with some geeky gadget.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
});
About.displayName = 'About';

export default About;
