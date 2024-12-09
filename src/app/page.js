import Image from "next/image";
import HomeButton from "../components/homeButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="mainContainer">
      <h1>Welcome!!</h1>
      <HomeButton href={"/calculator"}>
        <Image src="/images/icons/calculator.png" width={14} height={20} alt="Calculator" />
        <span className={styles.linkText}>Calculator</span>
      </HomeButton>
      <HomeButton href={"/bmi"}>
        <Image src="/images/icons/scale.png" width={20} height={20} alt="Scale" />
        <span className={styles.linkText}>BMI Calculator</span>
      </HomeButton>
    </div>
  );
}
