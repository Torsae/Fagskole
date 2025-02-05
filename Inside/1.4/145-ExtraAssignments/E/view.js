// view
show();
function show() {
    document.getElementById('content').innerHTML = /*HTML*/`
        <p>Skriv tall i feltet og få summen, gjennomsnitt og antall.</p>

        Tall: <input type="number" value="${inputValue}" oninput="inputValue = this.value">
        <button onclick="add()">Legg til</button>
        <button onclick="reset()">Nullstill</button>

        <table>
            <tr><td>Sum:</td><td>${sum}</td></tr>
            <tr><td>Gjennomsnitt:</td><td>${count == 0 ? '<i>NA</i>' : sum / count}</td></tr>
            <tr><td>Antall tall:</td><td>${count}</td></tr>
        </table>
        `;
}