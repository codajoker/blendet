class CalculatorOOP {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }
  setOperator(operator) {
    let total = null;
    switch (operator) {
      case "+":
        total = this.numbers.reduce((acc, item) => acc + item);
        break;
      case "-":
        total = this.numbers.reduce((acc, item) => acc - item);
        break;
      case "*":
        total = this.numbers.reduce((acc, item) => acc * item);
        break;
      case "/":
        total = this.numbers.reduce((acc, item) => acc / item);
        break;
    }
    return total;
  }
  getResult(operation, setOperator, showResult) {
    let total = null;
    switch (operation) {
      case "sum":
        total = this.setOperator("+");
        this.showResult(total);
        break;
      case "sub":
        total = this.setOperator("-");
        this.showResult(total);
        break;
      case "mult":
        total = this.setOperator("*");
        this.showResult(total);
        break;
      case "div":
        total = this.setOperator("/");
        this.showResult(total);
        break;
      default:
        this.showResult("I don't know");
    }
  }
  showResult(result) {
    console.log(result);
  }
  init() {
    this.getResult(this.operation, this.setOperator, this.showResult);
  }
}

module.exports = CalculatorOOP;
