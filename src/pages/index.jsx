import Head from "next/head";
// import Image from "next/image";
import Script from "next/script";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <style jsx global>
        {`
          .myImg {
            border-radius: 10px;
            margin: 10px;
          }
          h2 {
            font-size: 38px;
            margin-bottom: 10px;
          }
          h3 {
            font-size: 28px;
          }
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="hunting coder, coder blog, problem solver" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='sc.js' strategy='lazyOnload' /> */}
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Hunting Code</h1>
        </div>
        {/* <Image className="myImg" src={src} alt={"Image Not Found"} width="237" height="145" /> */}
        <img src="./home.jpg" alt="Image Not Found" width="237" height="145" />
        <div className={styles.description}>A Blog for hunting coders by a hunting coder</div>
        <div>
          <h2>Latest Blogs</h2>
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is the language use to design logic for the web.</p>
          </div>
        </div>
      </main>
    </>
  );
}
