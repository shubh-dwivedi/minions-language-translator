var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(input) {
    return serverURL + "?text=" + input;
}

function errorHandler(error) {
    console.log("An error occured:"+error);
    alert("Something went wrong! Please try again later...")
}

function clickHandler() {
    fetch(constructUrl(txtInput.value))
    .then(function responseHandler(response) {
        return response.json();
    })
    .then(function jsonHandler(json) {
        var textTranslated = json.contents.translated;
        outputDiv.innerText = textTranslated;
    })
    .catch(error)
};

btnTranslate.addEventListener("click", clickHandler)