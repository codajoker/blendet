const { operation, numbers } = require("./helpers");
const CalculatorOOP = require("./CalculatorOOPClass");

class ModernCalculator extends CalculatorOOP {
  constructor(operation, numbers) {
    super(operation, numbers);
  }
}
new ModernCalculator(operation, numbers).init();

// new CalculatorOOP(operation, numbers).init();
