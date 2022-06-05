export function parseStringToArray(operation) {
  let operationCopy = operation;

  operation = operation.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
  let numbers = operationCopy.split(/[^0-9\.]+/);
  let operators = operation.split("#").filter((element) => element);

  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i]);
    if (i < operators.length) {
      result.push(operators[i]);
    }
  }

  return result;
}
