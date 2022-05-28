// console.log(process.env.olya);
// console.log(process.env.vlad);
// console.log(process.argv);
// console.log(process.env.NODE_ENV);

// sum sub mult div
const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((item) => Number(item));
// console.log(operation);
// console.log(args);
// console.log(numbers);
// const sum = numbers.reduce((acc, item) => acc + item);
// console.log(sum);
// const sub = numbers.reduce((acc, item) => acc - item);
// console.log(sub);
// const mult = numbers.reduce((acc, item) => acc * item);
// console.log(mult);
// const div = numbers.reduce((acc, item) => acc / item);
// console.log(div);

const showResult = (result) => {
  console.log(result);
};

const setOperator = (operator) => {
  let total = null;
  // total = numbers.reduce((acc, item) => acc + item);
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

getResult(operation, setOperator, showResult);
