function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
        <div>
            <button onclick="setLayout('')">
                Ingen layout
            </button>
            <button onclick="setLayout('vertical')">
                Vertikal layout
            </button>
            <button onclick="setLayout('horizontal')">
                Horisontal layout
            </button>
            <button onclick="setLayout('vertical')">
                Grid layout
            </button>
        </div>
        <h1>Eksempel 1</h1>
        <div id="cards" class="${layout}">
            ${getCard('green', 'Tools')}
            ${getCard('blue', 'Html')}
            ${getCard('red', 'Css')}
            ${getCard('yellow', 'JavaScript')}
            <div class="card">
                <div class="header dark" onclick="showBodyGame()">
                    Hode, kropp og ben
                </div>
                <div id="cardGame" class="bodies"></div>
            </div>

        </div>
    `;
}