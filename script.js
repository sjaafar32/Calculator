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

function operator(answer){ 
    if(op = '+'){ return add(x, y);}
    else if(op = '-'){ return subtract(x, y);}
    else if(op = '*'){ return multiply(x, y);}
    else if(op = '/'){ return divide(x, y);}
}

clearBtn.addEventListener('click', () => {
    displayText.textContent = "";
});

let numBtnsArray = Array.from(numBtns);

for(let i = 0; i<numBtnsArray.length; i++){
    numBtnsArray[i].addEventListener('click', () =>{
        displayText.textContent += numBtnsArray[i].textContent;
        console.log(displayText);
    });
}

let operatorArray = Array.from(operatorBtns); //operatorBtns is a node list and needs to be converted to an array

for(let i = 0; i<operatorArray.length-2; i++){ //subracted 2 so that the word equal and clear dont show when pressed
    operatorArray[i].addEventListener('click', () =>{
        console.log(operatorArray[i]);
        displayText.textContent += operatorArray[i].textContent;
        console.log(displayText);
    });
}

equalBtn.addEventListener('click', () =>{
    console.log(displayText.textContent);
    
});


console.log(operatorArray.length);
console.log(operatorArray[2].textContent);

