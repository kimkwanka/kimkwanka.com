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
      {isModalOpen && (
      <WorkModal
        title={modalData.title}
        img={modalData.img}
        answers={modalData.answers}
        setIsModalOpen={setIsModalOpen}
      />
      )}
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
              <div
                className="grid__item"               
              >
                <div className="grid__item__header" onClick={handleGridItemClick({
                  title: 'Pokédex App',
                  img: cfJS1Img,
                  answers: [
                    <p>
                      I was the project lead developer and I faced the task of
                      realizing a PWA by utilizing test-driven development
                      techniques.
                    </p>,
                    <p>
                      Later in the project I decided to remove the hardcoded API
                      endpoints and use environment variables instead. This
                      worked fine for development but when deploying to gh-pages
                      it was a lot more involved to get the environment
                      variables to work. In the end I had to read up on and
                      utilize Github Actions and Github Secrets to make
                      everything work which had more than one gotcha for me in
                      store.
                    </p>,
                    <p>
                      Given more time, I&apos;d definitely redo the UI and the
                      login process. The automatic redirect to the production
                      site after obtaining the access token made everything a
                      lot more annoying than needs be. It didn&apos;t really
                      help that for changes to be reflected in the deployed page
                      I had to hammer that reload button a ton.
                      {' '}
                    </p>,
                    <>
                      <p>
                        The most valuable lesson learned here is that (at least
                        for now), purely functional components using React Hooks
                        aren&apos;t fully supported by Jest + Enzyme. You can
                        make them work, but youll need a lot of guess work at
                        times and will be pasting tons of
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
                })}>
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
                <div className="grid__item__header">
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
                <div className="grid__item__header">
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
                <div className="grid__item__header">
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
                <div className="grid__item__header">
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
                <div className="grid__item__header">
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
