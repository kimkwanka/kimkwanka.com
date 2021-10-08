/* eslint-disable react/jsx-props-no-spreading */
import 'modern-css-reset';
import './global.scss';

import { ScrollSpyProvider } from '@hooks/useScrollSpy';

function MyApp({ Component, pageProps }) {
  return (
    <ScrollSpyProvider>
      <Component {...pageProps} />
    </ScrollSpyProvider>
  );
}

export default MyApp;
