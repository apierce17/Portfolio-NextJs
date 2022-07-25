import Image from "next/image";
import Link from "next/link";
import { Key, useEffect, useState } from "react";
import { FiGithub, FiGlobe, FiFigma } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { DiReact, DiPhotoshop, DiJqueryLogo, DiPhp, DiNpm } from "react-icons/di";
import {
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
} from "react-icons/tb";
import { FaWordpressSimple } from "react-icons/fa";
import { SiTypescript, SiAdobexd, SiAmazonaws } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import styles from "../styles/components/card.module.css";

function Card(props: {
  title: string;
  langauges: any;
  github: string;
  deployed: string;
  description: string;
  imageName: string;
  date: string;
  loadTime: any;
  show: boolean;
  type: string;
}) {
  const [showState, setShowState] = useState(true);

  useEffect(() => {
    if (props.show) {
      setShowState(true);
    } else {
      setTimeout(() => {
        setShowState(false);
      }, 1500);
    }
  }, [props.show]);

  return (
    <div
      className={`${styles.cardWrapper} ${
        styles[props.show ? "show" : "hide"]
      } `}
      style={{
        animationDelay: props.show ? props.loadTime + "s" : "0s",
        display: showState ? "flex" : "none",
      }}
    >
      <span className={styles.date}>{props.date}</span>
      <span className={styles.type}>{props.type}</span>
      <div className={styles.imageWrapper}>
        {props.imageName ? (
          <Image
            src={"/images/projects/" + props.imageName + ".png"}
            width={100}
            height={100}
            alt={props.title + " logo"}
          />
        ) : (
          <BiCodeAlt />
        )}
      </div>
      <span title={props.title}>
        <h2>{props.title}</h2>
      </span>
      <div className={styles.skillsWrapper}>
        {Array(props.langauges)[0].map(
          (language: string, idx: Key | null | undefined) => {
            switch (language.toLowerCase()) {
              case "react":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <DiReact />
                  </span>
                );
              case "nextjs":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <TbBrandNextjs />
                  </span>
                );
              case "javascript":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <TbBrandJavascript />
                  </span>
                );
              case "html":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <TbBrandHtml5 />
                  </span>
                );
              case "css":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <TbBrandCss3 />
                  </span>
                );
              case "php":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <DiPhp />
                  </span>
                );
              case "wordpress":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <FaWordpressSimple />
                  </span>
                );
              case "git":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <FiGithub />
                  </span>
                );
              case "photoshop":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <DiPhotoshop />
                  </span>
                );
              case "jquery":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <DiJqueryLogo />
                  </span>
                );
              case "mysql":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <GrMysql />
                  </span>
                );
              case "typescript":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <SiTypescript />
                  </span>
                );
              case "figma":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <FiFigma />
                  </span>
                );
              case "adobexd":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <SiAdobexd />
                  </span>
                );
              case "aws":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <SiAmazonaws />
                  </span>
                );
              case "npm":
                return (
                  <span key={idx} title={language.toUpperCase()}>
                    <DiNpm />
                  </span>
                );
              default:
                return language;
            }
          }
        )}
      </div>
      <p className={styles.desc}>{props.description}</p>
      <div className={styles.cardFooter}>
        {props.github && (
          <Link href={props.github} passHref>
            <span title="Go to project Github">
              <a target="_blank">
                <FiGithub />
              </a>
            </span>
          </Link>
        )}
        {props.deployed && (
          <Link href={props.deployed} passHref>
            <span title="Go to deployed project">
              <a target="_blank">
                <FiGlobe />
              </a>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
