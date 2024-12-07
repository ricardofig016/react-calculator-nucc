import styles from "./homeButton.module.css";

export default function HomeButton({ href, children }) {
  return (
    <button className={styles.btn}>
      <a href={href}>{children}</a>
    </button>
  );
}
