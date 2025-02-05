function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <div id="hangmanDiv">
    ${hangmanHTML}
    </div><br/><br/>
    Word: ${currentWord}<br/><br/>
    <input id="hangmanInput" type='text' oninput="guess(this.value), hangmanInput.focus()" ${inputIs}><br/><br/>
    ${checkWinCondition()}<br/>
    Letters used:
    ${lettersUsed}
    `;
}