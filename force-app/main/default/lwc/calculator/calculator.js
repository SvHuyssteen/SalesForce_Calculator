import { LightningElement } from "lwc";

export default class Calculator extends LightningElement {
  currentResult;
  resultHistory = [];
  showPreviousResult = false;

  firstNumber;
  secondNumber;

  numberChangeHandler = (e) => {
    const inputBoxName = e.target.name;
    if (inputBoxName === "input-1") {
      this.firstNumber = e.target.value;
    } else if (inputBoxName === "input-2") {
      this.secondNumber = e.target.value;
    }
    console.log("first value is: " + this.firstNumber);
    console.log("second value is: " + this.secondNumber);
  };

  addHandler = () => {
    const firstN = parseInt(this.firstNumber, 10);
    const secondN = parseInt(this.secondNumber, 10);
    this.currentResult = firstN + secondN;
    this.resultHistory.push(this.currentResult);
    console.log(this.resultHistory);
  };

  subtractHandler = () => {
    const firstN = parseInt(this.firstNumber, 10);
    const secondN = parseInt(this.secondNumber, 10);
    this.currentResult = firstN - secondN;
    this.resultHistory.push(this.currentResult);
    console.log(this.resultHistory);
  };

  multiplyHandler = () => {
    const firstN = parseInt(this.firstNumber, 10);
    const secondN = parseInt(this.secondNumber, 10);
    this.currentResult = firstN * secondN;
    this.resultHistory.push(this.currentResult);
    console.log(this.resultHistory);
  };

  divideHandler = () => {
    const firstN = parseInt(this.firstNumber, 10);
    const secondN = parseInt(this.secondNumber, 10);
    this.currentResult = firstN / secondN;
    this.resultHistory.push(this.currentResult);
    console.log(this.resultHistory);
  };

  showPreviousResultToggleHandler = (e) => {
    let toggleState = e.detail.checked;
    this.showPreviousResult = toggleState;
  };
}
