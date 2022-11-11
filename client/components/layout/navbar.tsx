import { useState } from "react";
import Link from "../../node_modules/next/link";
import { Turn as Hamburger } from "hamburger-react";

import styles from "../../styles/layout/navbar.module.css";

const links = [
  { title: "projects", route: "#projects" },
  { title: "about", route: "#about" },
  { title: "contact", route: "#contact" },
];

function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className={styles.navbar}>
      <Link href="#home" passHref>
        <a className={`${styles.link}`} onClick={() => setShowMenu(true)}>
          Ashton Pierce
        </a>
      </Link>
      <div className={styles.desktopHide}>
        <Hamburger
          onToggle={() => setShowMenu(!showMenu)}
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
              <Link href={'/' + link.route} passHref key={idx} scroll={false}>
                <a
                  className={`${styles.link}`}
                  onClick={() => setShowMenu(true)}
                >
                  {link.title}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      {links.map((link, idx) => {
        return (
          <Link href={link.route} passHref key={idx}>
            <a
              className={`${styles.link} ${styles.desktopLink}`}
              onClick={() => setShowMenu(true)}
            >
              {link.title}
            </a>
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
