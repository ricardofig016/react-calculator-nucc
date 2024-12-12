"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    if (!weight || !height) return;
    const response = await fetch(`http://localhost:3001/api/calculate-bmi?weight=${weight}&height=${height}`);
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="mainContainer">
      <h1>BMI Calculator</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="weight" className={styles.label}>
          Weight (kg)
        </label>
        <input
          id="weight"
          className={styles.input}
          type="number"
          placeholder="Enter your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="height" className={styles.label}>
          Height (m)
        </label>
        <input
          id="height"
          className={styles.input}
          type="number"
          placeholder="Enter your height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button className={styles.btn} onClick={handleCalculate}>
        Calculate
      </button>
      {result && (
        <p className={styles.result}>
          You are <span className={styles.classification}>{result.classification}</span> !
        </p>
      )}
    </div>
  );
}
