function showBoard() {
    document.getElementById('app').innerHTML += getSquaresHTML();
    addWhitePieces();
    addBlackPieces();
}