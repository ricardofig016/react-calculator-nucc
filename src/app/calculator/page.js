"use client";

import { useState } from "react";
import styles from "./page.module.css";
import CalcButton from "../../components/calcButton";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (value == "=") calculate();
    else if (display === "0" || display === "Error") setDisplay(value);
    else if (display.length < 13) setDisplay(display + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => setDisplay("0");

  return (
    <div className="mainContainer">
      <div className={styles.calcContainer}>
        <div className={styles.display} onClick={clear}>
          {display}
        </div>
        <div className={styles.row}>
          <CalcButton value="7" onClick={handleClick}></CalcButton>
          <CalcButton value="8" onClick={handleClick}></CalcButton>
          <CalcButton value="9" onClick={handleClick}></CalcButton>
          <CalcButton value="/" onClick={handleClick}></CalcButton>
        </div>
        <div className={styles.row}>
          <CalcButton value="4" onClick={handleClick}></CalcButton>
          <CalcButton value="5" onClick={handleClick}></CalcButton>
          <CalcButton value="6" onClick={handleClick}></CalcButton>
          <CalcButton value="*" onClick={handleClick}></CalcButton>
        </div>
        <div className={styles.row}>
          <CalcButton value="1" onClick={handleClick}></CalcButton>
          <CalcButton value="2" onClick={handleClick}></CalcButton>
          <CalcButton value="3" onClick={handleClick}></CalcButton>
          <CalcButton value="-" onClick={handleClick}></CalcButton>
        </div>
        <div className={styles.row}>
          <CalcButton value="0" onClick={handleClick}></CalcButton>
          <CalcButton value="." onClick={handleClick}></CalcButton>
          <CalcButton value="=" onClick={handleClick}></CalcButton>
          <CalcButton value="+" onClick={handleClick}></CalcButton>
        </div>
      </div>
    </div>
  );
}
