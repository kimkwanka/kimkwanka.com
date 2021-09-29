/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import WorkModal from './WorkModal/WorkModal';

import './HomeView.scss';

import portraitImg from '../../assets/img/portrait.jpg';
import cfChatImg from '../../assets/img/cf-chat.jpg';
import cfJS1Img from '../../assets/img/cf-js1.jpg';
import cfMeetImg from '../../assets/img/cf-meet.jpg';
import cfMovieApiImg from '../../assets/img/cf-movie-api.jpg';
import cfMyflixImg from '../../assets/img/cf-myflix.jpg';
import cfMyflixAngularImg from '../../assets/img/cf-myflix-angular.jpg';

const HomeView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleGridItemClick = (newData) => (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setModalData(newData);
  };

  return (
    <div className="home-view">
      <WorkModal
        title={modalData.title}
        img={modalData.img}
        answers={modalData.answers}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      <section className="hero" id="home">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              Kim Kwanka,
              <span className="hero__span gradient">Fullstack Web</span>
              Developer
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              sagittis viverra dolor nulla integer rhoncus, et mollis
              adipiscing.
            </p>
            <a href="#work" className="button hero__button" type="button">
              Recent Work
            </a>
          </div>
          <img src={portraitImg} alt="" className="hero__img" />
        </div>
      </section>
      <section className="about" id="about">
        <div className="about__container">
          <div className="about__content">
            <h1 className="about__title">About Me</h1>
            <p className="about__text">
              I&apos;m a former executive officer of tax authorities and nurse
              who took the plunge into the world of
              {' '}
              <span className="gradient">web development</span>
              .
            </p>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              sagittis viverra dolor nulla integer rhoncus, et mollis
              adipiscing.
            </p>
          </div>
        </div>
      </section>
      <section className="work" id="work">
        <div className="work__container">
          <div className="work__content">
            <h1 className="work__title">Recent Work</h1>
            <div className="work__grid">
              <div className="grid__item">
                <div
                  className="grid__item__header"
                  onClick={handleGridItemClick({
                    title: 'Pokédex App',
                    img: cfJS1Img,
                    answers: [
                      <>
                        <p>
                          I decided to show images on page load instead of when
                          clicking a card.
                        </p>
                        <p>Pros: Made UI look a lot more lively</p>
                        <p>
                          Cons: Lazy loading needed to be implemented to not
                          have a horrible experience on slow connections
                        </p>

                        <p>
                          I reverted changes to CSS that would have improved the
                          CSS transitions (hover/focus on cards and modal
                          hide/show).
                        </p>
                        <p>
                          Pros: Much better scrolling and overall performance on
                          low powered devices (lower memory consumption as less
                          composite layers were used)
                        </p>
                        <p>
                          Cons: A little less performant CSS transitions
                          (unneeded repaints triggered)
                        </p>
                        <p>
                          Adding 'will-change' got rid of unneccessary repaints
                          by putting all animated elements on their own
                          composite layers. This improved the performance of the
                          CSS transistions slightly, but due to higher memory
                          consumption and other side effects, the overall
                          experience on low power devices got a lot worse. Most
                          notably, scrolling was a lot less smooth and more
                          "stuttery" even on decently powerful mobiles. The
                          change was therefore reverted quickly as the amount of
                          performance gained on the transitions didn't make up
                          for the performance lost everywhere else.
                        </p>
                      </>,
                      <>
                        <p>+ Add pagination and / or lazy loading of chunks</p>
                        <p>+ Add much more information to the details modal</p>
                        <p>+ Save DOM element references for later</p>
                        <p>
                          + Refactor to simplify the code structure even more
                        </p>
                      </>,
                      <>
                        <p>
                          A great UI improves the perceived quality / usability
                          of an app a thousandfold so investing in one is
                          mandatory
                        </p>
                        <p>Trying to improve performance can "backfire"</p>
                        <p>InteractionObserver makes lazy loading a breeze</p>
                        <p>
                          Lazy loading is a necessity when dealing with APIs
                        </p>
                        <p>
                          Only compositing CSS properties like transform and
                          opacity transitions are hardware accelerated
                        </p>
                      </>,
                    ],
                  })}
                >
                  <h2 className="gradient--secondary">Pokédex App</h2>
                  <img src={cfJS1Img} alt="Pokédex App" />
                </div>
                <div className="grid__item__details">
                  <p>Pokédex app using HTML, CSS and vanilla JS.</p>
                  <a
                    target="_blank"
                    href="https://kimkwanka.github.io/cf-js1"
                    rel="noreferrer"
                  >
                    Live version
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/kimkwanka/cf-js1"
                    rel="noreferrer"
                  >
                    See project on GitHub
                  </a>
                </div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item__header"
                  onClick={handleGridItemClick({
                    title: 'Movie API',
                    img: cfMovieApiImg,
                    answers: [
                      <>
                        <p>
                          I decided to employ a project structure as outlined by
                          the
                          <a
                            target="_blank"
                            href="https://github.com/goldbergyoni/nodebestpractices"
                            rel="noreferrer"
                          >
                            {' '}
                            Node.js Best Practices Project
                            {' '}
                          </a>
                          {' '}
                          to separate the concerns of different logic layers as
                          much as possible.
                        </p>
                        <p>
                          This lead to a lot more initial work and necessitated
                          a lot more discipline (for example only handling 'req'
                          in the Controller) as to not dillute the layers, but
                          in the end the codebase felt a lot cleaner and much
                          more scalable.
                        </p>
                      </>,
                      <>
                        <p>
                          I would probably use Swagger to document the API as it
                          is much more visually pleasing, fully-featured and
                          tailor-made for APIs.
                          {' '}
                        </p>
                        <p>
                          Although jsdoc-http-plugin did a pretty good job of
                          providing the tags necessary to document API
                          endpoints, everything felt like an afterthought and
                          the resulting doc feels kinda lacking.
                        </p>
                      </>,
                      <>
                        <p>
                          The biggest lesson learned here is that you should
                          always use lowercase field names in APIs. The task was
                          to use capitalized names but it felt awkward and made
                          things unneccessarily complicated in the backend but
                          also in the client codebases later on. Even though
                          changing everything to use lowercase names later was
                          quite the hassle, I feel it was very worth it in the
                          end if only for the ease of use.
                        </p>
                      </>,
                    ],
                  })}
                >
                  <h2 className="gradient--secondary">Movie API</h2>
                  <img src={cfMovieApiImg} alt="Movie API" />
                </div>
                <div className="grid__item__details">
                  <p>A simple RESTful movie API.</p>
                  <a
                    target="_blank"
                    href="https://dry-sands-45830.herokuapp.com/"
                    rel="noreferrer"
                  >
                    Live version
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/kimkwanka/cf-movie-api"
                    rel="noreferrer"
                  >
                    See project on GitHub
                  </a>
                </div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item__header"
                  onClick={handleGridItemClick({
                    title: 'myFlix',
                    img: cfMyflixImg,
                    answers: [
                      <>
                        <p>
                          After moving from handling global app state via
                          useContext und custom hooks to good old trusty Redux,
                          I decided to reuse a lot of the boilerplate I still
                          had from an older project and failed to check the
                          latest Redux docs. It had been a while since when I
                          last used Redux but I had assumed that nothing major
                          would've changed in recent years.
                        </p>
                        <p>
                          Everything worked fine but after stumbling across a
                          random blog post mentioning the useSelector hook, I
                          realized that I had made my life much harder by still
                          using the "old ways" of doing things with Redux.
                          Reading up on the new features and rewriting quite a
                          bit of the codebase I was astonished on how much less
                          "painful" things had become. Especially ReduxToolkit
                          was a game changer and together with the concept of
                          "slices" the amount of boilerplate code was reduced to
                          a minimum.
                        </p>
                      </>,
                      <>
                        <p>
                          When tackling a similar project in the future, I would
                          probably use an "official" API and not my own. Having
                          to supply the movie data to my own API to then be able
                          to consume it with my client was one of the most time
                          consuming parts. Finding the data and assets and
                          putting them into the database was much more of a
                          hassle than anticipated.
                        </p>
                        <p>
                          Additionally, it feels like that apps like these live
                          and die with the amount of data that is available -
                          when there's only 10 movies in the database, there's
                          not much use for things like lazy loading cards,
                          endless scrolling, etc.
                        </p>
                      </>,
                      <>
                        <p>
                          The big takeaway for me here is that even though you definitely CAN have your async logic
                          inside your components and have useEffect, etc. deal with it, it feels a lot cleaner to
                          move that logic into (async) thunks handled by Redux. Especially now that the majority of Redux' boilerplate is gone
                          when using things like ReduxToolkit's createAsyncThunk, you can enjoy all the benefits without hardly any negatives.
                        </p>
                      </>,
                    ],
                  })}
                >
                  <h2 className="gradient--secondary">myFlix</h2>
                  <img src={cfMyflixImg} alt="myFlix" />
                </div>
                <div className="grid__item__details">
                  <p>Client written in React for the Movie API backend.</p>
                  <a
                    target="_blank"
                    href="https://kk-myflix.netlify.app/"
                    rel="noreferrer"
                  >
                    Live version
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/kimkwanka/cf-myflix"
                    rel="noreferrer"
                  >
                    See project on GitHub
                  </a>
                </div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item__header"
                  onClick={handleGridItemClick({
                    title: 'Meet App',
                    img: cfMeetImg,
                    answers: [
                      <p>
                        Later in the project I decided to remove the hardcoded
                        API endpoints and use environment variables instead.
                        This worked fine for development but when deploying to
                        gh-pages it was a lot more involved to get the
                        environment variables to work. In the end I had to read
                        up on and utilize Github Actions and Github Secrets to
                        make everything work which had more than one gotcha for
                        me in store.
                      </p>,
                      <p>
                        Given more time, I&apos;d definitely redo the UI and the
                        login process. The automatic redirect to the production
                        site after obtaining the access token made everything a
                        lot more annoying than needs be. It didn&apos;t really
                        help that for changes to be reflected in the deployed
                        page I had to hammer that reload button a ton.
                        {' '}
                      </p>,
                      <>
                        <p>
                          The most valuable lesson learned here is that (at
                          least for now), purely functional components using
                          React Hooks aren&apos;t fully supported by Jest +
                          Enzyme. You can make them work, but youll need a lot
                          of guess work at times and will be pasting tons of
                          {' '}
                        </p>
                        <code className="gradient--secondary">
                          {`await act(async () => {
                      await new Promise(setImmediate);
                    });
                    AppWrapper.update();`}
                        </code>
                        <p>
                          just to get state and prop updates to propagate
                          correctly.
                        </p>
                      </>,
                    ],
                  })}
                >
                  <h2 className="gradient--secondary">Meet App</h2>
                  <a className="img-link" href="cf-meet.html">
                    <img src={cfMeetImg} alt="Meet App" />
                  </a>
                </div>
                <div className="grid__item__details">
                  <p>
                    Serverless, progressive web application (PWA) with React
                    using a test-driven development (TDD) technique. The
                    application uses the Google Calendar API to fetch upcoming
                    events.
                  </p>
                  <a
                    target="_blank"
                    href="https://kimkwanka.github.io/cf-meet/"
                    rel="noreferrer"
                  >
                    Live version
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/kimkwanka/cf-meet"
                    rel="noreferrer"
                  >
                    See project on GitHub
                  </a>
                </div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item__header"
                  onClick={handleGridItemClick({
                    title: 'Native Chat App',
                    img: cfChatImg,
                    answers: [
                      <>
                        <p>
                          I decided to stick with function components and hooks even though the reference material used class components.
                        </p>
                        <p>
                          This worked pretty well for the most part, until I had to get access to a component's "this.context" to call useActionSheet().
                          After trying to find a solution for hours to no avail, I bit the bullet and imported the function from the official package "@expo/react-native-action-sheet" and used this version instead.
                          Even though it works just fine, it left a bad taste in my mouth knowing that there now is 2 useActionSheet functions in this project.
                        </p>
                      </>,
                      <>
                        <p>
                          I would probably try to use React Native only, without Expo just to experience how much of a help it really was.
                        </p>
                        <p>
                          Furthermore, I would dig deeper into how to get rid of those pesky warnings popping up not only in the console but also in the app itself.
                          It felt needlessly complex and somewhat "hacky" to change code inside the imported node_modules folder if I'm honest but since there's no other way afaik, that's what I'd do.
                        </p>
                      </>,
                      <>
                        <p>
                          I learned that having a compatible physical device is basically mandatory for developing apps with React Native and Expo.
                        </p>
                        <p>
                          Despite being able to run the app in the browser or emulator, there is just certain odd behaviours that you cannot replicate otherwise.
                        </p>
                      </>,
                    ],
                  })}
                >
                  <h2 className="gradient--secondary">Native Chat App</h2>
                  <img src={cfChatImg} alt="Chat App" />
                </div>
                <div className="grid__item__details">
                  <p>
                    A React Native messenger app inspired by the likes of
                    Whatsapp and Co.
                  </p>
                  <a
                    target="_blank"
                    href="https://youtu.be/_xLlbeyPdoU"
                    rel="noreferrer"
                  >
                    Youtube Video
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/kimkwanka/cf-chat"
                    rel="noreferrer"
                  >
                    See project on GitHub
                  </a>
                </div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item__header"
                  onClick={handleGridItemClick({
                    title: 'myFlix Angular',
                    img: cfMyflixAngularImg,
                    answers: [
                      <>
                        <p>
                          For this project, I decided to minimize the use of custom CSS and use Angular Material almost exclusively.
                        </p>
                        <p>
                          This sped up development quite a bit, but the resulting UI feels a bit "same-y".
                        </p>
                      </>,
                      <>
                        <p>
                          As I already mentioned in my project overview for the myFlix React client, I would probably use a third party API instead of my own just so that I wouldn't have to manually enter movie data again.
                        </p>
                      </>,
                      <>
                        <p>
                          The biggest lesson learned here is that Angular has come a long way since when I first tried it years ago and that I should have given it a try much earlier.
                        </p>
                        <p>
                          I was always of the opinion that Angular was too opinionated for my taste and had too much boilerplate, but after using it for this project it didn't feel so bad at all.
                          Using the CLI and Angular Material I was able to rapidly churn out the different components with ease, at times even faster than with React to be honest.
                          This might be due the the relative simplicity of the project though.
                        </p>
                      </>,
                    ],
                  })}
                >
                  <h2 className="gradient--secondary">myFlix Angular</h2>
                  <img src={cfMyflixAngularImg} alt="myFlix Angular" />
                </div>
                <div className="grid__item__details">
                  <p>Client written in Angular for the Movie API backend.</p>
                  <a
                    target="_blank"
                    href="https://kimkwanka.github.io/cf-myflix-angular"
                    rel="noreferrer"
                  >
                    Live version
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/kimkwanka/cf-myflix-angular"
                    rel="noreferrer"
                  >
                    See project on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="contact__container">
          <div className="contact__content">
            <h1 className="contact__title">Contact</h1>
            <p>Feel free to reach out to me via:</p>
            <div className="contact__info">
              Github:
              {' '}
              <a
                target="_blank"
                href="https://github.com/kimkwanka/"
                rel="noreferrer"
              >
                kimkwanka
              </a>
              <br />
              Medium:
              {' '}
              <a
                target="_blank"
                href="https://medium.com/@kimkwanka"
                rel="noreferrer"
              >
                kimkwanka
              </a>
              <br />
              Twitter:
              {' '}
              <a
                target="_blank"
                href="https://www.twitter.com/kimkwanka/"
                rel="noreferrer"
              >
                @kimkwanka
              </a>
              <br />
              LinkedIn:
              {' '}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kimkwanka/"
                rel="noreferrer"
              >
                kimkwanka
              </a>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
