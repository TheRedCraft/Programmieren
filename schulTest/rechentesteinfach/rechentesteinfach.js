var richtigeAntwort;
var runden = 0;
var Punkte = 0;
var gesperrt = true;
var level = 1;
var falsch = new Array();
var zeit = 0;
var start = false;
var gesperrt2 = false;
var Punkte2 = 0;
var speicherindexrechentesteinfach = parseInt(localStorage.getItem('speicherindexrechentesteinfach'));



function stelleAufgabe() {
    if(gesperrt2 == false) {
        if(Punkte < 100) {
            start = true;
            gesperrt = false;
            var operator = Math.round(Math.random() * 4 + 0.5);
            var gessette = false;
            var operator2 = '';
            if(gessette == false) {
                if(operator == 1) {
                    operator2 = '+';
                    gessette = true;
                }
            }

            if(gessette == false) {
                if(operator == 2) {
                    if(level >= 10) {
                        operator2 = '-';
                        gessette = true;
                    }
                }
            }

            if(gessette == false) {
                if(operator == 3) {
                    if(level >= 20) {
                        operator2 = '•';
                        gessette = true;
                    }
                }
            }

            if(gessette == false) {
                if(operator == 4) {
                    if(level >= 30) {
                        operator2 = ':';
                        gessette = true;
                    }
                }
            }

            if(operator2 == '') {
                console.log('ja');
                if(level <= 10 && level >= 0) {
                    operator2 = '+';
                    gessette = true;
                }
                if(level <= 20 && level >= 10) {
                    operator2 = '-';
                    gessette = true;
                }
                if(level <= 30 && level >= 20) {
                    operator2 = '•';
                    gessette = true;
                }
                if(level <= 40 && level >= 30) {
                    operator2 = ':';
                    gessette = true;
                }
                if(level >= 40) {
                    operator2 = ':';
                    gessette = true;
                }
            }

            console.log(level);


            var zahl1 = Math.round(Math.random() * Math.random() * level * 2 + 0.5);
            var zahl2 = Math.round(Math.random() * Math.random() * level * 2 + 0.5);
            var aufagbe = zahl1 + operator2 + zahl2;
            aufagberechnen = aufagbe.replace(/:/g, '/');
            aufagberechnen = aufagberechnen.replace(/•/g, '*');
            richtigeAntwort = eval(aufagberechnen);


            for(var i = 0; i < 10; i++) {
                richtigeAntwort = richtigeAntwort.toString();
                letter = richtigeAntwort.charAt(i);
                if(letter == '.') {
                    neueAufgabe()
                    return
                }
            }

            richtigeAntwort = parseInt(richtigeAntwort);
            if(level < 50) {
                if( richtigeAntwort < 0) {
                    neueAufgabe()
                    return
                }
            }


            if(Punkte2 == 3) {
                level++;
                Punkte2 = 0;
            }



            document.getElementById('Frage').innerHTML = aufagbe;
            document.getElementById('lösung').innerHTML = 'Lösung';
            document.getElementById('eingabe').style.background = 'white';

            document.getElementById('eingabe').value = '';
        } else {
            spielende();
        }
    }
}


function neueAufgabe() {
    stelleAufgabe();
}



function pruefeEingabe() {
    gesettet = false;
    if(gesperrt == false) {
        gesperrt = true;
        eingabe = document.getElementById('eingabe').value;

        if(eingabe == 'code:protokoll') {
            gesettet = true;
            gesperrt2 = true;
            gesperrt = true;
            start = false;
            textlocalstorage = 'Gespeichert: '; 

            for(i = 1; i < speicherindexrechentesteinfach + 1; i++) {
                textlocalstorage += ' Punkte: ' + localStorage.getItem('punkterechentesteinfach' + i);
                textlocalstorage += ' Runden: ' + localStorage.getItem('rundenrechentesteinfach' + i);
                textlocalstorage += ' Fehler: ' + localStorage.getItem('fehlerrechentesteinfach' + i);
                textlocalstorage += ' Speicherindex: ' + i + ' | ';
            }
            document.getElementById('lösung').innerHTML = textlocalstorage;
            document.getElementById('lösung').style.fontSize = '30px';
            return false
        }

        if(eingabe == 'code:clear') {
            gesettet = true;
            localStorage.clear();
            localStorage.setItem('speicherindexrechentesteinfach', 0);
            localStorage.setItem('punkterechentesteinfach' + speicherindexrechentesteinfach, 0);
            localStorage.setItem('rundenrechentesteinfach' + speicherindexrechentesteinfach, 0);
            localStorage.setItem('fehlerrechentesteinfach' + speicherindexrechentesteinfach, 0);
            gesperrt = false;
        }

        eingabe = parseInt(eingabe);
        eingabe = Math.round(eingabe);
        if(eingabe == richtigeAntwort) {
            gesettet = true;
            Punkte++;
            Punkte2++;
            document.getElementById('eingabe').style.background = 'lightgreen';
            document.getElementById('lösung').innerHTML = 'Richtig!';
            setTimeout(stelleAufgabe, 1000);
        }

        if(gesettet == false) {
            document.getElementById('eingabe').style.background = 'red';
            document.getElementById('lösung').innerHTML = richtigeAntwort;
            falsch.push('Frage: ' + document.getElementById('Frage').innerHTML +  ', Eingabe: '+ eingabe + ', Lösung: ' + richtigeAntwort +  ', Zeit: ' + zeit + ' | ');
            setTimeout(stelleAufgabe, 5000);
            

        }
        runden++;


    }

    return false
}


function zeitsekunde() {
    if(start == true) {
        zeit++;
    }
}

setInterval(zeitsekunde, 1000);


function spielendetestenbutton() {
    if(start == true) {
        document.getElementById('endebutton').style.background = 'lightgreen';
        setTimeout(spielende, 300);
    }
}

function spielende() {
    gesperrt2 = true;
    gesperrt = true;
    start = false;
    var duration = 9999 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);


document.getElementById('Zeit').innerHTML = 'Super du hast es geschafft!';
document.getElementById('eingabe').style.background = 'white';
document.getElementById('Frage').innerHTML = 'Punkte: ' + Punkte + ' Runden: ' + runden + ' Zeit: ' + zeit + ' Schnitt: ' + Math.round(Punkte / runden * 100) + '%';
document.getElementById('eingabe').value = '';
document.getElementById('lösung').innerHTML = 'falsche Fragen: ' + falsch;
document.getElementById('lösung').style.fontSize = '30px';
document.getElementById('endebutton').style.background = 'white';

speicherindexrechentesteinfach = speicherindexrechentesteinfach + 1;
localStorage.setItem('punkterechentesteinfach' + speicherindexrechentesteinfach, Punkte);
localStorage.setItem('rundenrechentesteinfach' + speicherindexrechentesteinfach, runden);
localStorage.setItem('fehlerrechentesteinfach' + speicherindexrechentesteinfach, falsch);
localStorage.setItem('speicherindexrechentesteinfach', speicherindexrechentesteinfach);
}


setInterval(drawstats, 10);


function drawstats() {
    if(start == true) {
        document.getElementById('Zeit').innerHTML = 'Zeit: ' + zeit;
    }
}