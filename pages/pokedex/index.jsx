import Head from 'next/head';
import NavBar from '@common/NavBar';
import CaseStudy from '@containers/CaseStudy';

export default function devGaidoPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kim Kwanka - Case Study: Pokédex</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <CaseStudy />
    </>
  );
}
