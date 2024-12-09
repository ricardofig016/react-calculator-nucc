import "./calcButton.module.css";

export default function CalcButton({ value, onClick }) {
  return (
    <button className="calc-button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
}
