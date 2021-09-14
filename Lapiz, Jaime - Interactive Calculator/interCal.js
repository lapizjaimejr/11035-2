var addition = (a,b) => {return a + b};
var subtraction = (a,b) => {return a - b};
var multiplication = (a,b) => {return a * b};
var division = (a,b) => {return a / b};

var add = document.getElementbyID("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");

add.addEventListener("click", addition);