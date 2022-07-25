import Image from "../node_modules/next/image";

import styles from "../styles/pages/Home.module.css";

import ashton from "../public/images/Ashton-Triangle.png";
import Link from "next/link";
import Button from "../components/button";

export default function Home() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.text}>
        <h1>Ashton Pierce</h1>
        <div className={styles.subtext}>
          <p>Front End Developer</p>
          <p>UI Designer</p>
        </div>
        <Button text="Contact Me" link="/contact"/>
      </div>
      <div className={`${styles.imgWrapper} ${'slideIn'}`}>
        <Image src={ashton} layout="responsive" alt="" />
      </div>
    </div>
  );
}
