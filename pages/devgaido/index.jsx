import Head from 'next/head';
import Header from '@common/Header';
import CaseStudy from '@containers/CaseStudy';

export default function devGaidoPage() {
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
    </>
  );
}
