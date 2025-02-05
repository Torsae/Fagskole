function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <div id="resultBox" class="displayBox">${resultBox}</div>
    ${createCalcRow(7, 8, 9, '÷')} 
    ${createCalcRow(4, 5, 6, '×')}
    ${createCalcRow(1, 2, 3, '-')}
    ${createCalcRow(0, 'C', '=', '+')}
    `;
}