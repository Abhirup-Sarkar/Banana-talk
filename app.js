

//click button
var btnTranslate = document.querySelector("#btn-translate");


//read input
var txtInput = document.querySelector("#txt-input");
//show output
var outputDiv = document.querySelector("#output");

//server URL

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text = "+text;
}

// Error Handling

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with the server! Try again after some time.");
}


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
function clickHandler(event) {
    console.log("button clicked");
    var inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))
    
}
btnTranslate.addEventListener("click", clickHandler);

