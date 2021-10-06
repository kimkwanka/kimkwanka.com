/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import Image from 'next/image';

import styles from './ProjectCard.module.scss';

const ProjectCard = ({
  title,
  description,
  href,
  imgSrc,
  mirrored = false,
}) => (
  <a className={styles.Project} href={href}>
    {!mirrored && (
    <div className={styles.ProjectImageContainer}>
      <Image
        className={styles.ProjectImage}
        src={imgSrc}
        alt={title}
        layout="fill"
      />
    </div>
    )}
    <div className={mirrored ? styles.ProjectDetailsLeft : styles.ProjectDetails}>
      <h2 className={styles.ProjectTitle}>{title}</h2>
      <p className={styles.ProjectDescription}>
        {description}
      </p>
      <button type="button" className={styles.ProjectButton}>
        View Case Study
      </button>
    </div>
    {mirrored && (
    <div className={styles.ProjectImageContainer}>
      <Image
        className={styles.ProjectImage}
        src={imgSrc}
        alt={title}
        layout="fill"
      />
    </div>
    )}
  </a>
);

export default React.memo(ProjectCard);
