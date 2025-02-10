updateView();
function guess(input) {
    currentWord = currentWord.toLowerCase();
    currentWord = evaluateHangman(secretWord, currentWord, input);
    if (!currentWord.includes(input) && !lettersUsed.includes(input)) {
        incorrectGuess();
        console.log("wrong letter")
    }
    checkWinCondition();
    printLetterUsed(input);
    updateView();
}

function evaluateHangman(secretText, currentText, guessedLetter) {
    secretText = secretText.toLowerCase();
    const index = secretText.indexOf(guessedLetter);
    if (index == -1) return currentText;
    const currentTextBeforeGuessedLetter = currentText.substring(0, index);
    const currentTextAfterGuessedLetter = currentText.substring(index + 1);
    const secretTextAfterGuessedLetter = secretText.substring(index + 1);
    return currentTextBeforeGuessedLetter + guessedLetter
        + evaluateHangman(secretTextAfterGuessedLetter, currentTextAfterGuessedLetter, guessedLetter);
}

function firstLetterUpperCase() {
    let firstLetter = currentWord.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    currentWord = firstLetter + (currentWord.slice(1));
}

function checkWinCondition() {
    if (currentWord == secretWord) {
        console.log("YOU WON!");
        return /*HTML*/`
            You win!<br/>
            <button onclick='restart()'>Restart</button>
        `;
    } else if (incorrectCount >= 6) {
        console.log("YOU LOST!")
        inputIs = "disabled";
        return /*HTML*/`
            You lose!<br/>
            <button onclick='restart()'>Restart</button>
        `;
    } else {
        return "";
    }
}

function incorrectGuess() {
    // print hangman
    console.log("wrong letter");
    incorrectCount++;
    if (incorrectCount == 1) {
        hangmanHTML = /*HTML*/`
        <div>________</div>
        `;
    } else if (incorrectCount == 2) {
        hangmanHTML += /*HTML*/`
        <div>|| &nbsp; &nbsp; &nbsp; &nbsp; |</div>
        `;
    } else if (incorrectCount == 3) {
        hangmanHTML += /*HTML*/`
        <div>|| &nbsp; &nbsp; &nbsp; &nbsp;O</div>
        `;
    } else if (incorrectCount == 4) {
        hangmanHTML += /*HTML*/`
        <div id="hangManChest">|| &nbsp; &nbsp; &nbsp; &nbsp;/|\\</div>
        `;
    } else if (incorrectCount == 5) {
        hangmanHTML += /*HTML*/`
        <div>|| &nbsp; &nbsp; &nbsp; &nbsp; |</div>
        `;
    } else if (incorrectCount == 6) {
        hangmanHTML += /*HTML*/`
        <div>|| &nbsp; &nbsp; &nbsp; &nbsp;/\\</div>
        <div>||_______</div>
        `;
    }
}

function printLetterUsed(input) {
    console.log(lettersUsed);
    if (!lettersUsed.includes(input)) {
        lettersUsed += (input + ", ");
        lettersRemaining = lettersRemaining.filter(function (element) {
            return element !== input;
        })
    }
    console.log(lettersUsed);
    console.log("Remaining Letters:", lettersRemaining);
}

function restart() {
    secretWord = getNewSecretWord();
    currentWord = secretWord.replace(/./g, '_');
    incorrectCount = 0;
    hangmanHTML = "";
    lettersUsed = "";
    lettersRemaining = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'
    ];
    inputIs = "";
    updateView();
}

function getNewSecretWord() {
    let index = Math.floor(Math.random() * wordsArray.length)
    return wordsArray[index];
}