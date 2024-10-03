// IF statements

// let age = 14;

// if(age >= 18){
//     console.log("You are not 18+ so get out!")
// }
// ***********Nested IF ELSE***************
let age = 17;
let hasLicense = false;

if(age >= 18){
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("You have your license");
    }
    else{
        console.log("You do not have your licensense");
    }
}
else{
    console.log("Be atleast 18 to apply for liscencse");
}
