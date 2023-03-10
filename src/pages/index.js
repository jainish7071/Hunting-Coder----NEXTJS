import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import styles1 from '@/styles/Home1.module.css'
import styles2 from '@/styles/Home2.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content='hunting coder, coder blog, problem solver' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='sc.js' strategy='lazyOnload' /> */}
      <nav className={styles.mainNav}>
        <ul>
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/about"}><li>About</li></Link>
          <Link href={"/blog"}><li>Blog</li></Link>
          <Link href={"contact"}><li>Contact</li></Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Hunting Code</h1>
        </div>
        <div className={styles.description}>
          A Blog for hunting coders by a hunting coder
        </div>
        <div>
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is the language use to design logic for the web.</p>
          </div>
        </div>
      </main>
    </>
  )
}
