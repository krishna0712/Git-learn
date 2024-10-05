// IF statements

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

const box1 = document.getElementById("box1");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paytmbtn = document.getElementById("paytmbtn");

document.getElementById("mysub").onclick = function(){
    if(box1.checked){
        checkresult.textContent = `You are subscribed`;
        if(visabtn.checked){
            radioresult.textContent = `You are paying with a visa`;
        }
        else if(mastercardbtn.checked){
            radioresult.textContent =`You are paying with a mastercard`; 
        }
        else if(paytmbtn.checked){
            radioresult.textContent =`You are paying with Paytm`; 
        }
        else{
            radioresult.textContent =`You have not chosen your method of payment`;
        }
    }
    else{
        checkresult.textContent = `You are not subscribed`;
    }

    
}


