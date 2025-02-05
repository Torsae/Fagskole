showBoard();

function getSquaresHTML() {
    let squares = "";
    let idNumb = 0;
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            squares += /*HTML*/`<div id="${idNumb}" class="lightSquare"></div>`;
            idNumb++;
            squares += /*HTML*/`<div id="${idNumb}" class="darkSquare"></div>`;
            idNumb++;
        }
        for (let index = 0; index < 4; index++) {
            squares += /*HTML*/`<div id="${idNumb}" class="darkSquare"></div>`;
            idNumb++;
            squares += /*HTML*/`<div id="${idNumb}" class="lightSquare"></div>`;
            idNumb++;
        }
    }
    return squares;
}

function addChessPiece(idNumb, pieceColor, piece) {
    document.getElementById(idNumb).classList += /*HTML*/` ${pieceColor}`;
    document.getElementById(idNumb).innerHTML = piece;
}

function addBlackPieces() {
    for (let index = 0; index < chessPieces.length; index++) {
        const element = chessPieces[index];
        addChessPiece(index, "blackPiece", element);
    }
}

function addWhitePieces() {
    let position = 48;
    for (let index = chessPieces.length - 1; index >= 0; index--) {
        const element = chessPieces[index];
        addChessPiece(position, "whitePiece", element);
        position++;
    }
    addChessPiece(59,"","♛");
    addChessPiece(60,"","♚");
}
