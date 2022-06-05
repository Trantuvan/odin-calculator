function add(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
  if (secondOperand === 0) {
    return "cannot divide by zero";
  }
  return firstOperand / secondOperand;
}

export function operate(operator, firstOperand, secondOperand) {
  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);

    case "-":
      return subtract(firstOperand, secondOperand);

    case "x":
      return multiply(firstOperand, secondOperand);

    case "÷":
      return divide(firstOperand, secondOperand);

    default:
      return "";
  }
}
