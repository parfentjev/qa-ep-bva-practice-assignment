import type { NextPage } from 'next';
import Head from 'next/head';
import EquivalencePartitioning from '../components/EquivalencePartitioning';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Equivalence Partitioning and Boundary Value Analysis practice
        </title>
        <meta
          name='description'
          content='Simple Equivalence Partitioning and Boundary Value Analysis practice for new Quality Assurance/Test engineers'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex-shrink-0'>
        <EquivalencePartitioning />
      </main>

      <footer className='text-center'>
        <a
          href='https://www.linkedin.com/in/aleksei-parfentjev-8b7103118/'
          target={'_blank'}
          className='link-secondary text-decoration-none'
          rel='noreferrer'
        >
          contact me
        </a>
      </footer>
    </div>
  );
};

export default Home;
