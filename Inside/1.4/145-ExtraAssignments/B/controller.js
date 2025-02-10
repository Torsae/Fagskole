function setLayout(input) {
    layout = input;
    updateView();
}

function showTools() {
    blankAll();
    document.getElementById('cardTools').innerHTML = /*html*/`
        <div class="innerCard">
        De to viktigste verktøyene vi skal bruke er disse:
            <ul>
                <li>
                    Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                    <br />Vi skal bruke noen <i>extensions</i>:
                    <ul>
                        <li>JavaScript-booster</li>
                        <li>es6-string-html</li>
                        <li>live-server</li>
                        <li>live-share</li>
                    </ul>
                </li>
                <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
            </ul>        
        </div>
    `;
}

function showHtml() {
    blankAll();
    document.getElementById('cardHtml').innerHTML = /*html*/`
        <div class="innerCard">
            Vi bruker HTML til å definere et dokument.
            <ul>
                <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                <li>Tagger for grunnleggende formatering av tekst</li>
                <li><tt>&lt;div&gt;</tt></li>
                <li><tt>&lt;input type="text"&gt;</tt></li>
                <li><tt>&lt;button&gt;</tt></li>
                <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
                </li>
                <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
                </li>
            </ul>
        </div>
    `;
}

function showCss() {
    blankAll();
    document.getElementById('cardCss').innerHTML = /*html*/`
        <div class="innerCard">
            Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
            <ul>
                <li><tt>background-color</tt></li>
                <li><tt>color</tt></li>
                <li><tt>padding</tt></li>
                <li><tt>margin</tt></li>
                <li><tt>border</tt></li>
                <li><tt>text-align</tt></li>
                <li><tt>font-size</tt></li>
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
                <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
                <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
                </li>
                <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
                </li>
            </ul>
        </div>
    `;
}

function showJavaScript() {
    blankAll();
    document.getElementById('cardJavaScript').innerHTML = /*html*/`
        <div class="innerCard">
            Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
            ved
            å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
            <ul>
                <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                    Moodle.</li>
                <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                        Reference</a></li>
            
            </ul>
        </div>
        `;
}

function showBodyGame() {
    blankAll();
    document.getElementById('cardGame').innerHTML = /*html*/`    
        <div id="head" class="bodyPart"></div>
        <div id="body" class="bodyPart"></div>
        <div id="legs" class="bodyPart"></div>
    `;
    selectPart(0, "head");
    selectPart(0, "body");
    selectPart(0, "legs");
}

function blankAll() {
    document.getElementById('cardTools').innerHTML = '';
    document.getElementById('cardCss').innerHTML = '';
    document.getElementById('cardHtml').innerHTML = '';
    document.getElementById('cardJavaScript').innerHTML = '';
    document.getElementById('cardGame').innerHTML = '';
}

function selectPart(input, type) {
    let currentPart = 0;
    if (type === "head") {
        if (currentHead + input < 0) { input = 3 }
        currentHead = ((currentHead += input) % 4);
        currentPart = currentHead;
    } else if (type === "body") {
        if (currentBody + input < 0) { input = 3 }
        currentBody = ((currentLegs += input) % 4);
        currentPart = currentBody;
    } else if (type === "legs") {
        if (currentLegs + input < 0) { input = 3 }
        currentLegs = ((currentLegs += input) % 4);
        currentPart = currentLegs;
    }
    let newPart = type + currentPart + ".png";
    let onClick = (type[0].toUpperCase() + type.slice(1));
    console.log(newPart);
    console.log("onClick:", onClick);
    document.getElementById(type).innerHTML = /*HTML*/`
        <button onclick="selectPart(-1, '${type}')">◀</button>
        <img src="${'img/' + newPart}" />
        <button onclick="selectPart(1, '${type}')">▶</button>
    `;
}