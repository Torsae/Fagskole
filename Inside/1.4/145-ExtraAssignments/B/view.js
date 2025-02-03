function updateview() {
    document.getElementById("app").innerHTML = /*HTML*/`
        <div>
            <button onclick="layout('')">
                Ingen layout
            </button>
            <button onclick="layout('vertical')">
                Vertikal layout
            </button>
            <button onclick="layout('horizontal')">
                Horisontal layout
            </button>
            <button onclick="layout('vertical')">
                Grid layout
            </button>
        </div>
        <h1>Eksempel 1</h1>
        <div id="cards">
            <div class="card">
                <div class="header green" onclick="showTools()">
                    Verktøy
                </div>
                <div id="cardTools"></div>
            </div>
            <div class="card">
                <div class="header blue" onclick="showHtml()">
                    HTML
                </div>
                <div id="cardHtml"></div>
            </div>
            <div class="card">
                <div class="header red" onclick="showCss()">
                    CSS
                </div>
                <div id="cardCss"></div>
            </div>
            <div class="card">
                <div class="header yellow" onclick="showJavaScript()">
                    JavaScript
                </div>
                <div id="cardJavaScript"></div>
            </div>
            <div class="card">
                <div class="header dark" onclick="showBodyGame()">
                    Hode, kropp og ben
                </div>
                <div id="cardGame" class="bodies"> </div>
            </div>
        </div>
    `;
}