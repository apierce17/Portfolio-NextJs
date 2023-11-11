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
import { BiChevronDown, BiLogoTypescript } from "react-icons/bi";

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
        <Link className="button" href="/#contact" passHref>
          Contact Me
        </Link>
      </div>
      <div className={`${styles.imgWrapper} ${styles.stack}`}>
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
          <div className={styles.circleArm}>
          <SiPowerautomate
              title="Power Automate"
              className={
                styles[
                  stack.length === 0 || stack === "middle" ? "show" : "hidden"
                ]
              }
            />
            
              <SiCss3
                  title="CSS"
                  className={
                    styles[
                      stack.length === 0 || stack === "front" ? "show" : "hidden"
                    ]
                  }
                />
          </div>
          <div className={styles.circleArm}>
            <DiMongodb
              title="MongoDB"
              className={
                styles[
                  stack.length === 0 || stack === "back" ? "show" : "hidden"
                ]
              }
            />
          <SiPowerapps
              title="PowerApps"
              className={
                styles[
                  stack.length === 0 || stack === "front" ? "show" : "hidden"
                ]
              }
            />
          </div>
          <div className={styles.circleArm}>
            <SiAdobephotoshop
              title="Adobe PhotoShop"
              className={
                styles[stack.length === 0 || stack === "ui" ? "show" : "hidden"]
              }
            /><FaReact
            title="React"
            className={
              styles[
                stack.length === 0 || stack === "front" ? "show" : "hidden"
              ]
            }
          />
            
          </div>
          <div className={styles.circleArm}>
            
            <SiAdobexd
              title="Adobe XD"
              className={
                styles[stack.length === 0 || stack === "ui" ? "show" : "hidden"]
              }
            />
            <SiPhp
              title="PHP"
              className={
                styles[
                  stack.length === 0 || stack === "middle" ? "show" : "hidden"
                ]
              }
            />
          </div>
          <div className={styles.circleArm}>
            <TbBrandNextjs
              title="NextJS"
              className={
                styles[
                  stack.length === 0 || stack === "front" ? "show" : "hidden"
                ]
              }
            />
            <SiNodedotjs
              title="NodeJS"
              className={
                styles[
                  stack.length === 0 || stack === "middle" ? "show" : "hidden"
                ]
              }
            />
          </div>
          <div className={styles.circleArm}>
            <BiLogoTypescript
              title="TypeScript"
              className={
                styles[
                  stack.length === 0 || stack === "front" ? "show" : "hidden"
                ]
              }
            />
            <GrMysql
              title="MySQL"
              className={
                styles[
                  stack.length === 0 || stack === "back" ? "show" : "hidden"
                ]
              }
            />
          </div>
          <div className={styles.circleArm}>
            <AiFillHtml5
              title="HTML"
              className={
                styles[
                  stack.length === 0 || stack === "front" ? "show" : "hidden"
                ]
              }
            />
            <FiFigma
              title="Figme"
              className={
                styles[stack.length === 0 || stack === "ui" ? "show" : "hidden"]
              }
            />
            
          </div>
        </span>
      </div>
      <Link className="chevron" href="/#projects" passHref>
        <BiChevronDown />
      </Link>
    </section>
  );
}
