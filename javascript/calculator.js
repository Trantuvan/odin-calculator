const input = document.querySelector(".input");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");
let operation = "";
let firstOperand = 0;
let secondOperand = 0;

const OPERATOR = Object.freeze({
  PLUS: "+",
  SUBTRACT: "-",
  DIVIDE: "÷",
  MULTIPLY: "x",
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    const btnClassArray = Array.from(evt.target.classList);

    switch (btnClassArray[1]) {
      case "number":
      case "operator":
      case "fraction":
        operation += evt.target.textContent;
        input.textContent = operation;
        break;

      case "function":
        if (evt.target.textContent === "del") {
          const operationArray = operation.split("");
          operationArray.splice(operationArray.length - 1, 1);
          operation = operationArray.join("");
          input.textContent = operation;
        } else {
          operation = "";
          input.textContent = operation;
        }
        break;

      case "equal":
        console.log(operation);
        break;

      default:
        break;
    }
  });
});

// function updateOperands() {
//   const operationArray = operation.split("+");
//   firstOperand = operationArray[0];
//   secondOperand = operationArray[1];
// }
