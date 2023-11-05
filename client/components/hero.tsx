import Link from "next/link";
import styles from "../styles/components/Hero.module.css";
import Image from "../node_modules/next/image";
import ashton from "../public/images/Ashton-Triangle.png";
import { useState } from "react";
import {
  AiFillHtml5,
  AiOutlineApi,
  AiOutlineDatabase,
  AiOutlineLayout,
} from "react-icons/ai";
import { DiMongodb } from "react-icons/di";
import { FiCode, FiFigma, FiPenTool } from "react-icons/fi";
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiNodedotjs,
  SiPhp,
  SiCss3,
  SiPowerapps,
  SiPowerautomate,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiChevronDown } from "react-icons/bi";

export default function Hero() {
  const [stack, setStack] = useState("");

  return (
    <section className={styles.contentWrapper} id="home">
      <div className={styles.text}>
        <h1>Ashton Pierce</h1>
        <div className={styles.subtext}>
          <p>Full Stack Developer</p>
          <p>Designer</p>
        </div>
        <Link className="button" href="/#contact" passHref>Contact Me</Link>
      </div>
      <div className={`${styles.imgWrapper} ${styles.stack} slideIn`}>
        {/* <Image src={ashton} layout="responsive" alt="" priority /> */}
        <span className={styles.cards}>
          <button
            onClick={() => (stack !== "ui" ? setStack("ui") : setStack(""))}
            className={styles[stack === "ui" ? "active" : "inactive"]}
          >
            <FiPenTool />
            UI / UX
          </button>
          <button
            onClick={() =>
              stack !== "front" ? setStack("front") : setStack("")
            }
            className={styles[stack === "front" ? "active" : "inactive"]}
          >
            <FiCode />
            FRONT END
          </button>
          <button
            onClick={() =>
              stack !== "middle" ? setStack("middle") : setStack("")
            }
            className={styles[stack === "middle" ? "active" : "inactive"]}
          >
            <AiOutlineApi />
            MIDDLEWARE
          </button>
          <button
            onClick={() => (stack !== "back" ? setStack("back") : setStack(""))}
            className={styles[stack === "back" ? "active" : "inactive"]}
          >
            <AiOutlineDatabase />
            BACKEND
          </button>
        </span>
        <span className={styles.languages}>
          {stack.length === 0 || stack === "ui" ?
            <>
              <FiFigma title="Figme" />
              <SiAdobexd title="Adobe XD" />
              <SiAdobephotoshop title="Adobe PhotoShop" />
            </>
          : ''}
          {stack.length === 0 || stack === "front" ?
            <>
              <FaReact title="React" />
              <TbBrandNextjs title="NextJS" />
              <AiFillHtml5 title="HTML" />
              <SiCss3 title="CSS" />
              <SiPowerapps title="PowerApps" />
            </>
          : ''}
          {stack.length === 0 || stack === "middle" ?
            <>
              <SiNodedotjs title="NodeJS" />
              <SiPhp title="PHP" />
              <SiPowerautomate title="Power Automate" />
            </>
          : ''}
          {stack.length === 0 || stack === "back" ?
            <>
              <DiMongodb title="MongoDB" />
              <GrMysql title="MySQL" />
            </>
          : ''}
        </span>
      </div>
      <Link className="chevron" href="/#projects" passHref><BiChevronDown/></Link>
    </section>
  );
}
