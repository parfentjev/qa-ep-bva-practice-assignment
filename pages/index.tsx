import type { NextPage } from 'next'
import Head from 'next/head'
import Implementations from '../components/Implementations'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Equivalence Partitioning and Boundary Value Analysis practice
        </title>
        <meta
          name="description"
          content="Simple Equivalence Partitioning and Boundary Value Analysis practice for new Quality Assurance/Test engineers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-shrink-0">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          limit={1}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Implementations />
      </main>

      <footer className="text-center">
        <a
          href="https://www.linkedin.com/in/aleksei-parfentjev-8b7103118/"
          target={'_blank'}
          className="p-3 link-secondary text-decoration-none"
          rel="noreferrer"
        >
          contact me
        </a>{' '}
        <a
          href="https://github.com/parfentjev/qa-ep-bva-practice-assignment"
          target={'_blank'}
          className="p-3 link-secondary text-decoration-none"
          rel="noreferrer"
        >
          github
        </a>
      </footer>
    </div>
  )
}

export default Home
