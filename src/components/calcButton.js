import styles from "./calcButton.module.css";

export default function CalcButton({ value, onClick }) {
  return <button className={styles.btn} onClick={() => onClick(value)}></button>;
}
