const toCelcius = document.getElementById("toCelcius");
const toFarenheight = document.getElementById("toFarenheight");
const result = document.getElementById("result");
const textbox = document.getElementById("textbox");
let temp;

function Convert(){

    if(toCelcius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else if(toFarenheight.checked){
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else{
        result.textContent = "Select a unit";
    }
}