import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Open Graph implementation page title" />
        <meta
          property="og:description"
          content="Open Graph implementation page desctiption"
        />
        <meta
          property="og:image"
          content="https://ogimage-generation-vercel.vercel.app/api/og?title=opengraph&subtitle=Dynamic%20image%20using%20edge%20function"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js!</a> Open Graph Image Generation
        </h1>

        <p className={styles.description}>
          This page is the implementation of dynamic Open Graph image
          <code className={styles.code}>from Vercel @vercel/og</code>
        </p>

        <p className={styles.description}>Tutorial video implementation can be found here: <a href="https://www.youtube.com/watch?v=xpR9pMzAGqQ" className={styles.videoLink}><u>Click video link here</u></a></p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/xpR9pMzAGqQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
