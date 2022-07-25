import Link from "next/link";

import styles from '../styles/components/button.module.css'

function Button(props: { link: string; text: string }) {
  return (
    <Link href={props.link} passHref>
      <a className={`${styles.button}`}>{props.text}</a>
    </Link>
  );
}

export default Button;
