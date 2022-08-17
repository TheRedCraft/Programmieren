let mybody = document.getElementById('mybody1');
let netstatus = 0;


setInterval(function() {
    if(navigator.onLine == true) {
        netstatus = 10;
    } else {
        netstatus = 20;
    }
}, 1000)

function neterror() {
    let mybody = document.getElementById('mybody1');
    mybody.innerHTML = `
        
                
    <img src="img/warten.jpg">

    <h1 class="loading">Netzwerkfehler</h1>
    
        
    `;
}

let bubblefilter = `

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="gooey">
                <!-- in="sourceGraphic" -->
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
            </filter>
        </defs>
    </svg>


`;

function loadsite1() {
    let mybody = document.getElementById('mybody1');
    console.log('ERFOLGREICH!')
    mybody.innerHTML = `
    
    ` + bubblefilter + `

        <div class="bubble_button">
            <button id="gooey-button" onclick="change()">
                FISCHE!!!
                <span class="bubbles">
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                </span>
            </button>
        </div>
    `;


}





function change() {
    let mybody = document.getElementById('mybody1');
    console.log('ERFOLGREICH!');
    mybody.innerHTML = `



    ` + bubblefilter + `

        <div class="bubble_button">
            <button id="gooey-button" onclick="change()">
                Es lebt!!!
                <span class="bubbles">
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                </span>
            </button>
        </div>
    `;
}
