import Head from 'next/head';
import Header from '@common/Header/Header';
import Footer from '@common/Footer/Footer';
import TransitionLayout from '@common/TransitionLayout/TransitionLayout';

import CaseStudy from '@src/containers/CaseStudyView/CaseStudyView';

export default function devGaidoPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kim Kwanka | Case Study: devGaido</title>
        <meta
          name="description"
          content="Case Study: devGaido - A platform created to streamline the learning experience of new and experienced web developers alike."
        />
        <meta
          name="keywords"
          content="Kim Kwanka, Berlin, Full Stack,web, developer, React.js, MongoDB, Node.js, Express, Redux, Docker, Next.js, CSS, HTML, JavaScript"
        />
        <meta name="author" content="Kim Kwanka" />
      </Head>
      <Header />
      <TransitionLayout>
        <CaseStudy />
      </TransitionLayout>
      <Footer />
    </>
  );
}
