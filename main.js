let numbersButtons = document.querySelectorAll(".numbers .butn");
let operationsButtons = document.querySelectorAll(".operations .butn");
let resultFeild = document.querySelector(".results .result-operation");
let currentOperationFeild = document.querySelector(
  ".current .current-operation"
);

function handelClick(event) {
  let buttonValue = event.target.textContent;

  if (currentOperationFeild.innerHTML == 0) {
    currentOperationFeild.innerHTML = "";
  }

  if (buttonValue != "C" && buttonValue != "=") {
    currentOperationFeild.innerHTML += buttonValue;
  }

  if (buttonValue == "C") {
    currentOperationFeild.innerHTML = "0";
  }

  if (buttonValue == "=") {
    let currentOperation = eval(currentOperationFeild.innerHTML);
    resultFeild.innerHTML = currentOperation;
  }
}

numbersButtons.forEach((number) => {
  number.addEventListener("click", handelClick);
});

operationsButtons.forEach((operation) => {
  operation.addEventListener("click", handelClick);
});
