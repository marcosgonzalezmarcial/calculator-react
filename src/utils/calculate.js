export function calculate({ currentOperand, previousOperand, operation }) {
  const current = parseFloat(currentOperand);
  const prev = parseFloat(previousOperand);

  if (isNaN(current)) return "";
  if (isNaN(prev)) return "";

  let calculation = 0;
  switch (operation) {
    case "+":
      calculation = prev + current;
      break;
    case "-":
      calculation = prev - current;
      break;
    case "X":
      calculation = prev * current;
      break;
    case "/":
      calculation = prev / current;
      break;
    case "=":
      calculation = eval(prev + operation + current);

      break;
    case "%":
      calculation = (prev / 100) * current;
      break;
    default:
      return null;
  }
  return calculation.toFixed(2).toString();
}
