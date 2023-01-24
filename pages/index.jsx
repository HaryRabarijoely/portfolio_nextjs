import Link from 'next/link';
// import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Hary</h1>
          <h1>ANDRIANARISOA</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Hary ANDRIANARISOA</h1>
            <h6 className={styles.bio}>Developpeur full stack Ruby on Rails / ReactJs</h6>
            <Link href="/projects">
              <button className={styles.button}>Mes projets</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Me contacter</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
