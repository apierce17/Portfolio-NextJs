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
import { TbBrandNextjs, TbBrandJavascript } from "react-icons/tb";
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
                return (
                  <img src={image} alt={image} key={idx}/>
                )
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
          <div className={styles.icons}>
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
          {props.demo && (
            <Link href={props.demo} passHref>
              <span title="Go to demo">
                <a target="_blank">
                  <AiOutlineYoutube />
                </a>
              </span>
            </Link>
          )}
          </div>
          </div>
          <div className={styles.details}>
            <p>{props.longDesc}</p>
            <ul>
              {props.tech.map((language : any, idx: Key) => {
                return <li key={idx}>{language.name.toUpperCase()}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
}

export default Modal;
