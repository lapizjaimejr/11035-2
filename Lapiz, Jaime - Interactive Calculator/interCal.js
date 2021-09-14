var firstNum = document.getElementById("fnum");
var secondNum = document.getElementById("snum");

var plus = document.getElementById("add");
var subtract = document.getElementById("sub");
var multiply = document.getElementById("mul");
var divide = document.getElementById("div");
var ans = document.getElementById("answer");

var themeSwitch = document.getElementById("flexSwitchCheckDefault");


function addition () {
    var result = parseFloat(firstNum.value) + parseFloat(secondNum.value);
    ans.innerText = result;
}

function subtraction () {
    var result = parseFloat(firstNum.value) - parseFloat(secondNum.value);
    ans.innerText = result;
}

function multiplication () {
    var result = parseFloat(firstNum.value) * parseFloat(secondNum.value);
    ans.innerText = result;
}

function division () {
    var result = parseFloat(firstNum.value) / parseFloat(secondNum.value);
    ans.innerText = result;
}

function darkModeOn() {
    document.body.classList.add("dark-mode");
}

function darkModeOff() {
    document.body.classList.remove("dark-mode");
}

function checkMode() {
    if (themeSwitch.checked)
        darkModeOn();
    else
        darkModeOff();
}

plus.addEventListener("click", addition);
subtract.addEventListener("click", subtraction);
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", division);
themeSwitch.addEventListener("click", checkMode);

    