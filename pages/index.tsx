import Image from "../node_modules/next/image";

import styles from "../styles/pages/Home.module.css";

import ashton from "../public/images/Ashton-Triangle.png";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
    <NextSeo 
      title="Home"
    />
    <div className={styles.contentWrapper}>
      <div className={styles.text}>
        <h1>Ashton Pierce</h1>
        <div className={styles.subtext}>
          <p>Front End Developer</p>
          <p>UI Designer</p>
        </div>
        <Link href='/contact' passHref>
          <a className="button">Contact Me</a>
        </Link>
      </div>
      <div className={`${styles.imgWrapper} ${'slideIn'}`}>
        <Image src={ashton} layout="responsive" alt="" />
      </div>
    </div>
    </>
  );
}
