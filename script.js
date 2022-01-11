let add = (num1, num2) => num1 + num2;

let subtract = (num1, num2) => num1 - num2;

let multiply = (num1, num2) => num1 * num2;

let divide = (num1, num2) => num1 / num2;

function operate() {
  const num1 = prompt("What is your first number?");
  const num2 = prompt("What is your second number?");
  const operator = prompt("What is your operator?");

  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    return alert("Something has gone awry");
  }
}
