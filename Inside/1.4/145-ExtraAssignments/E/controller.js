// controller
function add() {
    numbersArray.push(Number(inputValue));
    console.log(numbersArray);
    getSumOf();
    getCountOf();
    show();
}

function getSumOf() {
    sum = 0;
    numbersArray.map(function (element) {
        sum += element;
    })
}

function getCountOf() {
    count = numbersArray.length;
}

function reset() {
    numbersArray = [];
    sum = 0;
    count = 0;
    inputvalue = '';
    show();
}
