//put script element before the closing body tag in HTML file

// FIRST DRAFT, a complete mess
/*
function getOperation() {
var operation = ("Choose an operation: +, -, *, /");
return operation;
}

function getNumbers() {
var number1 = parseFloat(prompt = ("Enter first number: "));
var number2 = parseFloat(prompt = ("Enter second number: "));
return {number1, number2};
}

function calculate(operation, number1, number2){
if (operation === "+") {
    result = number1 + number2;
}

else if (operation === "-") {
    result =  number1 - number2;
}

else if (operation === "*") {
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
}

function runCalculator() {
  const operation = getOperation();
  const { number1, number2 } = getNumbers();
  //num1 not identified programiz.com
  const result = calculate(operation, number1, number2);
  alert(`Result: ${result}`);
}
// Run the calculator
runCalculator();
*/


// SECOND DRAFT/ just a pop up because i'm using console.log/ need to use document.write instead
/*// operator input
const operator = prompt("Choose an operation (+, -, *, /): ");

// number input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator === '+') {
    result = number1 + number2;
}
else if (operator ==='-') {
    result = number1 - number2;
}
else if (operator ==='*') {
    result = number1 * number2;
}
else if (operator === '/') {
    result = number1 / number2;
}

// error alerts
if (number2 === 0) {
    result = "Cannot divide by zero";
}

else {
    result = "Invalid Operation";
}

// output
// output should use document.write.
console.log (`${number1} ${operator} ${number2} = ${result}`);*/

// THIRD DRAFT, hopefully the last time
// shoud shorten the words, number->num
document.getElementById ('Calculator').addEventListener ('submit', function (event) {
    event.preventDefault(); //make the results stay and not go away quickly

let operator = prompt ("Choose an operation (+, -, *, /): ");
let num1 = parseFloat(prompt('Enter first number: '));
let num2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator === '+') {
    result = num1 + num2;
}
else if (operator ==='-') {
    result = num1 - num2;
}
else if (operator ==='*') {
    result = num1 * num2;
}
else if (operator === '/') {
    if (num2 === 0) {
        alert ("Cannot divide by zero");
        return;
    }
    result = num1 / num2;
}

// error alerts
else {
    alert ("Invalid Operation");
    return;
}

document.getElementById ('result').innerText = `Result: ${num1} ${operator} ${num2} = ${result}`;
});