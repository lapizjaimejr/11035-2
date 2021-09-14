var arrOfNum = new Array();
var arrMatched = new Array();
var value = 0;
var num;
var index = 0;
var result;

var findDigit = (index) => {
    num = arrOfNum[index];
    while (num > 0) {
        result = num % 10;
    
        if (result === 5) {
            arrMatched.push(arrOfNum[index]);
            break;
        }
        num = (num - (num % 10)) / 10;
    }  
}

while (value >= 0) {
    value = parseInt(prompt("Note: Enter a negative number to stop.\nEnter positive numbers to be stored in the array: "));
    if (value < 0) 
        break;
    else
        arrOfNum.push(value);
}

while (index < arrOfNum.length) {
    findDigit(index);
    index++;
}

if (!arrMatched.length)       
    alert("arrofNum "+"("+"["+arrOfNum+"]"+")" + " => " + "there's no 5 in the array\n" + "// None of the items contain the digit 5");
else
    alert("arrofNum "+"("+"["+arrOfNum+"]"+")" + " => " + "!!!!!\n//" + arrMatched + " contain/s the digit 5");