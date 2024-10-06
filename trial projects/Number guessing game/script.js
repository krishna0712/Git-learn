const min = 1;
const max = 100;
const ans = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Enter a valid Number");
    }
    else if(guess < min || guess >max){
        window.alert("Enter a valid Number");
    }
    else{
        attempts++;
        if(guess < ans){
            window.alert("TOO LOW ! GUESS HIGHER");
        }
        else if(guess > ans){
            window.alert("TOO HIGH ! GUESS LOWER");
        }
        else{
            window.alert(`YOU GUESSED IT RIGHT IN ${attempts} attempts`);
            running = false;
        }

    }

}