/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';

import 'modern-css-reset';
import '@src/styles/global.scss';

import { SectionProvider } from '@hooks/useSections/useSections';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SectionProvider>
      <Component {...pageProps} />
    </SectionProvider>
  );
}

export default MyApp;
