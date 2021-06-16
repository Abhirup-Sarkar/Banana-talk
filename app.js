

//click button
var btnTranslate = document.querySelector("#btn-translate");
//Listen to the event - when the button is clicked
btnTranslate.addEventListener("click", clickHandler);

//read input
var txtInput = document.querySelector("#txt-input");
//show output
var txtOutput = document.querySelector("#txt-output");

//server URL
var serverURL = "https://api.funtranslations.com/translate/minion.json";

//Adding text to the URL
function getTranslationURL(Sample) {
    return serverURL + "?text=" + Sample;
}



function clickHandler() {
    console.log("button clicked");
    var input = txtInput.value;
    txtOutput.innerText = "Translated Text......";
     
    fetch(getTranslationURL(input))
        .then(response => response.json())
        .then(json =>{
            txtOutput.innerText = json.contents.translated;
            
        })
        .catch(() => alert("some error occured"));
    
}



