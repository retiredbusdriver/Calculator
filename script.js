function add (a,b) {
    return +a + +b;
}

function subtract (a,b) {
    return +a - +b;
}

function multiply (a,b) {
    return +a * +b;
}

function divide (a,b) {
    return +a / +b;
}

let userChoice = prompt('Please pick between add, subtract, multiply, or divide');
let number1 = +prompt('Please enter the first number');
let number2 = +prompt('Please enter the second number');

function operate (str, num1, num2) {
    if (str.toLowerCase() == 'add') {
        return add(num1,num2);
    }
    else if (str.toLowerCase() == 'subtract') {
        return subtract(num1,num2);
    }
    else if (str.toLowerCase() == 'multiply') {
        return multiply(num1,num2);
    }
    else if (str.toLowerCase() == 'divide') {
        return divide(num1,num2);
    }
    else {
        return 'Please enter an operator choice correctly';
    }
}

console.log(operate(userChoice,number1,number2));