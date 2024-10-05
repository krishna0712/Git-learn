const box1 = document.getElementById("box1");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paytmbtn = document.getElementById("paytmbtn");

document.getElementById("mysub").onclick = function(){
    if(box1.checked){
        checkresult.textContent = `You are subscribed`;
    }
    else{
        checkresult.textContent = `You are not subscribed`;
    }

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
        radioresult.textContent = `You have not chosen your method of payment`;
    }
}
