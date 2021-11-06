import Head from 'next/head';
import Header from '@common/Header/Header';
import Footer from '@common/Footer/Footer';
import Home from '@src/containers/HomeView/HomeView';

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kim Kwanka | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Full Stack Developer based in Berlin. Experienced with React.js, MongoDB, Node.js, Express, Redux, Docker, Next.js"
        />
        <meta
          name="keywords"
          content="Kim Kwanka, Berlin, Full Stack, developer, React, CSS, HTML, JavaScript"
        />
        <meta name="author" content="Kim Kwanka" />
      </Head>
      <Header isHomeHeader />
      <Home />
      <Footer />
    </>
  );
}
