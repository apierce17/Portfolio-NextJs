import { CSSProperties, useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import { Turn as Hamburger } from "hamburger-react";
import Image from "next/image";
import Logo from "../logo";
import { useRouter } from "next/router";
import styles from "../../styles/layout/navbar.module.css";

const links = [
  { title: "projects", route: "#projects" },
  { title: "about", route: "#about" },
  { title: "contact", route: "#contact" },
];

function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY + window.innerHeight;
    const pageHeight = window.document.body.offsetHeight;
    setScrollPosition((position / pageHeight) * 100);
  };

  useEffect(() => {
    handleScroll;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} glass`} tabIndex={-1}>
      <span
        className={styles.progress}
        style={{ width: `${scrollPosition}%` }}
      />
      <div className={styles.content}>
        <Link
          href="#home"
          className={`${styles.logo}`}
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <Logo />
        </Link>
        {/* Mobile Links */}
        <div className={`${styles.desktopHide} ${styles.hamburger}`}>
          <Hamburger
            onToggle={() => {
              setShowMenu(!showMenu);
              showMenu
                ? (document.body.style.overflowY = "hidden")
                : (document.body.style.overflowY = "auto");
            }}
            rounded
            toggled={!showMenu}
            label="Show menu"
            hideOutline={false}
          />
          <div
            className={`${styles.linkWrapperMobile} ${
              styles[showMenu ? "hide" : "show"]
            }`}
          >
            {links.map((link, idx) => {
              return (
                <Link
                  href={"/" + link.route}
                  passHref
                  key={idx}
                  scroll={false}
                  className={`${styles.link}`}
                  onClick={() => setShowMenu(true)}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
        {/* Desktop Links */}
        {links.map((link, idx) => {
          return (
            <Link
              href={link.route}
              passHref
              key={idx}
              className={`${styles.link} ${styles.desktopLink}`}
              onClick={(e) => {
                setShowMenu(true);
              }}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
