import { forwardRef } from 'react';

import ProjectCard from './ProjectCard/ProjectCard';

import styles from './Work.module.scss';

const Work = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={styles.Work} id="work" ref={ref}>
      <div className={styles.WorkContainer}>
        <div className={styles.WorkContent}>
          <h1 className={styles.WorkTitle}>Work</h1>
          <ProjectCard
            title="devGaido"
            href="/devgaido"
            imgSrc="/img/devgaido.png"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVQImQEaAOX/AAAcIAAEAJSjqmuBiwCdra/Uxb7+//+UoKZ4fwy/eXMlXgAAAABJRU5ErkJggg=="
            description=" A platform created to provide a guided learning
        experience for (aspiring) web developers"
          />
          <ProjectCard
            title="myFlix"
            href="/myflix"
            imgSrc="/img/myflix.png"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVQImQEaAOX/AAAcIAAEAJSjqmuBiwCdra/Uxb7+//+UoKZ4fwy/eXMlXgAAAABJRU5ErkJggg=="
            description="A movie database frontend app with a custom backend"
            mirrored
          />
          <ProjectCard
            title="Pokédex"
            href="/pokedex"
            imgSrc="/img/pokedex.png"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVQImQEaAOX/AAAcIAAEAJSjqmuBiwCdra/Uxb7+//+UoKZ4fwy/eXMlXgAAAABJRU5ErkJggg=="
            description="An app that allows you to learn more about Pokémon"
          />
        </div>
      </div>
    </section>
  );
});
Work.displayName = 'Work';

export default Work;
