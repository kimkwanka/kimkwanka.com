import { forwardRef } from 'react';

import Image from 'next/image';

import styles from './About.module.scss';

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={styles.About} id="about" ref={ref}>
      <div className={styles.AboutContainer}>
        <small className={styles.AboutSubTitle}>My Story</small>
        <h1 className={styles.AboutTitle}>About</h1>
        <div className={styles.About2ColumnContainer}>
          <div className={styles.AboutImageContainer}>
            <Image
              src="/img/about.jpg"
              alt="Kim Kwanka"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAMDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAAABgEEAwAAAAAAAAAAAAAAAQIDBBEFBgcVIjFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAwDAQACEQMRAD8Am2udyZbWfQfBYNanoMKSszQ+XZ2K04qqdIqtR189+QAAKwriP//Z"
              className={styles.AboutImage}
              layout="fill"
            />
          </div>
          <div className={styles.AboutRight}>
            <h5 className={styles.AboutTitle2}>
              “Anyone can learn how to code, but you can’t teach someone to
              enjoy what they’re doing.”
            </h5>
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
              Consequently, I became a Full Stack Developer and have since got
              my hands dirty in VR and educational software projects, and also
              dipped my toes into UI/UX design on the side.
            </p>
            <p className={styles.AboutEndText}>
              I&apos;m now on the lookout for the next opportunity to enrich
              people&apos;s lives by turning ideas into reality.*
            </p>
            <small className={styles.AboutSmall}>
              *But sometimes I’m just hanging out with my family or friends,
              cuddling with my cute little dog, playing a video game or messing
              around with some geeky gadget.
            </small>
          </div>
        </div>
        <div className={styles.Testimonials}>
          <small className={styles.TestimonialsSubTitle}>
            Nice Things People Have Said
          </small>
          <h2 className={styles.TestimonialsTitle}>Testimonials</h2>
          <div className={styles.TestimonialsContainer}>
            <div className={styles.TestimonialsCard}>
              <div className={styles.TestimonialsCardUpperContent}>
                <div className={styles.TestimonialsCardImageContainer}>
                  <Image
                    src="/img/medlock.jpg"
                    alt="Jim Medlock"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAgEAABAwQCAwAAAAAAAAAAAAABAAMEAgURIQYSFVFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oADAMBAAIRAxEAPwCYNcxkx7HZG/GWl0iJk1uRyaqsuuHZ7b9fAEREplYVpvT/2Q=="
                    className={styles.TestimonialsCardImage}
                    layout="fill"
                  />
                </div>
                <h4 className={styles.TestimonialsCardName}>
                  Jim
                  <br />
                  Medlock
                </h4>
                <small className={styles.TestimonialsCardSubTitle}>
                  Co-Founder Chingu
                </small>
              </div>
              <p className={styles.TestimonialsCardText}>
                “I had the pleasure of working on a team in which Kim was the
                lead Developer.
              </p>
              <p className={styles.TestimonialsCardText}>
                Her technical skill and dedication to the project made it a very
                rewarding experience.{' '}
              </p>
              <p className={styles.TestimonialsCardText}>
                But, even more importantly was her willingness to share her
                considerable expertise across the team.
              </p>
              <p className={styles.TestimonialsCardText}>
                She brings out not only the best in herself, but also the best
                in others.”
              </p>
            </div>
            <div className={styles.TestimonialsCard}>
              <div className={styles.TestimonialsCardUpperContent}>
                <div className={styles.TestimonialsCardImageContainer}>
                  <Image
                    src="/img/ferreira.jpg"
                    alt="Thiago Ferreira"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAgEAAABQMFAAAAAAAAAAAAAAAAAQIDBAUREgYHIYGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AILu8OrI9Vq6W3oeJzn+FRyO2KzSVukl6AAA/9k="
                    className={styles.TestimonialsCardImage}
                    layout="fill"
                  />
                </div>
                <h4 className={styles.TestimonialsCardName}>
                  Thiago
                  <br />
                  Ferreira
                </h4>
                <small className={styles.TestimonialsCardSubTitle}>
                  Co-Founder Virtual Dawn
                </small>
              </div>
              <p className={styles.TestimonialsCardText}>
                “Efficiency + creativity = Kim!
              </p>
              <p className={styles.TestimonialsCardText}>
                Whether it was creating cool websites, rendering optimization,
                animation or project management - Kim took care of the job with
                precision and fine quality.
              </p>
              <p className={styles.TestimonialsCardText}>
                One of her many notable strengths is her ability to deal with
                several challenging tasks and projects in high-pressure
                situations.
              </p>
              <p className={styles.TestimonialsCardText}>
                She&apos;s always been reliable and on target when it came to
                deadlines.
              </p>
              <p className={styles.TestimonialsCardText}>
                I definitely recommend Kim if you need to get the job done!”
              </p>
            </div>
            <div className={styles.TestimonialsCard}>
              <div className={styles.TestimonialsCardUpperContent}>
                <div className={styles.TestimonialsCardImageContainer}>
                  <Image
                    src="/img/mcallister.jpg"
                    alt="Chance McAllister"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAEAAQUBAAAAAAAAAAAAAAABEQACAwQFBv/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGREBAAIDAAAAAAAAAAAAAAAAAQACEiFB/9oADAMBAAIRAxEAPwCUaXu/S+c1MfN4HWz87SxSGLXALkUbmRm5glpSlIagupOyXs//2Q=="
                    className={styles.TestimonialsCardImage}
                    layout="fill"
                  />
                </div>
                <h4 className={styles.TestimonialsCardName}>
                  Chance
                  <br />
                  McAllister
                </h4>
                <small className={styles.TestimonialsCardSubTitle}>
                  Founder Chingu & Experience Associate @On Deck
                </small>
              </div>
              <p className={styles.TestimonialsCardText}>
                “The combination of kindness, resourcefulness, and a love of
                building is down-right inspiring, and perfectly encapsulates
                what we’re all about.{' '}
              </p>
              <p className={styles.TestimonialsCardText}>
                In short, Kim is the type of person who makes the people around
                her better.{' '}
              </p>
              <p className={styles.TestimonialsCardText}>
                I’ve already learned so much from her, from organizing teams in
                an excel sheet, to creating awesome project docs, to project
                management.{' '}
              </p>
              <p className={styles.TestimonialsCardText}>
                We’re extremely lucky to have a person like Kim in our zoo.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
About.displayName = 'About';

export default About;
