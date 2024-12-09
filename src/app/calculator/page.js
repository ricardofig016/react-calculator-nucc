"use client";

import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="mainContainer">
      <h1>Calculator</h1>
      <div>{display}</div>
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>
      <div>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}
