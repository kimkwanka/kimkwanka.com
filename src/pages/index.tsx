import Head from 'next/head';
import Header from '@common/Header/Header';
import Footer from '@common/Footer/Footer';
import Home from '@src/containers/HomeView/HomeView';

const IndexPage = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Kim Kwanka | Full Stack Web Developer</title>
      <meta
        name="description"
        content="Full Stack React Developer based in Berlin. Brings 20+ years of passion for coding and creating software, paired with a knack for UI/UX and DevOps."
      />
      <meta
        name="keywords"
        content="Kim Kwanka, Berlin, Full Stack,web, developer, React.js, MongoDB, Node.js, Express, Redux, Docker, Next.js, CSS, HTML, JavaScript"
      />
      <meta name="author" content="Kim Kwanka" />
    </Head>
    <Header isHomeHeader />
    <Home />
    <Footer />
  </>
);

export default IndexPage;
