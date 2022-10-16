import { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import { useRouter } from "../../node_modules/next/router";
import { Turn as Hamburger } from "hamburger-react";

import styles from "../../styles/layout/navbar.module.css";


// Menu Links
const linksDesktop = [
  { title: "Ashton Pierce", route: "/" },
  { title: "projects", route: "/projects" },
  { title: "about", route: "/about" },
  { title: "contact", route: "/contact" },
];

const linksMobile = [
  { title: "projects", route: "/projects" },
  { title: "about", route: "/about" },
  { title: "contact", route: "/contact" },
];


function Navbar() {
  const [isMobile, setIsMobile] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const router = useRouter();

  // Check screen width
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  // Listen for screen resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.onload = handleResize;
  });


  // Reusable nav link
  const NavLink = (props: { route: string; title: string }) => {
    return (
      <Link href={props.route} passHref>
        <a
          className={`${styles.link} ${
            styles[router.pathname == props.route ? "active" : ""]
          }`}
          onClick={() => setShowMenu(true)}
        >
          {props.title}
        </a>
      </Link>
    );
  };

  return isMobile ? (
    <nav className={styles.navbar}>
      <NavLink route="/" title="Ashton Pierce" />
      <Hamburger
        onToggle={() => setShowMenu(!showMenu)}
        rounded
        toggled={!showMenu}
        label="Show menu"
        hideOutline={false}
      />
      <div
        className={`${styles.linkWrapper} ${
          styles[showMenu ? "hide" : "show"]
        }`}
      >
        {linksMobile.map((link, idx) => {
          return <NavLink route={link.route} title={link.title} key={idx} />;
        })}
      </div>
    </nav>
  ) : (
    <nav className={styles.navbar}>
      {linksDesktop.map((link, idx) => {
        return <NavLink route={link.route} title={link.title} key={idx} />;
      })}
    </nav>
  );
}

export default Navbar;
