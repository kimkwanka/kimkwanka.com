/* eslint-disable react/jsx-props-no-spreading */
import 'modern-css-reset';
import './global.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
