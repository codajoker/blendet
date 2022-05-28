const { numbers } = require("../helpers");

const setOperator = (operator) => {
  let total = null;
  switch (operator) {
    case "+":
      total = numbers.reduce((acc, item) => acc + item);
      break;
    case "-":
      total = numbers.reduce((acc, item) => acc - item);
      break;
    case "*":
      total = numbers.reduce((acc, item) => acc * item);
      break;
    case "/":
      total = numbers.reduce((acc, item) => acc / item);
      break;
  }
  return total;
};

module.exports = setOperator;
