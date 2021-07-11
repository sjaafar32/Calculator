const main = document.querySelector('main');
const displayText = document.getElementsByClassName('display')[0];
const clearBtn = document.getElementById('clear-button');
const numBtns = document.querySelectorAll('button.number-button');
const operatorBtns = document.querySelectorAll('button.operator-button');
const equalBtn = document.getElementById('equal-button');


let numBtnsArray = Array.from(numBtns); //creates an array from node list so that I can utilize individual elements

let newNum = '';

for(let i = 0; i<numBtnsArray.length; i++){
    numBtnsArray[i].addEventListener('click', () =>{ //Each time a button with a number is clicked, the text is added to the display text as a string
        displayText.textContent += numBtnsArray[i].textContent; //Each digit is added as a string to create a single number
        newNum += numBtnsArray[i].textContent;
    });
}

function numInput(){
    input(newNum);
    newNum = ''; //New num is reset so that the previous digits selected aren't included in the next number
}

let operatorBtnsArray = Array.from(operatorBtns); //operatorBtns is a node list and needs to be converted to an array

for(let i = 0; i<operatorBtnsArray.length-2; i++){ //subracted 2 so that the word equal and clear dont show when pressed
    operatorBtnsArray[i].addEventListener('click', () => {
        numInput(); //This function is called here so that every digit selected, before an operator is selected, forms into one number
        displayText.textContent += operatorBtnsArray[i].textContent;
        input(operatorBtnsArray[i].textContent);
    });
}

let inputArray = []; //create array of each input (number and operator) so that I can use each element in opreator function

function input(x){
    inputArray.push(x); //This pushes each value inputted by user as an element in the array that I can use later.
    console.log(inputArray);
}

equalBtn.addEventListener('click', () => {
    numInput();
    console.log(displayText.textContent);
    operator(inputArray);
});

clearBtn.addEventListener('click', () => {
    displayText.textContent = "";
    inputArray = [];
});

function add(x, y){ return x + y;}

function subtract(x, y){ return x - y;}

function multiply(x, y){ return x * y;}

function divide(x, y){ return x/y;}

function operator(array){
    let answer = parseFloat(array[0], 10);

    for(i = 1; i < array.length; i++){
        if(i % 2 !== 0){
        if(array[i] == '+'){ answer = add(answer, parseFloat(array[i+1], 10));}
        else if(array[i] == '-'){ answer = subtract(answer, parseFloat(array[i+1], 10));}
        else if(array[i] == 'x'){ answer = multiply(answer, parseFloat(array[i+1], 10));}
        else if(array[i] == '/'){ 
            if(array[i+1] == 0){ 
                alert("Nice try! You cannot divide by zero. Clear and try again");
                displayText.textContent = "";
                inputArray = [];
                console.log(`Nice try! You cannot divide by zero`);} 
                else{answer = divide(answer, parseFloat(array[i+1], 10));}}
        //Determines the operator then calls the appropriate function
        }
    }
    console.log(answer);
    displayText.textContent = answer;
}