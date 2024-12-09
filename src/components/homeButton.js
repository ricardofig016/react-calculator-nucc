import Link from "next/link";
import styles from "./homeButton.module.css";

export default function HomeButton({ href, children }) {
  return (
    <Link className={styles.btn} href={href}>
      {children}
    </Link>
  );
}
