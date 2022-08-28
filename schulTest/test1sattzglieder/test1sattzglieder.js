var Fragen = new Array();
var Punkte = 0;
var richtigeAntwort;
var runden = 0;
var gesperrt = true;
var diefrage;
var frageAufbereitet;
var zeit = 0;
var start = false;
var falsch = new Array();
var satz;
var lösungen;
var gesperrt2 = false;
var speicherindextest1satzglieder = parseInt(localStorage.getItem('speicherindextest1satzglieder'));

definiereFragen();


function zeitsekunde() {
    if(start == true) {
        zeit++;
    }
}

function addfrage(frage) {
    fragegetrennt = frage.split('#');
    anzahldersatzglieder = fragegetrennt[0].split('!');
    lösungen = fragegetrennt[1].split(' ');
    frageohnestörung = fragegetrennt[0].replace(/!/g, ' ');

    for(i=0; i < anzahldersatzglieder.length; i++) {
        neuefrage = i + 1 + '.Satzglied? ' + frageohnestörung + '#' + lösungen[i];
        Fragen.push(neuefrage);
    }
}


function getdatafromServer() {
    const booksRef = firebase.firestore().collection('Ergebnisse');
    booksRef.get().then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
            data: doc.data()
        }))
        data2 = data['0']['data'];
        console.log(data2);
    })
}


setInterval(zeitsekunde, 1000);

function definiereFragen() {
    addfrage('Die Mutter!kocht!eine Suppe?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Oma!liebt!Leonie?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Leonie!ruft!die Mutter?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Oma!liest!die Zeitung?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Opa!macht!den Salat?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Der Vater!küsst!die Mutter?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Leonie!singt!ein Lied?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Die Mutter!holt!ein Buch?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Oma!braucht!eine Brille?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Der Vater!fragt!den Opa?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Opa!sucht!die Katze?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Die Fee!schenkt!dem Mann!das Schachspiel?#Subjekt Prädikat Dativobjekt Akkusativobjekt');
    addfrage('Die Fee!schenkt!dem Mädchen!den Tennisschläger?#Subjekt Prädikat Dativobjekt Akkusativobjekt');
    addfrage('Die Fee!schenkt!der Frau!die Vase?#Subjekt Prädikat Dativobjekt Akkusativobjekt');
    addfrage('Die Fee!schenkt!dem Jungen!das Modellauto?#Subjekt Prädikat Dativobjekt Akkusativobjekt');
    addfrage('Die Fee!schenkt!dem Hund!den Knochen?#Subjekt Prädikat Dativobjekt Akkusativobjekt');
    addfrage('Das Schachspiel!gefällt!dem Mann?#Subjekt Prädikat Dativobjekt');
    addfrage('Der Tennisschläger!gefällt!dem Mädchen?#Subjekt Prädikat Dativobjekt');
    addfrage('Die Vase!gefällt!der Frau?#Subjekt Prädikat Dativobjekt');
    addfrage('Das Modellauto!gefällt!dem Jungen?#Subjekt Prädikat Dativobjekt');
    addfrage('Der Knochen!gefällt!dem Hund?#Subjekt Prädikat Dativobjekt');
    addfrage('Ich!danke!der Mutter?#Subjekt Prädikat Dativobjekt');
    addfrage('Ich!helfe!dem Vater?#Subjekt Prädikat Dativobjekt');
    addfrage('Ich!gratuliere!der Oma?#Subjekt Prädikat Dativobjekt');
    addfrage('Ich!gehorche!dem Opa?#Subjekt Prädikat Dativobjekt');
    addfrage('Ich!vertraue!dem Kind?#Subjekt Prädikat Dativobjekt');
    addfrage('Ich!verzeihe!dem Mädchen?#Subjekt Prädikat Dativobjekt');
    addfrage('Der Lehrer!gibt!den Schülern!viele Hausaufgaben?#Subjekt Prädikat Dativobjekt Akkusativobjekt');
    addfrage('Die Frau!kauft!ihrem Mann!eine Krawatte?#Subjekt Prädikat Dativobjekt Akkusativobjekt');
    addfrage('Einen dicken Blumenstrauß!schenkte!die Klasse!ihrem Lehrer?#Akkusativobjekt Prädikat Subjekt Dativobjekt');
    addfrage('Meine Cds!leihe!ich!meiner besten Freundin?#Akkusativobjekt Prädikat Subjekt Dativobjekt');
    addfrage('Allen Geburtstagskindern!wünschen!wir!viel Glück?#Dativobjekt Prädikat Subjekt Akkusativobjekt');
    addfrage('Die Kinder!schreiben!dem Christkind!einen Wunschzettel?#Subjekt Prädikat Dativobjekt Akkusativobjekt');
    addfrage('Trecker!haben!breite Reifen?#Subjekt Prädikat Akkusativobjekt');
    addfrage('Die Deiche!halten!den hohen Wellen!stand?#Subjekt Prädikat Dativobjekt Prädikat');
    addfrage('Affenmütter!lausen!ihren Jungen!das Fell?#Subjekt Prädikat Dativobjekt Akkusativobjekt');
    addfrage('Der Fahrlehrer!erklärt!seinen Schülern!die Verkehrszeichen?#Subjekt Prädikat Dativobjekt Akkusativobjekt');
    addfrage('Der Zahnarzt!hat!dem Kind!zwei Zähne!ziehen müssen?#Subjekt Prädikat Dativobjekt Akkusativobjekt Prädikat');


    shuffle(Fragen);
}





function pruefeEingabe() {
    var gesettet = false;
    if(gesperrt == false) {
        gesperrt = true;
        eingabe = document.getElementById('eingabe').value;
        eingabe = eingabe.replace(/ /g, '');
        eingabe = eingabe.toLowerCase(eingabe);
        richtigeAntwortklein = richtigeAntwort.toLowerCase(richtigeAntwort);
        if(eingabe == richtigeAntwortklein) {
            gesettet = true;
            Punkte++;
            document.getElementById('eingabe').style.background = 'lightgreen';
            document.getElementById('lösung').innerHTML = 'Richtig!';
            setTimeout(stelleAufgabe, 1000);
        }
        if(eingabe == 'code:protokoll') {
            gesettet = true;
            gesperrt2 = true;
            gesperrt = true;
            start = false;
            textlocalstorage = 'Gespeichert: '; 

            for(i = 1; i < speicherindextest1satzglieder + 1; i++) {
                textlocalstorage += ' Punkte: ' + localStorage.getItem('punktetest1satzglieder' + i);
                textlocalstorage += ' Runden: ' + localStorage.getItem('rundentest1satzglieder' + i);
                textlocalstorage += ' Fehler: ' + localStorage.getItem('fehlertest1satzglieder' + i);
                textlocalstorage += ' Speicherindex: ' + i + ' | ';
            }
            document.getElementById('lösung').innerHTML = textlocalstorage;
            document.getElementById('lösung').style.fontSize = '30px';
            return false
        }

        if(eingabe == 'code:clear') {
            gesettet = true;
            localStorage.clear();
            localStorage.setItem('speicherindextest1satzglieder', 0);
            localStorage.setItem('punktetest1satzglieder' + speicherindextest1satzglieder, 0);
            localStorage.setItem('rundentest1satzglieder' + speicherindextest1satzglieder, 0);
            localStorage.setItem('fehlertest1satzglieder' + speicherindextest1satzglieder, 0);
            gesperrt = false;
        }
            

        if(gesettet == false) {
            document.getElementById('eingabe').style.background = 'red';
            document.getElementById('lösung').innerHTML = richtigeAntwort;
            falsch.push('Frage: ' + document.getElementById('Frage').innerHTML +  ', Eingabe: '+ eingabe + ', Lösung: ' + richtigeAntwort +  ', Zeit: ' + zeit + ' | ');
            setTimeout(stelleAufgabe, 5000);
            Fragen.push(diefrage);
            
            shuffle(Fragen);
        }
        runden++;

    }
    return false
}



function spielende() {
    speicherindextest1satzglieder = speicherindextest1satzglieder + 1;
    localStorage.setItem('punktetest1satzglieder' + speicherindextest1satzglieder, Punkte);
    localStorage.setItem('rundentest1satzglieder' + speicherindextest1satzglieder, runden);
    localStorage.setItem('fehlertest1satzglieder' + speicherindextest1satzglieder, falsch);
    localStorage.setItem('speicherindextest1satzglieder', speicherindextest1satzglieder);
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
}


function spielendetestenbutton() {
    if(start == true) {
        document.getElementById('endebutton').style.background = 'lightgreen';
        setTimeout(spielende, 300);
    }
}


function shuffle (myArray) {
    var arrayLength = myArray.length;
    if ( arrayLength == 0 ) return false; // false wenn das Array leer ist
    for(var i =0; i < arrayLength; i++) {
        //zufaellige Nummer aus dem Array auswaehlen
        var j = Math.floor( Math.random() * ( arrayLength-1 ) );
        //aktuelle Arraynummer mit dem zufaellig generierten austauschen (swap)
        var tempi = myArray[i];
        var tempj = myArray[j];
        myArray[i] = tempj;
        myArray[j] = tempi;
    }
    return myArray;
}

setInterval(drawstats, 10);


function drawstats() {
    if(start == true) {
        document.getElementById('Zeit').innerHTML = 'Zeit: ' + zeit;
    }
}

function stelleAufgabe() { 
    if(gesperrt2 == false) {
        if(Punkte < 68) {
            start = true;
            document.getElementById('lösung').innerHTML = 'Lösung';
            document.getElementById('eingabe').value = '';
            gesperrt = false;
            document.getElementById('eingabe').style.background = 'white';
            diefrage = Fragen.shift();
            var frageAufbereitet = diefrage.split("#");
            document.getElementById('Frage').innerHTML = frageAufbereitet[0];
            richtigeAntwort = frageAufbereitet[1];
        } else {
            spielende();
        }
    }
}