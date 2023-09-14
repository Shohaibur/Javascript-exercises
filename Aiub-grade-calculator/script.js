var number;
number = prompt("Please input your number:")
var grade;

if (number >= 90 && number <= 100) {
  grade = "A+"
}
else if (number >= 85 && number <= 89) {
  grade = "A"
}
else if (number >= 80 && number < 84) {
  grade = "B+"
}
else if (number >= 75 && number <= 79) {
  grade = "B"
}
else if (number >= 70 && number <= 74) {
  grade = "C+"
}
else if (number >= 65 && number <= 69) {
  grade = "C"
}
else if (number >= 60 && number <= 64) {
  grade = "D+"
}
else if (number >= 50 && number <= 59) {
  grade = "D"
}
else if (number >= 0 && number <= 49) {
  grade = "F"
}
else { grade="Invalid Input" }

alert("Your grade: " + grade)
console.log("Your grade: " + grade)