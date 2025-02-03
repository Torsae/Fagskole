// CONTROLLER
updateView();
moveLogo(0);

function getBoard() {
    return /*HTML*/`
    <div class="board">
        <div class="square" id="square1">
        </div>
        <div class="square" id="square2">
        </div>
        <div class="square" id="square3">
        </div>
        <div class="square" id="square4">
        </div>
    </div>
    <div class="buttons" id="buttonContainer">
    </div>
    `;
}

function moveLogo(direction) {
    if (canMove(direction)) {
        document.getElementById(("square" + currentSquare)).innerHTML = "";
        currentSquare += direction;
        document.getElementById(("square" + currentSquare)).innerHTML = /*HTML*/`
        <img src="https://getacademy.no/hubfs/GET_RGB_logo-01-2.png"/>
        `;
        if (currentSquare == 1) { toggleButtons("disabled", "disabled", "", ""); }
        if (currentSquare == 2) { toggleButtons("disabled", "", "disabled", ""); }
        if (currentSquare == 3) { toggleButtons("", "disabled", "", "disabled"); }
        if (currentSquare == 4) { toggleButtons("", "", "disabled", "disabled"); }
    }
}

function canMove(direction) {
    if ((currentSquare + direction) > 0 && (currentSquare + direction) < 5) {
        return true;
    } else {
        console.log("Error, invalid move.");
        return false;
    }
}

function toggleButtons(input1, input2, input3, input4,) {
    document.getElementById("buttonContainer").innerHTML = /*HTML*/`
        <button onclick="moveLogo(-2)" ${input1}>▲</button>
        <div>
            <button onclick="moveLogo(-1)" ${input2}>◀</button>
            <button onclick="moveLogo(1)" ${input3}>▶</button>
        </div>
        <button onclick="moveLogo(2)" ${input4}>▼</button>
    `;
}