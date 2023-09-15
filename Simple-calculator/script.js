var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");

num1 = parseInt(num1);
num2 = parseInt(num2);

var result;

if (isNaN(num1) || isNaN(num2)) {
  alert("Not a number");
} else {
  var operation = prompt(`Select an operation:
1. Addition
2. Subtraction
3. Multiplication
4. Division`);

  if (operation <= 4 && operation >= 1) {
    switch (operation) {
      case "1":
        result = num1 + num2;
        break;
      case "2":
        result = num1 - num2;
        break;
      case "3":
        result = num1 * num2;
        break;
      case "4":
        result = num1 / num2;
        break;
    }
    alert("Result: " + result);
  } else {
    alert("Invalid Operation");
  }
}