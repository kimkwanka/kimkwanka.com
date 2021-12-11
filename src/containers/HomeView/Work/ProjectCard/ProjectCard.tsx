/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { memo, FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from './ProjectCard.module.scss';

type TProjectCardLink = {
  href: string;
  text: string;
  icon: string;
};
interface IProjectCardProps {
  title: string;
  description: string;
  href: string;
  imgSrc: string;
  blurDataURL: string;
  mirrored?: boolean;
  disabled?: boolean;
  stack: string[];
  links: TProjectCardLink[];
}

const ProjectCard: FC<IProjectCardProps> = ({
  title,
  description,
  href,
  imgSrc,
  blurDataURL,
  mirrored = false,
  disabled = false,
  stack = [],
  links = [],
}) => (
  // TODO: remove eslint-disable jsx-a11y/anchor-is-valid when deleting disabled cards

  <div className={styles.Project}>
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
    <div
      className={
        mirrored
          ? `${styles.ProjectDetailsLeft} ${styles[title]}`
          : `${styles.ProjectDetails} ${styles[title]}`
      }
    >
      <h3 className={styles.ProjectTitle}>{title}</h3>
      <div className={styles.ProjectStack}>
        {stack.map((str) => (
          <small key={title + str} className={styles.ProjectStackItem}>
            {str}
          </small>
        ))}
      </div>
      <p className={styles.ProjectDescription}>{description}</p>
      <div className={styles.ProjectLinkContainer}>
        {links.map(({ href: linkHref, text, icon }) => (
          <a
            className={styles.ProjectLink}
            target="_blank"
            href={linkHref}
            rel="noreferrer"
            key={linkHref}
          >
            <span className={icon} /> {text}
          </a>
        ))}
      </div>
      <div className={styles.ProjectLinkContainer}>
        {!disabled ? (
          <Link href={href} scroll={false}>
            <a className={styles.ProjectButton} href={href}>
              View Case{' '}
              <span>
                Study <span className="icon-chevron-thin-right" />
              </span>
            </a>
          </Link>
        ) : (
          <a className={styles.ProjectButtonDisabled}>Case Study Coming Soon</a>
        )}
      </div>
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
  </div>
);

export default memo(ProjectCard);
