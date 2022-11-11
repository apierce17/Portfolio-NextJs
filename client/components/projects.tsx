import { NextSeo } from 'next-seo';
import { FiFigma } from 'react-icons/fi';
import { DiReact, DiPhotoshop, DiPhp, DiNpm } from 'react-icons/di';
import { TbBrandNextjs, TbBrandJavascript, TbFilterOff } from 'react-icons/tb';
import { SiAmazonaws, SiRedux } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import styles from '../styles/components/Projects.module.css';
import Modal from './modal';


const FilterOptions = [
  { title: 'Figma', icon: <FiFigma /> },
  { title: 'React', icon: <DiReact /> },
  { title: 'Photoshop', icon: <DiPhotoshop /> },
  { title: 'PHP', icon: <DiPhp /> },
  { title: 'NextJS', icon: <TbBrandNextjs /> },
  { title: 'JavaScript', icon: <TbBrandJavascript /> },
  { title: 'Redux', icon: <SiRedux /> },
  { title: 'AWS', icon: <SiAmazonaws /> },
  { title: 'MySQL', icon: <GrMysql /> },
  { title: 'NPM', icon: <DiNpm /> },
];

export default function ProjectsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('none');
  const [SortedProjects, setSortedProjects] = useState([]);
  
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects');
      const data = await response.json();
      return data;
    };
    fetchProjects()
    .then((res) => {
      setSortedProjects(res.docs.sort((a : any, b : any) => a.order - b.order));
    });
    setSelectedLanguage('none');
  }, []);

  return (
    <>
      <NextSeo title='Projects' />
      <div className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.skillList}>
          <p>Click an icon to show projects with that skill only!</p>
          <div className={styles.iconContainer}>
            {FilterOptions.map((skill, idx) => {
              return (
                <span
                  key={idx}
                  title={skill.title}
                  onClick={() => setSelectedLanguage(skill.title)}
                  className={
                    styles[selectedLanguage === skill.title ? 'active' : '']
                  }
                >
                  {skill.icon}
                </span>
              );
            })}
            {selectedLanguage !== 'none' && (
              <span title='Clear Filter' className={styles.clear}>
                <TbFilterOff onClick={() => setSelectedLanguage('none')} />
              </span>
            )}
          </div>
        </div>
        <div className={styles.cardContainer}>
          {SortedProjects.map((project : any, idx) => {
            let showHide = project.tech
              .map((techs : any) => {
                if (selectedLanguage === 'none') return true;
                return selectedLanguage.toLowerCase() == techs.name.toLowerCase();
              })
              .includes(true);
            return (
              <React.Fragment key={project.id}>
                <Card
                  show={showHide}
                  title={project.name}
                  tech={project.tech}
                  deployed={project.deployed}
                  github={project.github}
                  description={project.desc}
                  image={project.image}
                  key={project.idx}
                  date={project.time}
                  loadTime={idx / 3}
                  type={project.type}
                  demo={project.demo}
                  id={project.id}
                  screenshotOne={project.screenshotOne && project.screenshotOne}
                  screenshotTwo={project.screenshotTwo && project.screenshotTwo}
                  screenshotThree={project.screenshotThree && project.screenshotThree}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
