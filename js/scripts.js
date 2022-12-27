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
addDigit(digit){
//Check if current Operations Already has a dot
if (digit === "." && this.currentOperationText.innerText.includes(".")){


}

  this.currentOperation = digit
  this.updateScreen()
}
//change values of the calculator screen
updateScreen(){
  this.currentOperationText.innerText += this.currentOperation;
}
}

const calc = new Calculator(previusOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      console.log("Op: " + value);
    }
  });
});
