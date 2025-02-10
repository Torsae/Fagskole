updateView();

function multiplyText(text, maxLength) {
    let errorMessage = document.getElementById("errorMessage");
    if (text.length >= maxLength) {
        errorMessage.innerHTML = "Error: new length >= max length";
    } else {
        errorMessage.innerHTML = "";
        document.getElementById("textInput").value = (text + text).substring(0, maxLength);
    }
}