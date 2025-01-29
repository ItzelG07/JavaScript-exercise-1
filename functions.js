//put script element before the closing body tag

var operator = ("Choose an operation: +, -, *, /");

var number1 = parseFloat (prompt ("Enter first number: "));
var number2 = parseFloat (prompt ("Enter second number: "));
//return { num1, num2};

let result;

if (operator === "+") {
    result = number1 + number2;
}

else if (operator === "-") {
    result =  number1 - number2;
}

else if (operator === "*") {
    result = number1 * number2;
}

else if (operation === "/") {
    result = number1 / number2;
}

if (number2 === 0) {
    result = "Cannot divide by zero";
}

else {
    result = "Invalid Operation";
}

document.write ("The result of the operation is: " + result);

/* 
//put script element before the closing body tag
function getOperation() {
var operation = ("Choose an operation: +, -, *, /");
return operation;
}

function getNumbers() {
var number1 = parseFloat(prompt = ("Enter first number: "));
var number2 = parseFloat(prompt = ("Enter second number: "));
return {number1, number2};
}

function calculate(operation, num1, num2){
if (operator === "+") {
    result = number1 + number2;
}

else if (operator === "-") {
    result =  number1 - number2;
}

else if (operator === "*") {
    result = number1 * number2;
}

else if (operator === "/") {
    result = number1 / number2;
}

if (number2 === 0) {
    result = "Cannot divide by zero";
}

else {
    result = "Invalid Operation";
}
}

function runCalculator() {
  const operation = getOperation();
  const { number1, number2 } = getNumbers();
  //num1 not identified programiz.com
  const result = calculate(operation, num1, num2);
  alert(`Result: ${result}`);
}
// Run the calculator
runCalculator();

*/