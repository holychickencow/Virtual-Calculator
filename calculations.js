let firstValue = '';
let secondValue = '';
let curOp = '';
let finished = false;

const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        updateNumber(button.innerText);
    });
});

operators.forEach((button) => {
    button.addEventListener("click", () => {
        updateOperator(button.innerText);
    });
});


function updateNumber(number){
    finished = false;
    if(number == '.' && firstValue.includes(number)){
        return;
    }
    firstValue = '' + firstValue + number;
    document.getElementById("curVal").innerHTML = firstValue;
    document.getElementById("preVal").innerHTML = secondValue + " " + curOp;
}

function updateOperator(operator){
    if(firstValue == ''  && !finished){
        return;
    }
    else if(firstValue != '' && secondValue != '' && curOp != ''){
        calculate(operator);
        return;
    }
    curOp = operator;
    if(!finished){
        secondValue = firstValue;
    }
    firstValue = '';
    document.getElementById("preVal").innerHTML = secondValue + " " + operator;
    document.getElementById("curVal").innerHTML = firstValue;
}

function calculate(nextOp){
    let result = '';
    switch(curOp){
        case '+':
            result = parseFloat(secondValue) + parseFloat(firstValue);
            break;
        case '-':
            result = parseFloat(secondValue) - parseFloat(firstValue);
            break;
        case 'x':
            result = parseFloat(secondValue) * parseFloat(firstValue);
            break;
        case '÷':
            result = result = parseFloat(secondValue) / parseFloat(firstValue);
            break;
        default: 
            return;
    }
    document.getElementById("preVal").innerHTML = secondValue + " " + curOp + " " + firstValue + " =";
    document.getElementById("curVal").innerHTML = result;
    secondValue = result;
    firstValue = '';
    curOp = nextOp;
    finished = true;
}

function clearAll(){
    firstValue = '';
    secondValue = '';
    curOp = '';
    document.getElementById("preVal").innerHTML = secondValue;
    document.getElementById("curVal").innerHTML = firstValue;
}

function deleteNumber(){
    firstValue = firstValue.substring(0, firstValue.length - 1);
    document.getElementById("curVal").innerHTML = firstValue;
}

function changeSign(){
    if(firstValue.length < 1){
        return;
    }
    if(firstValue.charAt(0) == '-'){
        firstValue = firstValue.substring(1, firstValue.length);
    }
    else{
        firstValue = "-" + firstValue;
    }
    document.getElementById("curVal").innerHTML = firstValue;
}