

//click button
var btnTranslate = document.querySelector("#btn-translate");

btnTranslate.addEventListener("click", clickHandler);

//read input
var txtInput = document.querySelector("#txt-input");
//show output
var txtOutput = document.querySelector("#txt-output");

//server URL

var serverURL = "https://api.funtranslations.com/translate/minion.json";




function clickHandler(event) {
    console.log("button clicked");
    var input = txtInput.value;
    var finalURL = getTranslationURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json =>{
            txtOutput.innerText = json.contents.translated;
            
        })
        .catch(() => alert("some error occured"));
    
}
function getTranslationURL(inputText) {
    return serverURL + "?" + "text = "+inputText;
}

// Error Handling

// function errorHandler(error) {
//     console.log("error occured", error);
//     alert("something wrong with the server! Try again after some time.");
// }


// function clickHandler() {
//     console.log("Clicked! ");
//     var inputText = txtInput.value; //Taking input
       
//     //calling server for processing 

//     fetch(getTranslationURL(inputText))
//         .then(response => response.json())
//         .then(json =>console.log(json.contents.translated))
//         .catch(errorHandler)
//         outputDiv.innerText = translatedText;  
        
        
// };