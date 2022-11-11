import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/components/About.module.css';

export default function About() {
  const [pOne, setPOne] = useState('');
  const [pTwo, setPTwo] = useState('');
  const [pThree, setPThree] = useState('');
  const [loadedText, setLoadedText] = useState(false);
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/about');
      const data = await response.json();
      return data;
    };
    fetchProjects()
    .then((res) => {
      setPOne(res.pone)
      setPTwo(res.ptwo)
      setPThree(res.pthree)
      setLoadedText(true);
    });
  }, []);

  return (
    <>
    <NextSeo 
      title="About"
    />
    <div className={styles.container}>
      {loadedText && 
      <div className={`${styles.about} ${'slideIn'}`}>
        <h2>About Me</h2>
          <p>{pOne}</p>
          <p>{pTwo}</p>
          <p>{pThree}</p>
        <a className="button" download href='/pdf/AshtonPierceResume.pdf'>Full Resume</a>
      </div>
      }
    </div>
    </>
  );
}