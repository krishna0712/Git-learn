// 7. IF statements

// let age = 14;

// if(age >= 18){
//     console.log("You are not 18+ so get out!")
// }
// ***********Nested IF ELSE***************
// let age = 19;
// let hasLicense = true;

// if(age >= 18){
//     console.log("You are old enough to drive");
//     if(hasLicense){
//         console.log("You have your license");
//     }
//     else{
//         console.log("You do not have your licensense");
//     }
// }
// else{
//     console.log("Be atleast 18 to apply for liscencse");
// }

/* 
    //=========== age input trial============

    const writebox = document.getElementById("writebox");
    const mysub = document.getElementById("mysub");
    const result = document.getElementById("result");
    let age;


    mysub.onclick = function(){
        age = writebox.value;
        age = Number(age);
        if (age >= 100){
            result.textContent = `You have seen a century of this beautiful world`;
        }
        else if (age == 0){
            result.textContent = `You are just a newborn`;
        }
        else if (age >= 18){
            result.textContent = `You are eligible to enter website`;

        }
        else if (age <0){
            result.textContent = `You are from another universe`;

        }
        else {
            result.textContent = `You must be 18+ to enter `;

        }
    }
*/

// --------8. Ternary Operator---------
// ternary operator = a shortcut to if else statements helps to assign a vairable 
// syntax: condition ? codeIfTrue: codeIfFalse;

// let time = 9;
// let greetings = time <12 ? "Good Morning" : "Good Afternoon";

let amount = 1200;
let discount = amount > 1000 ? 10 : 0;

console.log(`Your total amout is $${amount - amount*(discount/100)}`)
