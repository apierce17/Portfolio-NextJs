import Image from "next/image";
import Link from "next/link";
import { Key, useEffect, useState } from "react";
import { FiGithub, FiGlobe, FiFigma } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import {
  DiReact,
  DiPhotoshop,
  DiJqueryLogo,
  DiPhp,
  DiNpm,
} from "react-icons/di";
import {
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiTypescript, SiAdobexd, SiAmazonaws, SiRedux } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { AiOutlineYoutube, AiOutlineCloseCircle } from "react-icons/ai";
import styles from "../styles/components/modal.module.css";
import FocusTrap from "focus-trap-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Modal(props: {
  isShown: boolean;
  closeModal: () => void;
  title: string;
  tech: any;
  deployed: string;
  github: string;
  description: string;
  image: string;
  date: string;
  type: string;
  demo: string;
  id: string;
  screenshotOne?: any;
  screenshotTwo?: any;
  screenshotThree?: any;
  longDesc: string;
}) {
  let screenshots = [
    props.screenshotOne != undefined && props.screenshotOne,
    props.screenshotTwo != undefined && props.screenshotTwo,
    props.screenshotThree != undefined && props.screenshotThree,
  ];

  return (
    <FocusTrap active={true}>
      <div className={styles.modalWrapper}>
        <button
          title="Close modal"
          type="button"
          className={styles.modalBg}
          onClick={props.closeModal}
        />
        <div className={styles.modal}>
          {props.screenshotOne && (
            <Carousel
              infiniteLoop={true}
              interval={10000}
              showThumbs={false}
              autoPlay={true}
            >
              {screenshots.map((image: any, idx: Key) => {
                return <img src={image} alt={image} key={idx} />;
              })}
            </Carousel>
          )}
          <button
            type="button"
            title="close modal"
            onClick={props.closeModal}
            className={styles.closeModal}
          >
            <AiOutlineCloseCircle />
          </button>
          <div className={styles.topRow}>
            <h3>{props.title}</h3>
            <ul className={styles.languages}>
              {/* {props.tech.map((language: any, idx: Key) => {
                return <li key={idx}>{language.name.toUpperCase()}</li>;
              })} */}
              {Array(props.tech).map((techs: any) => {
                return techs.map(
                  (language: any, idx: Key | null | undefined) => {
                    switch (language.name.toLowerCase()) {
                      case "react":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <DiReact />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "nextjs":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <TbBrandNextjs />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "javascript":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <TbBrandJavascript />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "redux":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <SiRedux />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "php":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <DiPhp />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "git":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <FiGithub />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "photoshop":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <DiPhotoshop />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "jquery":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <DiJqueryLogo />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "mysql":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <GrMysql />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "typescript":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <TbBrandTypescript />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "figma":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <FiFigma />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "adobexd":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <SiAdobexd />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "aws":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <SiAmazonaws />
                            <p>{language.name}</p>
                          </button>
                        );
                      case "npm":
                        return (
                          <button key={idx} title={language.name.toUpperCase()}>
                            <DiNpm />
                            <p>{language.name}</p>
                          </button>
                        );
                      default:
                        return <p key={idx}>{techs}</p>;
                    }
                  }
                );
              })}
            </ul>
          </div>
          <div className={styles.details}>
            <p className={styles.desc}>{props.longDesc}</p>
            <div className={styles.links}>
              {props.github && (
                <Link target="_blank" href={props.github} title="Go to project Github">
                  <FiGithub /> <p>Github</p>
                </Link>
              )}
              {props.deployed && (
                <Link target="_blank" href={props.deployed} title="Go to deployed project">
                  <FiGlobe /> <p>Deployed Link</p>
                </Link>
              )}
              {props.demo && (
                <Link target="_blank" href={props.demo} title="Go to demo">
                  <AiOutlineYoutube /> <p>Demo</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
}

export default Modal;
