import { NextSeo } from "next-seo";
import Link from "next/link";
import styles from "../styles/pages/About.module.css";

export default function About() {
  return (
    <>
    <NextSeo 
      title="About"
    />
    <div className={styles.container}>
      <div className={`${styles.about} ${'slideIn'}`}>
        <h1>About Me</h1>
        <p>
        Passionate Front-End Developer, Graphic Designer, and UI/UX Designer located just outside of Nashville, TN. I love all things art and tech, whether trying to design an intuitive UI or automating processes that save people time.
        </p>
        <p>
        A well-organized person, problem solver, and dedicated thinker with attention to detail. Outside of art and tech, I enjoy spending time with my wife, and watching a good movie or TV show.
        </p>
        <p>
        I am always looking for a new project to work on. Let&apos;s {' '}
          <Link href="/contact" passHref>
            get in touch
          </Link>{" "}
          {' '}and see what we can come up with!
        </p>
        <a className="button" download href='/pdf/AshtonPierceResume.pdf'>Full Resume</a>
      </div>
    </div>
    </>
  );
}
