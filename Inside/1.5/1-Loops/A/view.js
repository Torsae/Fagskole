function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <input type='text' id='textInput'>
    <input type='number' id='numberInput'>
    <button onclick='multiplyText(textInput.value, numberInput.valueAsNumber)'>Multiply Text</button>
    <div id="errorMessage"></div>
    `;
}