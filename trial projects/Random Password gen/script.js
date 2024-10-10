
function genPassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbol){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "123456789";
    const symbols = "!@#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumber ? numbers : "";
    allowedChars += includeSymbol ? symbols : "";

    if(length <= 0){
        return `(password length should be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;     

}
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = true;
const includeSymbols= false;

const password = genPassword(passwordLength,
                           includeLowercase,
                           includeUppercase,
                           includeNumbers,
                           includeSymbols);

console.log(`Generate password: ${password}`);
