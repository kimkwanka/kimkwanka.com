import Image from 'next/image';

import styles from './CaseStudy.module.scss';

const CaseStudy = () => (
  <div className={styles.CaseStudy}>
    <h1 className={styles.CaseStudyTitle}>devGaido</h1>
    {/* <div className={styles.CaseStudyImageContainer}>
      <Image
        className={styles.CaseStudyImage}
        src="/img/devgaido.png"
        alt="devGaido"
        layout="fill"
      />
    </div> */}
    <p className={styles.CaseStudyDescription}>
      devGaido is a platform that tries to streamline the learning experience by
      combining &quot;lessons&quot; (free learning resources) into
      &quot;paths&quot; that follow different learning goals.
    </p>
    <p>
      Lessons and paths can each be bookmarked, progress towards completion is
      tracked and paths tangential to your completed lessons are recommended
      automatically.
    </p>
    <p>
      I was pumped when
      {' '}
      <a href="https://medium.com/@jdmedlock">Jim Medlock</a>
      {' '}
      asked me to join his team to help salvage a project and finally bring it
      to MVP status. Little did I know what hell of a ride was about to begin.
    </p>
    <h2 className={styles.CaseStudySectionTitle}>Tech Stack and Explanation</h2>
    <ul>
      <li>MongoDB</li>
      <li>Express</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
    <ul>
      <li>Redux</li>
      <li>Stylus</li>
      <li>Docker</li>
      <li>NGINX</li>
      <li>Auth0</li>
      <li>Webpack</li>
    </ul>
    <p>
      The tried and true MERN stack and Redux were obvious choices because of
      their ease of use and reliability. Stylus was chosen so we could use the
      much terser indented syntax, but still paste in snippets in regular
      syntax.
    </p>
    <p>
      Even though we had a database, we didn&apos;t want to risk leaking private
      data so we let Auth0 handle authentication and only saved the user id for
      identification.
    </p>
    <p>
      On the Dev Ops side we of course used Docker to orchestrate the server
      deployment. NGINX was utilized here as a reverse proxy to lessen the load
      on the server and allowing it to scale in the future. As the difference in
      performance was negligible for our use case and we couldn&apos;t afford
      the memory required on our VPS we decided against adding Redis.
    </p>
    <div className={styles.CaseStudyLinks}>
      <a
        target="_blank"
        href="https://devgaido.cardinalzero.com"
        rel="noreferrer"
      >
        Live version
      </a>
      <a
        target="_blank"
        href="https://github.com/Chingu-cohorts/devgaido"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
    <h2 className={styles.CaseStudySectionTitle}>Purpose and Goal</h2>
    <p>
      We built devGaido to provide a guided learning experience for people
      wanting to learn web development, especially those using the excellent
      {' '}
      <a href="https://github.com/P1xt/p1xt-guides">P1xt Guides</a>
      .
    </p>
    <p>
      The problem we wanted to address was that the guides by their nature are
      text-only which paired with their flexible curriculum structure made it
      somewhat hard to follow them or track your progress.
    </p>
    <h2 className={styles.CaseStudySectionTitle}>
      Problems and Thought Process
    </h2>
    <h3>Problem No. 1:</h3>
    <h2 className={styles.CaseStudySectionTitle}>Current Status</h2>
    <h2 className={styles.CaseStudySectionTitle}>Lessons Learned</h2>
  </div>
);

export default CaseStudy;
