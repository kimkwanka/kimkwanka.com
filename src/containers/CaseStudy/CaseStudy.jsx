import React from 'react';
import Image from 'next/image';

import styles from './CaseStudy.module.scss';

const CaseStudy = () => (
  <div className={styles.CaseStudy}>
    <h1 className={styles.CaseStudyTitle}>devGaido</h1>
    <h2 className={styles.CaseStudySubtitle}>Guided Learning Platform</h2>
    <div className={styles.CaseStudyImageContainer}>
      <Image
        className={styles.CaseStudyImage}
        src="/img/devgaido.png"
        alt="devGaido"
        layout="fill"
      />
    </div>
    <p className={styles.CaseStudyDescription}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla
      inventore animi quidem qui vitae iste nemo quas, porro expedita eius odit,
      laboriosam pariatur reprehenderit corporis nisi quaerat velit itaque.
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
    <h1 className={styles.CaseStudyTitle}>Purpose and Goal</h1>
    <h1 className={styles.CaseStudyTitle}>Spotlight</h1>
    <h1 className={styles.CaseStudyTitle}>Problems and Thought Process</h1>
    <h1 className={styles.CaseStudyTitle}>Current Status</h1>
    <h1 className={styles.CaseStudyTitle}>Lessons Learned</h1>
  </div>
);

export default CaseStudy;
