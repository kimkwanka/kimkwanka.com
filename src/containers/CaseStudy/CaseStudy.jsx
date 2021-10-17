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
    <h2 className={styles.CaseStudySectionTitle}>Introduction</h2>
    <p>
      When
      {' '}
      <a href="https://www.linkedin.com/in/jdmedlock/" target="_blank" rel="noreferrer">Jim Medlock</a>
      ,
      Co-Founder of
      {' '}
      <a href="https://chingu.io/" target="_blank" rel="noreferrer">Chingu</a>
      , asked me if I
      wanted to join his team to develop an application that would try to
      streamline the learning experience of new and experienced web developers
      alike, accepting was a no-brainer. Not having much remote working experience
      under my belt, I felt a bit nervous, but the prospect of a such a great
      learning opportunity was just too good to pass up.
    </p>
    <p className={styles.CaseStudyDescription}>
      devGaido is a platform that helps (aspiring) web developers effienctly
      locate learning resources and simplifies studying by combining
      &quot;lessons&quot; into &quot;paths&quot; that follow different learning
      goals.
    </p>
    <p>
      Lessons and paths can each be bookmarked, progress towards completion is
      tracked and paths tangential to your completed lessons are recommended
      automatically.
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
      As we didn&apos;t want to risk leaking private data, we let Auth0 handle
      authentication and only saved the user id for identification.
    </p>
    <p>
      On the Dev Ops side we used Docker to orchestrate the server deployment
      and NGINX was utilized here as a reverse proxy to lessen the load on the
      server and allowing it to scale more easily in the future.
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
      <a href="https://github.com/P1xt/p1xt-guides" target="_blank" rel="noreferrer">P1xt Guides</a>
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
    <h3>Problem No. 1: Managing and writing CSS</h3>
    <p>
      With devGaido, we used a pretty generic folder structure with all of our
      Stylus files being in ./src/client/stylus. This made adding new components
      and their corresponding CSS always feel cumbersome: + Even with BEM,
      coming up with CSS class names was annoying + With long class names it was
      hard to reason about a component&apos;s style + Constant back-and-forth
      between files since component CSS was not located near its code
    </p>
    <h3>Solution: Atomic CSS</h3>
    <p>
      Even though the idea of functional/atomic CSS frameworks like Tachyons and
      Tailwind was pretty novel back then, we opted to use this approach to
      compose the brunt of our CSS directly in our code. We decided to add an
      empty BEM-style class as an identifier (like &quot;lesson-card&quot;) for
      easier navigation, though. To be able to tweak it to our needs in regards
      to naming and features I was tasked with creating our own version of an
      atomic CSS framework (called &quot;Atomiku&quot;) which was a great
      learning experience in its own right.
    </p>
    <h3>Problem No. 2: Bloated CSS / PurifyCSS</h3>
    <p>
      Using Atomiku made creating new Components and their style much easier and
      - more importantly - much faster. But it came with a huge drawback: As we
      had created utility CSS classes for all kinds of scenarios this meant that
      our production CSS file was pretty bloated, even though we only used a
      fraction of the classes in our code.
    </p>
    <h3>Solution and Problem: PurifyCSS</h3>
    <p>
      To get rid of the unnecessary CSS, we decided to use PurifyCSS as a final
      build step. This worked great at first glance but when we inspected the
      resulting CSS we noticed that classes with numbers in them like
      &quot;width-50&quot; did, in fact, NOT get removed at all.
    </p>
    <h3>Solution: Custom Fork of PurifyCSS</h3>
    <p>
      Luckily, the fix was pretty easy to implement as all I had to do was fork
      PurifyCSS, edit some regex (and adjust the tests for good measure) and add
      that fork to devGaido. From then on, only the absolutely needed CSS
      classes remained in the production CSS.
    </p>
    <h3>Problem No. 3: Function Components</h3>
    <p>
      Driven by the promise of (future) performance benefits and the elegance of
      arrow functions, we tried to use function components wherever possible.
      This however lead to a pretty big problem: We couldn&apos;t use local
      state and had no access to lifecycle functions. Although this was fine for
      the majority of the codebase, it hurt a lot in the places where it
      wasn&apos;t.
    </p>
    <h3>Solution: Adding state and lifecycle hooks via HOCs</h3>
    <p>
      In absence of React Hooks, which had yet to be invented, I didn&apos;t
      want to admit defeat and just use a Class component - instead, I tried to
      come up with a way to inject state and lifecycle hooks into those function
      components. And in the end, I did succeed with the following approach:
      Create a wrapper HOC that exposes state, setState(), and the lifecycle
      hooks Invoke the function component as a function inside the wrapper to
      get the JSX but not create another component Overwrite the static name()
      getter function to return the original component&apos;s name
    </p>
    <p>
      For more details, check out the
      {' '}
      <a href="https://codeburst.io/save-the-zombies-how-to-add-state-and-lifecycle-methods-to-stateless-react-components-1a996513866d" target="_blank" rel="noreferrer">
        Medium story
        {' '}
      </a>
      I wrote about this.
    </p>
    <h3>Problem No. 4: Lesson images</h3>
    <p>
      Throughout the app, we wanted to show images relating to the paths and
      lessons to spice up the visuals, but with such a large number of lessons,
      it would have taken ages to find all the necessary assets. Furthermore,
      that meant we would have needed to find and upload appropriate images when
      adding more lessons in the future.
    </p>
    <h3>Solution: Let our server take screenshots</h3>
    <p>
      Seeing that devGaido exclusively linked to external resources for its
      learning materials, the idea of just using the URLs of the lesson
      resources and letting the node server take screenshots was born. The
      resulting images weren&apos;t as awesome as handpicked ones obviously, but
      it was a great time saver and worked fine for our use case.
    </p>
    <h3>Problem No. 5: Server load</h3>
    <p>
      To keep the costs low for our MVP version, our production server was
      running on a &quot;best-bang-for-your-buck&quot; VPS, which
      was, realistically speaking, still pretty low-performance. This fact was
      backed up by our load tests which suggested that our Node.js server could
      only handle a moderate number of concurrent requests before breaking down.
      In a real world scenario, we assumed, the constant server requests could
      potentially lead to inoperability pretty quickly.
    </p>
    <h3>Solution: NGINX, Cloudflare, Hydrated Redux store</h3>
    <p>
      Luckily, were able to make the necessary adjustments without much impact on the codebase:
      + Use NGINX as a reverse proxy + Use Cloudflare CDN to serve the static assets +
      Hydrate the Redux store with the complete curriculum data to make
      subsequent requests unneeded Just adding NGINX in front of our Node.js
      server made a pretty significant difference in the number of concurrent
      requests that could be handled, especially so, since Cloudflare would
      serve the images, etc. instead.
    </p>
    <p>
      This would have probably sufficed, but since we already hydrated the
      initial store with user data and authentication details, I proposed trying
      to send over the complete curriculum data (lessons and paths) as well. And
      as testing suggested that this would only have a small impact on the speed
      of the initial page load, we went with it. The effect of this was twofold:
      In the absence of requesting data before switching pages, the server load
      was significantly lessened and the perceived speed of the app increased
      dramatically.
    </p>
    <p>
      In hindsight, I guess just generating static HTML from the curriculum data
      would have been the cleaner solution, but you know how the saying goes:
      &quot;Hindsight is 20/20&quot;, plus - learning about this technique might
      prove valuable in future projects.
    </p>
    <h2 className={styles.CaseStudySectionTitle}>Lessons Learned</h2>
    <p>The main takeaway for me from this project is:</p>
    <h3>Communication is key.</h3>
    <p>
      It doesn&apos;t matter if it&apos;s between team members or with your
      users - the way you communicate can make or break a project.
    </p>
    <p>
      We had numerous, sometimes heated discussions about various aspects of
      devGaido - direction, UI/UX, app architecture, and countless other details
      - more than enough potential for controversy. But even in the most
      passionate of debates, we always made sure to be respectful and willing to
      listen and give careful consideration to opposing views.
    </p>
    <p>
      That doesn&apos;t mean that we compromised on the product just for sake of
      &quot;getting along&quot; - sharing opinions and arguing for one&apos;s
      beliefs was equally as important - but we took great care to keep it all
      professional.
    </p>
    <p>
      It&apos;s not about winning a popularity contest but about trying to
      create an environment where everyone feels heard and where ideas can
      blossom.
    </p>
    <p>
      That extended to communication with our userbase as well: It wasn&apos;t
      about trying to fix every issue instantly or answering every question
      thoroughly on the spot, but making sure to respond in _some_ way - no one
      likes to feel being ignored.
    </p>
  </div>
);

export default CaseStudy;
