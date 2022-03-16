export default function CalculatorDisplay({
  previusOperand,
  currentOperand,
  operation
}) {
  return (
    <div className="calculator-display-container">
      <div className="calculator-display">
        <span className="calculator-display-previusOperand">
          {previusOperand} {operation !== "=" && operation}
        </span>
        <span className="calculator-display-currentOperand">
          {currentOperand}
        </span>
      </div>
    </div>
  );
}
