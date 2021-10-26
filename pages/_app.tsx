/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import 'modern-css-reset';
import '@src/styles/global.scss';

import { SectionProvider } from '@hooks/useSections/useSections';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SectionProvider>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={Component.name} />
      </AnimatePresence>
    </SectionProvider>
  );
}

export default MyApp;
