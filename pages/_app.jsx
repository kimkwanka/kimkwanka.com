/* eslint-disable react/jsx-props-no-spreading */
import 'modern-css-reset';
import '@src/global.scss';

import { SectionProvider } from '@hooks/useSections';

function MyApp({ Component, pageProps }) {
  return (
    <SectionProvider>
      <Component {...pageProps} />
    </SectionProvider>
  );
}

export default MyApp;
