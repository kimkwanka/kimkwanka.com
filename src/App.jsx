import React from 'react';

import LoadingSpinner from './common/LoadingSpinner/LoadingSpinner';
import NavBar from './common/NavBar/NavBar';

import HomeView from './views/HomeView/HomeView';

import 'modern-css-reset';

import './App.scss';

const App = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main>
      <LoadingSpinner isLoading={false} />
      <HomeView />
    </main>
  </>
);

export default App;
