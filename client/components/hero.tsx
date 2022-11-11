import Link from 'next/link';
import styles from '../styles/components/Hero.module.css';
import Image from "../node_modules/next/image";
import ashton from "../public/images/Ashton-Triangle.png";
export default function Hero() {

  return (
    <section className={styles.contentWrapper} id="home">
      <div className={styles.text}>
        <h1>Ashton Pierce</h1>
        <div className={styles.subtext}>
          <p>Front End Developer</p>
        </div>
        <Link href='/contact' passHref>
          <a className="button">Contact Me</a>
        </Link>
      </div>
      <div className={`${styles.imgWrapper} ${'slideIn'}`}>
        <Image src={ashton} layout="responsive" alt="" priority/>
      </div>
    </section>
  );
}
