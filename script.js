
let display = document.querySelector('.display');

let numbers = {};
let sign = {};

let add = (num1, num2) => +num1 + +num2;

let subtract = (num1, num2) => num1 - num2;

let multiply = (num1, num2) => num1 * num2;

let divide = (num1, num2) => num1 / num2;

function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    return alert("ERROR");
  }
}

const op = document.querySelectorAll('.operator');

op.forEach(item => item.addEventListener("click", saveValues));

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");

one.addEventListener("click", function(){display.innerHTML += "1"})
two.addEventListener("click", function(){display.innerHTML += "2"})
three.addEventListener("click", function(){display.innerHTML += "3"})
four.addEventListener("click", function(){display.innerHTML += "4"})
five.addEventListener("click", function(){display.innerHTML += "5"})
six.addEventListener("click", function(){display.innerHTML += "6"})
seven.addEventListener("click", function(){display.innerHTML += "7"})
eight.addEventListener("click", function(){display.innerHTML += "8"})
nine.addEventListener("click", function(){display.innerHTML += "9"})
zero.addEventListener("click", function(){display.innerHTML += "0"})


function saveValues() {

  if (!numbers[0]) {
  numbers[0] = display.innerHTML;
  console.log(numbers);
  display.innerHTML = "";
  sign.first = this.id;
  console.log(sign)
} else {
  numbers[0] = calculate();
  sign.first = this.id;
  console.log(numbers[0]);
  display.innerHTML = "";

  // This is where I want to display the intermediate result
  // How do I make the display clear when the next number is pressed?

  
};
}

const clear = document.querySelector(".clear");

clear.addEventListener("click", clearScreen);

function clearScreen() {
  display.innerHTML = "";
  numbers = {};
  sign = {};
}

const equals = document.querySelector('.equals');

equals.addEventListener("click", function() {
  let n = calculate();
  let result = parseFloat(n.toFixed(7));
  display.innerHTML = result;
});



function calculate() {
  numbers[1] = display.innerHTML;
  console.log(numbers);
  const num1 = numbers[0];
  const num2 = numbers[1];
  const operator = sign.first;
return operate(num1, num2, operator);
}
