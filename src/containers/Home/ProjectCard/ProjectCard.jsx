/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from './ProjectCard.module.scss';

const ProjectCard = ({
  title,
  description,
  href,
  imgSrc,
  blurDataURL,
  mirrored = false,
}) => (
  <Link href={href}>
    <a className={styles.Project} href={href}>
      {!mirrored && (
      <div className={`${styles.ProjectImageContainer} ${styles[title]}`}>
        <Image
          placeholder="blur"
          blurDataURL={blurDataURL}
          className={styles.ProjectImage}
          src={imgSrc}
          alt={title}
          layout="fill"
        />
      </div>
      )}
      <div className={mirrored ? `${styles.ProjectDetailsLeft} ${styles[title]}` : `${styles.ProjectDetails} ${styles[title]}`}>
        <h2 className={styles.ProjectTitle}>{title}</h2>
        <p className={styles.ProjectDescription}>
          {description}
        </p>
        <button type="button" className={styles.ProjectButton}>
          View Case Study
          {' '}
          <span className="icon-chevron-thin-right" />
        </button>
      </div>
      {mirrored && (
      <div className={styles.ProjectImageContainer}>
        <Image
          placeholder="blur"
          blurDataURL={blurDataURL}
          className={styles.ProjectImage}
          src={imgSrc}
          alt={title}
          layout="fill"
        />
      </div>
      )}
    </a>
  </Link>
);

export default React.memo(ProjectCard);
