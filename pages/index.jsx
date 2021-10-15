import Head from 'next/head';
import Header from '@common/Header';
import Footer from '@common/Footer';
import Home from '@containers/Home';

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kim Kwanka - Full-Stack Web Developer</title>
        <meta name="description" content="Full-Stack Web Developer based in Berlin. Experienced with React, MongoDB, Node.js, Express, Docker, Next.js" />
        <meta name="keywords" content="Kim Kwanka, developer, React, CSS, HTML, JavaScript" />
        <meta name="author" content="Kim Kwanka" />
      </Head>
      <Header doesChangeOnScroll />
      <Home />
      <Footer />
    </>
  );
}
