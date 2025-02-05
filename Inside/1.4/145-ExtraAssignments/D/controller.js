updateView();
function createCalcRow(input1, input2, input3, input4) {
    return /*HTML*/`
        <div class="firstInRow" onclick="addCharacter(${input1})">${input1}</div>
        ${createOnclickHTML(input2)}
        ${createOnclickHTML(input3)}
        ${createOnclickHTML(input4)}
    `;
}

function createOnclickHTML(input) {
    if (input == "C") {
        return /*HTML*/`
            <div class="char" onclick="clearResult()">C</div>
        `;
    } else if (input == "=") {
        return /*HTML*/`
            <div class="char" onclick="calculate()">=</div>
        `;
    } else {
        return /*HTML*/`
            <div class="char" onclick="addCharacter('${input}')">${input}</div>
        `;
    }
}

function addCharacter(x) {
    resultBox += x;
    updateView();
}

function calculate() {
    var calculation = resultBox
        .replace('×', '*')
        .replace('÷', '/');
    resultBox = eval(calculation);
    updateView();
}
function clearResult() {
    resultBox = '';
    updateView();
}