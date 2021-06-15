//  var userName = prompt("What is your name? ");
// alert("Welcome! "+userName);

//Input
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput)

function clickHandler(){

    console.log("clicked!");
    console.log("input", txtInput.value)
   
};

btnTranslate.addEventListener("click",clickHandler)
 