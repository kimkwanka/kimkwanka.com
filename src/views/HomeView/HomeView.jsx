import React from 'react';

import './HomeView.scss';

import portraitImg from './portrait.jpg';

const HomeView = () => {
  console.log('HOME');
  return (
    <div className="home-view">
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Kim Kwanka,
            <span className="hero__span gradient">Fullstack Web</span>
            Developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
            sagittis viverra dolor nulla integer rhoncus, et mollis adipiscing.
          </p>
          <button className="hero__button" type="button">Recent Work</button>
        </div>
        <img src={portraitImg} alt="" className="hero__img" />
      </section>
    </div>
  );
};

export default HomeView;
