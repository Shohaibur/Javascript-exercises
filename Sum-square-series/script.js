var n = prompt("Enter number of terms :");
n = parseInt(n);
var sum = "";
var x = 0;

if (isNaN(n)) {
  alert("Invalid");

} else {
  for (var i = 1; i <= n; i++) {
    x += i * i;
    sum += i * i;

    if (i == n) {
      continue;
    }
    sum += "+";
  }
  alert(`${sum} = ${x}`);
}
