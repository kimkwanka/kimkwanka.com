import Head from 'next/head';
import Header from '@common/Header';
import Footer from '@common/Footer';
import CaseStudy from '@containers/CaseStudy';

export default function myFlixPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kim Kwanka - Case Study: devGaido</title>
      </Head>
      <Header />
      <CaseStudy />
      <Footer />
    </>
  );
}
