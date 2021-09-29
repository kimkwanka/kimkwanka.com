import React from 'react';

import LoadingSpinner from './common/LoadingSpinner/LoadingSpinner';
import NavBar from './common/NavBar/NavBar';

import Routes from './Routes';

import 'modern-css-reset';

import './App.scss';

const App = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main>
      <LoadingSpinner isLoading={false} />
      <Routes />
    </main>
  </>
);

export default App;
