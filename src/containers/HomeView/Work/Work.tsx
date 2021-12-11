import { forwardRef } from 'react';

import ProjectCard from './ProjectCard/ProjectCard';

import styles from './Work.module.scss';

const Work = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={styles.Work} id="work" ref={ref}>
      <div className={styles.WorkContainer}>
        <div className={styles.WorkContent}>
          <small className={styles.WorkSubTitle}>Projects & Case Studies</small>
          <h1 className={styles.WorkTitle}>Work</h1>
          <ProjectCard
            title="devGaido"
            href="/devgaido"
            imgSrc="/img/devgaido.png"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVQImQEaAOX/AAACADEzK6Gyuczb4ADLyMTb0878/f3+//+ZFQ/qfgAN+wAAAABJRU5ErkJggg=="
            description="An educational platform created to provide a guided learning experience for (aspiring) web developers"
            stack={[
              'React.js',
              'Redux',
              'MongoDB',
              'Node.js',
              'Express.js',
              'Docker',
              'NGINX',
              'Stylus',
              'Webpack',
            ]}
            links={[
              {
                text: 'Live',
                href: 'https://devgaido.cardinalzero.com',
                icon: 'icon-external-link',
              },
              {
                text: 'Code',
                href: 'https://github.com/Chingu-cohorts/devgaido',
                icon: 'icon-embed2',
              },
            ]}
          />
          <ProjectCard
            title="RESTFlix & GraphFlix"
            href="/flix"
            imgSrc="/img/myflix.png"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImWPoXHxy2dx1ZiK+8gzuDNf//9ewDRRgUFJksAEAjfUI/oWmZgAAAAAASUVORK5CYII="
            description="A movie database app that pits modern Redux and a REST API against Apollo and GraphQL"
            stack={[
              'React.js',
              'Redux',
              'RTK Query',
              'Apollo',
              'GraphQL',
              'REST API',
              'MongoDB',
              'Redis',
              'Node.js',
              'Express.js',
              'Docker',
              'NGINX',
              'TypeScript',
              'SASS',
              'Vite',
            ]}
            links={[
              {
                text: 'Live',
                href: 'https://restflix.netlify.app/',
                icon: 'icon-external-link',
              },
              {
                text: 'Code',
                href: 'https://github.com/kimkwanka/RESTFlix',
                icon: 'icon-embed2',
              },
              {
                text: 'Backend Code',
                href: 'https://github.com/kimkwanka/flix-backend',
                icon: 'icon-embed2',
              },
            ]}
            mirrored
            disabled
          />
          <ProjectCard
            title="Chingu Game Dev"
            href="/gamedev"
            imgSrc="/img/gamedev.png"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVQImWPgY2CIDLL2cFb6//8Pg5WRSnFGpKOy2q8PvwBmAgnOEzRdUwAAAABJRU5ErkJggg=="
            description="A project managment tool for a game development workshop"
            stack={[
              'React.js',
              'Redux',
              'Socket.io',
              'MongoDB',
              'Node.js',
              'Express.js',
              'Heroku',
              'Stylus',
              'Webpack',
            ]}
            links={[
              {
                text: 'Live',
                href: 'https://chingugamedev.herokuapp.com/',
                icon: 'icon-external-link',
              },
              {
                text: 'Code',
                href: 'https://github.com/kimkwanka/chingu-game-dev',
                icon: 'icon-embed2',
              },
            ]}
            disabled
          />
        </div>
      </div>
    </section>
  );
});
Work.displayName = 'Work';

export default Work;
