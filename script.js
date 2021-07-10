const main = document.querySelector('main');
const displayText = document.getElementsByClassName('display')[0];
const clearBtn = document.getElementById('clear-button');
const numBtns = document.querySelectorAll('button.number-button');
const operatorBtns = document.querySelectorAll('button.operator-button');
const equalBtn = document.getElementById('equal-button');


function add(x, y){ return x + y;}

function subtract(x, y){ return x - y;}

function multiply(x, y){ return x * y;}

function divide(x, y){ return x/y;}

function operator(numArray, operatorArray){
    let answer = parseInt(numArray[0], 10);
    for(i = 1; i < numArray.length; i++){
        if(operatorArray[i-1] == '+'){ answer = add(answer, parseInt(numArray[i]), 10);}
        else if(operatorArray[i-1] == '-'){ answer = subtract(answer, parseInt(numArray[i], 10));}
        else if(operatorArray[i-1] == '*'){ answer = multiply(answer, parseInt(numArray[i], 10));}
        else if(operatorArray[i-1] == '/'){ answer = divide(answer, parseInt(numArray[i], 10));}
    }
    console.log(answer);
}

let numBtnsArray = Array.from(numBtns);

for(let i = 0; i<numBtnsArray.length; i++){
    numBtnsArray[i].addEventListener('click', () =>{
        displayText.textContent += numBtnsArray[i].textContent;
        numInput(numBtnsArray[i].textContent);
    });
}

let operatorArray = Array.from(operatorBtns); //operatorBtns is a node list and needs to be converted to an array

for(let i = 0; i<operatorArray.length-2; i++){ //subracted 2 so that the word equal and clear dont show when pressed
    operatorArray[i].addEventListener('click', () =>{
        displayText.textContent += operatorArray[i].textContent;
        operatorInput(operatorArray[i].textContent);
    });
}

let numInputArray = []; //create array of number inputs so that I can use each element in opreator function
let operatorInputArray = [];

function numInput(x){
    numInputArray.push(x);
    console.log(numInputArray);
}

function operatorInput(y){
    operatorInputArray.push(y);
    console.log(operatorInputArray);
}

equalBtn.addEventListener('click', () =>{
    console.log(displayText.textContent);
    operator(numInputArray, operatorInputArray);
});

clearBtn.addEventListener('click', () => {
    displayText.textContent = "";
    numInputArray = [];
    operatorInputArray = [];
});