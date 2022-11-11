import Image from "next/image";
import Link from "next/link";
import React, { Key, useEffect, useState } from "react";
import { FiGithub, FiGlobe, FiFigma } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import {
  DiReact,
  DiPhotoshop,
  DiJqueryLogo,
  DiPhp,
  DiNpm,
} from "react-icons/di";
import { TbBrandNextjs, TbBrandJavascript } from "react-icons/tb";
import { SiTypescript, SiAdobexd, SiAmazonaws, SiRedux } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";
import styles from "../styles/components/card.module.css";
import Modal from "./modal";

function Card(props: {
  title: string;
  tech: any;
  github: string;
  deployed: string;
  description: string;
  image: any;
  date: string;
  loadTime: any;
  show: boolean;
  type: string;
  demo: string;
  id: string;
  screenshotOne?: string;
  screenshotTwo?: string;
  screenshotThree?: string;
}) {
  const [showState, setShowState] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (props.show) {
      setShowState(true);
    } else {
      setTimeout(() => {
        setShowState(false);
      }, 1500);
    }
  }, [props.show]);

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showModal]);

  return (
    <div key={props.id}>
      {showModal && (
        <Modal
          isShown={showModal}
          closeModal={() => setShowModal(false)}
          title={props.title}
          tech={props.tech}
          deployed={props.deployed}
          github={props.github}
          description={props.description}
          image={props.image}
          date={props.date}
          type={props.type}
          demo={props.demo}
          id={props.id}
          screenshotOne={props.screenshotOne && props.screenshotOne}
          screenshotTwo={props.screenshotTwo && props.screenshotTwo}
          screenshotThree={props.screenshotThree && props.screenshotThree}
        />
      )}
      <div
        className={`${styles.cardWrapper} ${
          styles[props.show ? "show" : "hide"]
        } `}
        style={{
          animationDelay: props.show ? props.loadTime + "s" : "0s",
          display: showState ? "flex" : "none",
        }}
        onClick={() => setShowModal(true)}
      >
        <span className={styles.date}>{props.date}</span>
        <span className={styles.type}>{props.type}</span>
        <div className={styles.imageWrapper}>
          {props.image !== 'none' ? (
            <Image
              src={props.image}
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
          {Array(props.tech).map((techs: any) => {
            return techs.map((language: any, idx: Key | null | undefined) => {
              switch (language.name.toLowerCase()) {
                case "react":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <DiReact />
                    </span>
                  );
                case "nextjs":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <TbBrandNextjs />
                    </span>
                  );
                case "javascript":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <TbBrandJavascript />
                    </span>
                  );
                case "redux":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <SiRedux />
                    </span>
                  );
                case "php":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <DiPhp />
                    </span>
                  );
                case "git":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <FiGithub />
                    </span>
                  );
                case "photoshop":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <DiPhotoshop />
                    </span>
                  );
                case "jquery":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <DiJqueryLogo />
                    </span>
                  );
                case "mysql":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <GrMysql />
                    </span>
                  );
                case "typescript":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <SiTypescript />
                    </span>
                  );
                case "figma":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <FiFigma />
                    </span>
                  );
                case "adobexd":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <SiAdobexd />
                    </span>
                  );
                case "aws":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <SiAmazonaws />
                    </span>
                  );
                case "npm":
                  return (
                    <span key={idx} title={language.name.toUpperCase()}>
                      <DiNpm />
                    </span>
                  );
                default:
                  return <p key={idx}>{techs}</p> ;
              }
            });
          })}
        </div>
        <p className={styles.desc}>{props.description}</p>
        <div className={styles.cardFooter}>
          <button type="button" title="View project information">More info</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
