import Card from "../../components/card";
import styles from "../../styles/pages/Projects.module.css";

import { Projects } from "../../data/projects";
import { useEffect, useState } from "react";
import { FiFigma } from "react-icons/fi";
import { DiReact, DiPhotoshop, DiJqueryLogo, DiPhp, DiNpm } from "react-icons/di";
import {
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbFilterOff,
} from "react-icons/tb";
import { FaWordpressSimple } from "react-icons/fa";
import { SiAmazonaws } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const FilterOptions = [
  { title: "Figma", icon: <FiFigma /> },
  { title: "React", icon: <DiReact /> },
  { title: "Photoshop", icon: <DiPhotoshop /> },
  { title: "JQuery", icon: <DiJqueryLogo /> },
  { title: "PHP", icon: <DiPhp /> },
  { title: "NextJS", icon: <TbBrandNextjs /> },
  { title: "JavaScript", icon: <TbBrandJavascript /> },
  { title: "HTML", icon: <TbBrandHtml5 /> },
  { title: "CSS", icon: <TbBrandCss3 /> },
  { title: "WordPress", icon: <FaWordpressSimple /> },
  { title: "AWS", icon: <SiAmazonaws /> },
  { title: "MySQL", icon: <GrMysql /> },
  { title: "NPM", icon: <DiNpm /> },
];

export default function ProjectsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("none");
  let SortedProjects = Projects.sort((a, b) => a.order - b.order);

  useEffect(() => {
    setSelectedLanguage("none");
  }, []);

  return (
    <div className={styles.container}>
      <h1>Projects</h1>
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
                  styles[selectedLanguage === skill.title ? "active" : ""]
                }
              >
                {skill.icon}
              </span>
            );
          })}
          {selectedLanguage !== "none" && (
            <span title="Clear Filter" className={styles.clear}>
              <TbFilterOff onClick={() => setSelectedLanguage("none")} />
            </span>
          )}
        </div>
      </div>
      <div className={styles.cardContainer}>
        {SortedProjects.map((project, idx) => {
          let showHide = project.languages
            .map((language) => {
              if (selectedLanguage === "none") return true;
              return selectedLanguage.toLowerCase() == language.toLowerCase();
            })
            .includes(true);
          return (
            <Card
              show={showHide}
              title={project.title}
              langauges={project.languages}
              deployed={project.deployed}
              github={project.github}
              description={project.description}
              imageName={project.imageName}
              key={project.order}
              date={project.date}
              loadTime={idx / 3}
              type={project.type}
            />
          );
        })}
      </div>
    </div>
  );
}
