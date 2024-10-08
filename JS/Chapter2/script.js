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

/* //=========== age input trial============

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

    // let amount = 1200;
    // let discount = amount > 1000 ? 10 : 0;

    // console.log(`Your total amout is $${amount - amount*(discount/100)}`)

    // let name = "kusum";
    // let password = (name == "Krishna") ? "Password is true" : "Password is false" ;

    // console.log(password);

/*-------- 9. Switch Case--------
    // let day = 3;
    // let workout;

    // switch(true){
    //     case day == 1:
    //         console.log("It is monday");
    //         workout = "Its Chest day "
    //         console.log(workout);
    //         break;
    //     case day == 2:
    //         console.log("It is Tuesday");
    //         workout = "Its back day "
    //         console.log(workout);
    //         break;
    //     case day == 3:
    //         console.log("It is Wednesday");
    //         workout = "Its arms day "
    //         console.log(workout);
    //         break;
    //     case day == 4:
    //         console.log("It is Thursday");
    //         workout = "Its abs day "
    //         console.log(workout);
    //         break;
    //     case day == 5:
    //         console.log("It is Fruday");
    //         workout = "Its back day again "
    //         console.log(workout);
    //         break;
    //     case day == 6:
    //         console.log("It is Saturday");
    //         workout = "Its rest day "
    //         console.log(workout);
    //         break;
    //     case day == 7:
    //         console.log("It is Sunday");
    //         workout = "Its time to run "
    //         console.log(workout);
    //         break;
    //     default:
    //         console.log(`${day} is not a day`);
    // }
*/

/*--------- 10. String Methods-----------
    
    // let userName = "Krishna";
    // console.log(userName.charAt(4));
    // console.log(userName.indexOf("i"));
    // console.log(userName.length);

    // userName = userName.trim();

    // console.log(userName.repeat(2));

    // let result = userName.startsWith(" ");

    // if(result){
    //     console.log(`Your username can't start with ' '`);
    // }
    // else{
    //     console.log(userName);
    // }

    phone = "123-124-245";
    phone = phone.replaceAll("-","");
    console.log("phone");

    .padstart (this will add a specific number till it matches the given length at the start of the string)
    .padend (this will add a specific number till it matches the given length at the end of the string)
    

    --------string slicing----------
    // that is creating  a substring from a portion of another string
    // string.slice(start, end)


    // const fullName = 'Krishna Acharya';
    // let firstName = fullName.slice(0,fullName.indexOf(" "));
    // let lastName = fullName.slice(fullName.indexOf(" ")+ 1 );

    // console.log(firstName);
    // console.log(lastName);

// let username = window.prompt("Enter your Username: ");

//  ----Method Chaining-----
// ( using many methods at the same time is method chaining)

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username); 
*/

/*--------11. Functions---------------
// function = A sectio of reusable code. 
//            Declare code once, use it whenever you want.
//            call the function to execute the code.

// function add(x,y){
//     let result = x +y;
//     return result; // can also directly return x+y
// }

// function sub(x,y){
//     let result = x-y;
//     return result;
// }
// function isEven(number){
//     return number %2 === 0 ? true: false ;
// }

// console.log(isEven(45));
// let answer = add(2,3);
// let ans = sub(3,2);
// console.log(answer);
// console.log(ans);
*/

