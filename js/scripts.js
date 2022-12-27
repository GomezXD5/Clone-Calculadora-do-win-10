const previusOperationText = document.querySelector("#previus-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(previusOperationText, currentOperationText) {
    this.previusOperationText = currentOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }
  //add digit to Calculator Screen
  addDigit(digit) {
    //Check if current Operations Already has a dot
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }

    this.currentOperation = digit;
    this.updateScreen();
  }

  //process all calculator operations

  processOperation(operation) {
    //get current and previous values
    let operationValue;
    const previous = +this.previusOperationText.innerText;
    const current = +this.currentOperationText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      default:
        return;
    }
  }

  //change values of the calculator screen
  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    if (operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      //Check if value is zero, if it just add curret Value
      if (previous === 0) {
        operationValue = current
      }
      //add current Value to previous
      this.previousOperationText.innerText = `${operationValue}  ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }
}

const calc = new Calculator(previusOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});
