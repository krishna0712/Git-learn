

const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");

const min = 1;
const max = 6;

var randomNum1;
var randomNum2;
var randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random()*(max)) + min;
    randomNum2 = Math.floor(Math.random()*(max)) + min;
    randomNum3 = Math.floor(Math.random()*(max)) + min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
    console.log(randomNum1);
}