import Image from 'next/image';

import { motion } from 'framer-motion';

import styles from './CaseStudyView.module.scss';

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 200 },
};

const CaseStudy = () => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
    className={styles.CaseStudy}
  >
    <div className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>Case Study</small>
      <h1 className={styles.CaseStudyTitle}>devGaido</h1>
      <div className={styles.CaseStudyImageContainer}>
        <Image
          className={styles.CaseStudyImage}
          src="/img/devgaido_hero.jpg"
          alt="devGaido hero image"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVQImQEaAOX/AAAcIAAEAJSjqmuBiwCdra/Uxb7+//+UoKZ4fwy/eXMlXgAAAABJRU5ErkJggg=="
          layout="fill"
          priority
        />
      </div>
    </div>
    <section className={styles.Section}>
      <div className={styles.Container}>
        <small className={styles.CaseStudySubTitle}>How it began</small>
        <h2 className={styles.CaseStudySectionTitle}>Introduction</h2>
        <p>
          When{' '}
          <a
            href="https://www.linkedin.com/in/jdmedlock/"
            target="_blank"
            rel="noreferrer"
          >
            Jim Medlock
          </a>
          , Co-Founder of{' '}
          <a href="https://chingu.io/" target="_blank" rel="noreferrer">
            Chingu
          </a>
          , asked me if I wanted to join his team to develop an application that
          would try to streamline the learning experience of new and experienced
          web developers alike, accepting was a no-brainer. Not having much
          remote working experience under my belt, I felt a bit nervous, but the
          prospect of a such a great learning opportunity was just too good to
          pass up.
        </p>
        <p className={styles.CaseStudyDescription}>
          devGaido is a platform that helps (aspiring) web developers effienctly
          locate learning resources and simplifies studying by combining
          &quot;lessons&quot; into &quot;paths&quot; that follow different
          learning goals.
        </p>
        <p>
          Lessons and paths can each be bookmarked, progress towards completion
          is tracked and paths tangential to your completed lessons are
          recommended automatically.
        </p>
        <div className={styles.CaseStudyLinkContainer}>
          <a
            className={styles.CaseStudyLink}
            target="_blank"
            href="https://devgaido.cardinalzero.com"
            rel="noreferrer"
          >
            <span className="icon-external-link" /> Live
          </a>
          <a
            className={styles.CaseStudyLink}
            target="_blank"
            href="https://github.com/Chingu-cohorts/devgaido"
            rel="noreferrer"
          >
            <span className="icon-embed2" /> Code
          </a>
        </div>
        <div className={styles.CaseStudyImageContainer}>
          <Image
            className={styles.CaseStudyImage}
            src="/img/firstdesign.jpg"
            alt="first design of devgaido"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVQImQEnANj/AP7//+ru9cfL07PExADCw8umqLRYZnpGVmoAUFNjAAAbjpantLvK9h8WHxwQlfsAAAAASUVORK5CYII="
            layout="fill"
          />
        </div>
      </div>
    </section>
    <section className={styles.Section}>
      <div className={styles.Container}>
        <small className={styles.CaseStudySubTitle}>Technologies used</small>
        <h2 className={styles.CaseStudySectionTitle}>Tech Stack</h2>
        <div className={styles.CaseStudyImageContainer}>
          <Image
            className={styles.CaseStudyImage}
            src="/img/stack.jpg"
            alt="icons of our tech stack"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAIAAAB2XpiaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVQImWOY8v8ag42nMwMDQ5kHACDzA/AuVM8zAAAAAElFTkSuQmCC"
            layout="fill"
          />
        </div>
        <small className={styles.CaseStudyImageCaption}>
          MongoDB, React, Node.js, Redux, Stylus, Auth0, Docker, NGINX
        </small>
        <p>
          The tried and true MERN stack ({' '}
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            MongoDB
          </a>
          ,{' '}
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
            Express
          </a>
          ,{' '}
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            React
          </a>
          ,{' '}
          <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
            Node.js
          </a>
          ) and{' '}
          <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
            Redux
          </a>{' '}
          were obvious choices because of their ease of use and reliability.{' '}
          <a href="https://stylus-lang.com/" target="_blank" rel="noreferrer">
            Stylus
          </a>{' '}
          was chosen so we could use the much terser indented syntax, but still
          paste in snippets in regular syntax.
        </p>
        <p>
          As we didn&apos;t want to risk leaking private data, we let{' '}
          <a href="https://auth0.com/" target="_blank" rel="noreferrer">
            Auth0
          </a>{' '}
          handle authentication and only saved the user id for identification.
        </p>
        <p>
          <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
            Docker
          </a>{' '}
          was used to orchestrate the server deployment and{' '}
          <a href="https://www.nginx.com/" target="_blank" rel="noreferrer">
            NGINX
          </a>{' '}
          was utilized here as a reverse proxy to lessen the load on the server
          and allowing it to scale more easily in the future.
        </p>
        <div className={styles.CaseStudyImageContainer}>
          <Image
            className={styles.CaseStudyImage}
            src="/img/seconddesign.jpg"
            alt="redesigned devgaido styleguide"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVQImQEaAOX/AHZ4gQAACOfp9vz//wCwsL3IxdG8wM28wM27jRBFBAzvJgAAAABJRU5ErkJggg=="
            layout="fill"
          />
        </div>
      </div>
    </section>
    <section className={styles.Section}>
      <div className={styles.Container}>
        <small className={styles.CaseStudySubTitle}>Why devGaido?</small>
        <h2 className={styles.CaseStudySectionTitle}>Purpose and Goal</h2>
        <p>
          We built devGaido to provide a guided learning experience for people
          wanting to learn web development, especially those using the excellent{' '}
          <a
            href="https://github.com/P1xt/p1xt-guides"
            target="_blank"
            rel="noreferrer"
          >
            P1xt Guides
          </a>
          .
        </p>
        <p>
          The problem we wanted to address was that the guides by their nature
          are text-only which paired with their flexible curriculum structure
          made it somewhat hard to follow them or track your progress.
        </p>
        <div className={styles.CaseStudyImageContainer}>
          <Image
            className={styles.CaseStudyImage}
            src="/img/library.jpg"
            alt="devgaido's library showing the p1xt guides"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImWNgkNFi4JVlEFVm0LNj+Pz+3bIVq/fu3fv/3x8AU3gLDvWJT8AAAAAASUVORK5CYII="
            layout="fill"
          />
        </div>
      </div>
    </section>
    <section className={styles.Section}>
      <div className={styles.Container}>
        <small className={styles.CaseStudySubTitle}>Challenges we faced</small>
        <h2 className={styles.CaseStudySectionTitle}>Problems</h2>
        <p>
          As I can&apos;t possibly cover all the problems we had to deal with,
          and since frankly no one would actually want to read about all of them
          - I tried to boil this section down to the most interesting challenges
          we faced.
        </p>
      </div>
    </section>
    <section className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>Problem No. 1</small>
      <h3 className={styles.CaseStudyProblemTitle}>CSS Management</h3>
      <div className={styles.CaseStudyImageContainer}>
        <Image
          className={styles.CaseStudyImage}
          src="/img/css.jpg"
          alt="piechart showing coming up with CSS class names takes too much time"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAACAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAACAgEFAAAAAAAAAAAAAAACAwABBAcIFCFD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIDMnH/2gAMAwEAAhEDEQA/AKptxQpmlmETFAZcrK7Iav2OIiGnCJV4jxH/2Q=="
          layout="fill"
        />
      </div>
      <small className={styles.CaseStudyImageCaption}>
        Source: https://css.christmas/2019/22
      </small>
      <p>
        While we tried our best to adhere to{' '}
        <a href="http://getbem.com/introduction/">BEM</a>, coming up with CSS
        class names for a new Component was still pretty time consuming. Add to
        that the time spent constantly flipping back and forth between the
        Component&apos;s code and its CSS and it becomes a major problem.
      </p>
    </section>
    <section className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>Solution</small>
      <h3 className={styles.CaseStudySolutionTitle}>Atomic CSS framework</h3>
      <p>
        Even though the idea of functional/atomic CSS frameworks like{' '}
        <a href="https://tachyons.io/">Tachyons</a> and{' '}
        <a href="https://tailwindcss.com/">Tailwind</a> was pretty novel back
        then, we opted to use this approach to compose the brunt of our CSS
        directly in our code.
      </p>
      <p>
        To be able to tweak it to our needs in regards to naming and features I
        was tasked with creating our own version of such an atomic CSS framework
        (aptly named &quot;Atomiku&quot;).
      </p>
    </section>
    <section className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>Problem No. 2</small>
      <h3 className={styles.CaseStudyProblemTitle}>Bloated CSS</h3>
      <p>
        Using Atomiku made creating new Components and their style much easier
        and - more importantly - much faster. But it came with a huge drawback:
        As we had created utility CSS classes for all kinds of scenarios this
        meant that our production CSS file was pretty bloated, even though we
        only used a fraction of the classes in our code.
      </p>
    </section>
    <section className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>
        Solution and new Problem
      </small>
      <h3 className={styles.CaseStudySolutionAndProblemTitle}>PurifyCSS</h3>
      <p>
        To get rid of the unnecessary CSS, we decided to use PurifyCSS as a
        final build step. This worked great at first glance but when we
        inspected the resulting CSS we noticed that classes with numbers in them
        like &quot;width-50&quot; did, in fact, NOT get removed at all.
      </p>
    </section>
    <section className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>Solution</small>
      <h3 className={styles.CaseStudySolutionTitle}>
        Custom Fork of PurifyCSS
      </h3>
      <div className={styles.CaseStudyImageContainer}>
        <Image
          className={styles.CaseStudyImage}
          src="/img/purify.jpg"
          alt="screenshot of purifycss"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIUlEQVQImWO4eePqujVrZs2YoaioyPD//485c6eDWAwMAL4+C+Nj/xloAAAAAElFTkSuQmCC"
          layout="fill"
        />
      </div>
      <p>
        Luckily, the fix was pretty easy to implement as all I had to do was
        fork PurifyCSS, edit some regex (and adjust the tests for good measure)
        and add that fork to devGaido. From then on, only the absolutely needed
        CSS classes remained in the production CSS.
      </p>
    </section>
    <section className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>Problem No. 3</small>
      <h3 className={styles.CaseStudyProblemTitle}>Function Components</h3>
      <p>
        Driven by the promise of (future) performance benefits and the elegance
        of arrow functions, we tried to use function components wherever
        possible. This however lead to a pretty big problem: We couldn&apos;t
        use local state and had no access to lifecycle functions. Although this
        was fine for the majority of the codebase, it hurt a lot in the places
        where it wasn&apos;t.
      </p>
    </section>
    <section className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>Solution</small>
      <h3 className={styles.CaseStudySolutionTitle}>
        Add state and lifecycle hooks via HOCs
      </h3>
      <div className={styles.CaseStudyImageContainer}>
        <Image
          className={styles.CaseStudyImage}
          src="/img/medium.jpg"
          alt="screenshot of the medium article"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJUlEQVQImQEaAOX/AOj//5+5xavI1N36/wAXAAAeCQA3Jh6zo5rN7gzKe+KU4wAAAABJRU5ErkJggg=="
          layout="fill"
        />
      </div>
      <small className={styles.CaseStudyImageCaption}>
        Source: https://medium.com
      </small>
      <p>
        In absence of React Hooks, which had yet to be invented, I didn&apos;t
        want to admit defeat and resort to using a Class component. So, after a
        lot of trial and error I came up with the following approach:
      </p>
      <ul>
        <li>
          Create a wrapper HOC that exposes state, setState(), and the lifecycle
          hooks
        </li>
        <li>
          Invoke the function component as a function inside the wrapper to get
          the JSX but not create another component
        </li>
        <li>
          Overwrite the static name() getter function to return the original
          component&apos;s name
        </li>
      </ul>
      <p>
        For more details, check out the{' '}
        <a
          href="https://codeburst.io/save-the-zombies-how-to-add-state-and-lifecycle-methods-to-stateless-react-components-1a996513866d"
          target="_blank"
          rel="noreferrer"
        >
          Medium story
        </a>{' '}
        I wrote about this.
      </p>
    </section>
    <section className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>Problem No. 4</small>
      <h3 className={styles.CaseStudyProblemTitle}>Lesson images</h3>
      <div className={styles.CaseStudyImageContainer}>
        <Image
          className={styles.CaseStudyImage}
          src="/img/sameimage.jpg"
          alt="placeholder images used everywhere in the app"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVQImWOwTMhn4BBh4BDxKmxg+P/7v544v7G0yP+ffwFaZgkg/16hAwAAAABJRU5ErkJggg=="
          layout="fill"
        />
      </div>
      <p>
        Throughout the app, we wanted to show images relating to the paths and
        lessons to spice up the visuals, but with such a large number of
        lessons, it would have taken ages to find all the necessary assets.
        Furthermore, that meant we would have needed to find and upload
        appropriate images when adding more lessons in the future.
      </p>
    </section>
    <section className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>Solution</small>
      <h3 className={styles.CaseStudySolutionTitle}>Let the server do it</h3>
      <p>
        Seeing that devGaido exclusively linked to external resources for its
        learning materials, the idea of just using the URLs of the lesson
        resources and letting the node server take screenshots was born. The
        resulting images weren&apos;t as awesome as handpicked ones obviously,
        but it was a great time saver and worked fine for our use case.
      </p>
    </section>
    <section className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>Problem No. 5</small>
      <h3 className={styles.CaseStudyProblemTitle}>Server load</h3>
      <p>
        To keep the costs low for our MVP version, our production server was
        running on a &quot;best-bang-for-your-buck&quot; VPS, which was,
        realistically speaking, still pretty low-performance. This fact was
        backed up by our load tests which suggested that our Node.js server
        could only handle a moderate number of concurrent requests before
        breaking down. We assumed this could potentially lead to severe problems
        in the future if left unaddressed.
      </p>
    </section>
    <section className={styles.Container}>
      <small className={styles.CaseStudySubTitle}>Solution</small>
      <h3 className={styles.CaseStudySolutionTitle}>
        NGINX, Cloudflare, Hydration
      </h3>
      <div className={styles.CaseStudyImageContainer}>
        <Image
          className={styles.CaseStudyImage}
          src="/img/nginx.jpg"
          alt="load balancing"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImWP48+0PgxoDgwnD/7//GX69+cygwcAgxfD/138AoPEMV7oKoogAAAAASUVORK5CYII="
          layout="fill"
        />
      </div>
      <small className={styles.CaseStudyImageCaption}>
        Source: https://nginx.com
      </small>
      <p>
        As a large portion of our server requests was retrieving the lesson and
        path images, the first step was to incorporate{' '}
        <a href="https://www.cloudflare.com/" target="_blank" rel="noreferrer">
          Cloudflare
        </a>{' '}
        as a CDN to serve our static assets cached. Not only did this lessen the
        load immensely but it also let us drop{' '}
        <a href="https://letsencrypt.org/" target="_blank" rel="noreferrer">
          Let&apos;s Encrypt SSL
        </a>{' '}
        and leverage Cloudflare for this as well.
      </p>
      <p>
        The next step was putting{' '}
        <a href="https://www.nginx.com/" target="_blank" rel="noreferrer">
          NGINX
        </a>{' '}
        in front of the Node.js server as a reverse proxy. On the one hand, this
        worked as a &quot;buffer&quot; for our server, on the other hand, it
        enabled load balancing capabilities across multiple Node instances.
      </p>
      <p>
        As the final step, I proposed sending over the complete curriculum data
        (lessons and paths) with the initial page request via server-side Redux
        store hydration. We already hydrated the initial{' '}
        <a
          href="https://redux.js.org/api/store"
          target="_blank"
          rel="noreferrer"
        >
          Redux store
        </a>{' '}
        with user data and authentication details anyway, so the idea
        wasn&apos;t too far-fetched.
      </p>
      <p>
        While further reducing server load, this method also increased the
        perceived speed of the app, since there was no loading except for the
        initial page load.
      </p>
      <p>
        Generating static HTML would have probably been the cleaner solution but
        it would have necessitated rewriting large parts of our custom
        server-side rendering code, so we decided to take the more
        time-efficient route here.
      </p>
      <p>
        In the end, we were able to cut the number of requests our server
        receives by 90%, made our server sturdier, and also enabled scaling
        capabilities via load balancing.
      </p>
    </section>
    <section className={styles.Section}>
      <div className={styles.Container}>
        <small className={styles.CaseStudySubTitle}>Knowledge Gained</small>
        <h2 className={styles.CaseStudySectionTitle}>Lessons Learned</h2>
        <p>The main takeaway for me from this project is:</p>
        <div className={styles.CaseStudyImageContainer}>
          <Image
            className={styles.CaseStudyImage}
            src="/img/communication.jpg"
            alt="word cloud around communication"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAABBAIDAAAAAAAAAAAAAAAEAAECAwUGEVJj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABgRAAMBAQAAAAAAAAAAAAAAAAASUQEC/9oADAMBAAIRAxEAPwC243QNetiVOwc6UnJt5d8kT3f0RES20E5h/9k="
            layout="fill"
          />
        </div>
        <small className={styles.CaseStudyImageCaption}>
          Source: https://pros-blog.padi.com/
        </small>
        <h3>Communication is key.</h3>
        <p>
          It doesn&apos;t matter if it&apos;s between team members or with your
          users - the way you communicate can make or break a project.
        </p>
        <p>
          We had numerous, sometimes heated discussions about various aspects of
          devGaido - direction, UI/UX, app architecture, and countless other
          details - more than enough potential for controversy. But even in the
          most passionate of debates, we always made sure to be respectful and
          willing to listen and give careful consideration to opposing views.
        </p>
        <p>
          That doesn&apos;t mean that we compromised on the product just for
          sake of &quot;getting along&quot; - sharing opinions and arguing for
          one&apos;s beliefs was equally as important - but we took great care
          to keep it all professional.
        </p>
        <p>
          It&apos;s not about winning a popularity contest but about trying to
          create an environment where everyone feels heard and where ideas can
          blossom.
        </p>
        <p>
          That extended to communication with our userbase as well: <br />
          Though we couldn&apos;t possibly fix every issue instantly or answer
          every question thoroughly on the spot, we always made sure to respond
          in <i>some</i> way - no one likes to feel being ignored.
        </p>
      </div>
    </section>
    <section className={styles.Section}>
      <div className={styles.Container}>
        <small className={styles.CaseStudySubTitle}>Conclusion</small>
        <h2 className={styles.CaseStudySectionTitle}>Closing Thoughts</h2>
        <p>
          I am grateful to have been part of this project and to be able to work
          with these great people. The amount and quality of things I learned on
          this journey are immeasurable - I thank everyone involved for this
          opportunity.
        </p>
      </div>
    </section>
  </motion.div>
);

export default CaseStudy;
