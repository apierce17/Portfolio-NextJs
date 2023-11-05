import Link from "../../node_modules/next/link";
import { useRouter } from "../../node_modules/next/router";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import styles from "../../styles/layout/footer.module.css";
import { BiCopyright } from "react-icons/bi";

const links = [
  { title: "LinkedIn", icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ashton-pierce/' },
  { title: "Github", icon: <FiGithub />, url: 'https://github.com/apierce17' },
  { title: "Email", icon: <HiOutlineMail />, url: 'mailto:ashtoncvpierce@gmail.com' },
];

function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.linkWrapper}>
      {links.map((link, idx) => {
        return (
          <a href={link.url} target="_blank" key={idx} rel="noreferrer">
            <span title={link.title}>{link.icon}</span>
          </a>
        );
      })}
      </div>
      <p><BiCopyright/> 2023 Ashton Pierce</p>
    </footer>
  );
}

export default Footer;
