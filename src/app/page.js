import Image from "next/image";
import HomeButton from "../components/homeButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome!!</h1>
      <HomeButton href={"/calculator"}>
        <Image src="/icons/calculator.png" width={14} height={20} alt="Calculator" />
        <span>Calculator</span>
      </HomeButton>
      <HomeButton href={"/bmi"}>
        <Image src="/icons/scale.png" width={20} height={20} alt="Scale" />
        <span>BMI Calculator</span>
      </HomeButton>
    </div>
  );
}
