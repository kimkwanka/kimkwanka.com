import Head from 'next/head';
import Home from '@containers/Home';
import NavBar from '@common/NavBar';

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kim Kwanka - Fullstack Web Developer</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <Home />
    </>
  );
}
