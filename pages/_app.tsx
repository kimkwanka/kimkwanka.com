/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';

import { AppProps } from 'next/app';
import Router from 'next/router';

import { AnimatePresence } from 'framer-motion';

import 'modern-css-reset';
import '@src/styles/global.scss';

import { SectionProvider } from '@hooks/useSections/useSections';
import useFixPageTransitionCSS from '@hooks/useFixPageTransitionCSS/useFixPageTransitionCSS';

import LoadingSpinner from '@common/LoadingSpinner/LoadingSpinner';

const handleExitComplete = (): void => {
  if (typeof window !== 'undefined') {
    // When navigating to /devgaido, scroll to top first
    if (window.location.pathname === '/devgaido') {
      window.scrollTo(0, 0);
    }
    const hashId = window.location.hash;

    if (hashId) {
      document.querySelector(hashId)?.scrollIntoView({ block: 'start' });
      // Adjust for framer motion's initial Y offset
      window.scrollBy(0, -200);
    }
  }
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = useState(false);

  // Disable automatic scroll restoration
  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
  }

  useFixPageTransitionCSS();

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setIsLoading(true));
    Router.events.on('routeChangeComplete', () => setIsLoading(false));
    Router.events.on('routeChangeError', () => setIsLoading(false));
  }, []);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      <SectionProvider>
        <AnimatePresence
          initial={false}
          exitBeforeEnter
          onExitComplete={handleExitComplete}
        >
          <Component {...pageProps} key={Component.name} />
        </AnimatePresence>
      </SectionProvider>
    </>
  );
};

export default MyApp;
