var addition = (a,b) => {return a + b};
var subtraction = (a,b) => {return a - b};
var multiplication = (a,b) => {return a * b};
var division = (a,b) => {return a / b};

var getOperands = () => {
    a = parseFloat(prompt("Enter first number: "));
    b = parseFloat(prompt("Enter second number: ")); 
}

var x = parseInt(prompt ("Enter a number between 0 - 5\n1 = Additinsion\n2 = Subtraction\n3 = Multiplication\n4 = Division"));

switch (x) {
    case 1: getOperands();
            alert(addition(a,b));
        break;
    case 2: getOperands();
            alert(subtraction(a,b));
        break;
    case 3: getOperands();
            alert(multiplication(a,b)); 
        break;
    case 4: getOperands();
            alert(division(a,b));
        break;
    default: alert("Invalid input!");
        break;
}
