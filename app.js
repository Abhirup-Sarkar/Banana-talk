//  var userName = prompt("What is your name? ");
// alert("Welcome! "+userName);

//Input
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output"); 
console.log(txtInput)
// outputDiv.innerText = "Abhirup Sarkar"

function clickHandler(){

    console.log("clicked!");
    console.log("input", txtInput.value)
   outputDiv.innerText = "Minion Translator:  "+txtInput.value;
};

btnTranslate.addEventListener("click",clickHandler)
 