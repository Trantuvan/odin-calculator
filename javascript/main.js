import { parseStringToArray } from "./parser.js";
import { operate } from "./calculator.js";

const screenInput = document.querySelector(".input");
const screenResult = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");
let operation = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    const btnClassArray = Array.from(evt.target.classList);

    switch (btnClassArray[1]) {
      case "number":
      case "fraction":
      case "operator":
        operation += evt.target.textContent;
        screenInput.textContent = operation;
        break;

      case "function":
        if (evt.target.textContent === "del") {
          const operationArray = operation.split("");
          operationArray.splice(operationArray.length - 1, 1);
          operation = operationArray.join("");
          screenInput.textContent = operation;
        } else {
          operation = "";
          screenInput.textContent = "";
          screenResult.textContent = "";
        }
        break;

      case "equal":
        const inputArray = parseStringToArray(operation);
        getOperation(inputArray);
        screenResult.textContent = inputArray.join("");

      default:
        break;
    }
  });
});

function getOperation(inputArray) {
  const operatorsOrder = ["x", "÷", "+", "-"];
  let currentOperator = "";

  operatorsOrder.forEach((operator) => {
    currentOperator = operator;

    while (inputArray.some((elem) => elem === operator)) {
      const operatorIndex = inputArray.findIndex((elem) => elem === operator);

      if (operatorIndex !== -1) {
        const operationArray = inputArray.splice(operatorIndex - 1, 3);
        const firstOperator = +operationArray[0];
        const secondOperator = +operationArray[operationArray.length - 1];
        const tempResult = operate(
          currentOperator,
          firstOperator,
          secondOperator
        );

        inputArray.splice(operatorIndex - 1, 0, tempResult);
      }
    }
  });
}

const operators = {
  "+": "+",
  "-": "-",
  "*": "x",
  "/": "÷",
};

window.addEventListener("keydown", (evt) => {
  // * display input on screenInput
  if (
    (evt.key >= 0 && evt.key <= 9) ||
    operators[evt.key] === "+" ||
    operators[evt.key] === "-" ||
    operators[evt.key] === "x" ||
    operators[evt.key] === "÷"
  ) {
    switch (evt.key) {
      case "+":
        operation += operators[evt.key];
        break;

      case "-":
        operation += operators[evt.key];
        break;

      case "*":
        operation += operators[evt.key];
        break;

      case "/":
        operation += operators[evt.key];
        break;

      default:
        operation += evt.key;
        break;
    }
    screenInput.textContent = operation;
  }

  // *delete screenInput
  if (evt.key === "Backspace") {
    const operationArray = operation.split("");
    operationArray.splice(operationArray.length - 1, 1);
    operation = operationArray.join("");
    screenInput.textContent = operation;
  } else if (evt.key === "Escape") {
    operation = "";
    screenInput.textContent = "";
    screenResult.textContent = "";
  }

  //* calculate
  if (evt.key === "Enter") {
    const inputArray = parseStringToArray(operation);
    getOperation(inputArray);
    screenResult.textContent = inputArray.join("");
  }
});
