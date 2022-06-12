import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Home.module.css';

function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vercel Test App - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Here is the About page</h1>
      <Link href={'/'}>
        <a>Back to Home page</a>
      </Link>
    </div>
  );
}

export default About;