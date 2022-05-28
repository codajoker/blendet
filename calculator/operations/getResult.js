const getResult = (operation, setOperator, showResult) => {
  let total = null;
  switch (operation) {
    case "sum":
      total = setOperator("+");
      showResult(total);
      break;
    case "sub":
      total = setOperator("-");
      showResult(total);
      break;
    case "mult":
      total = setOperator("*");
      showResult(total);
      break;
    case "div":
      total = setOperator("/");
      showResult(total);
      break;
    default:
      showResult("I don't know");
  }
};

module.exports = getResult;
