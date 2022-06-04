const input = document.querySelector(".input");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");
let operation = "";
let firstOperand;
let secondOperand;

const operators = {
  plus: 0,
  subtract: 0,
  divide: 0,
  multiply: 0,
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    const btnClassArray = Array.from(evt.target.classList);

    switch (btnClassArray[1]) {
      case "number":
      case "fraction":
      case "operator":
        operation += evt.target.textContent;
        input.textContent = operation;

        if (evt.target.classList.contains("operator")) {
          switch (evt.target.textContent) {
            case "+":
              operators.plus++;
              break;

            case "-":
              operators.subtract++;
              break;

            case "÷":
              operators.divide++;
              break;

            case "x":
              operators.plus++;
              break;
            default:
              break;
          }
        }
        getOperand(operation);
        break;

      case "function":
        if (evt.target.textContent === "del") {
          const operationArray = operation.split("");
          operationArray.splice(operationArray.length - 1, 1);
          operation = operationArray.join("");
          input.textContent = operation;
        } else {
          operation = "";
          input.textContent = "";
          result.textContent = "";
        }
        break;

      case "equal":
        let operationResult = add(firstOperand, secondOperand);
        result.textContent = operationResult;
        break;

      default:
        break;
    }
  });
});

function getOperand(operation) {
  if (operators.plus > 0) {
    const operationArray = operation.split("+");
    firstOperand = +operationArray.shift();
    secondOperand = +operationArray.pop();
    operation = operationArray.join("");
  }
}
