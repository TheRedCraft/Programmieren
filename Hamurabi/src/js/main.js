var jahr = 0;
var buerger = 100;
var korn = 6000;
var land = 400;
var ende = false;
var landpreis = 5;
var ernteproacker;

function spieleeinerunde() {
    if(ende == false) {
        jahr++;
        bestimmeernteerfolg();
        verarbeitebefehle();
        bestimmelandpreis();
        erstellebericht();
        pruefeende();
    }
}

function bestimmelandpreis() {
    landpreis = Math.round(Math.random() * 10 + 0.5);
    if(Math.random() > 0.9) {
        landpreis = Math.round(Math.random() * 15 + 0.5);
    }
}

function bestimmeernteerfolg() {
    ernteproacker = Math.round(Math.random() * 5 + Math.random() * 5 + 0.5);
}

function verarbeitebefehle() {
    var eingabe = prompt("Erteilt eure Befehle, hoher Herscher", "Nahrung,Aussaat,Landhandel");
    var befehle = eingabe.split(',');

    var verteileKorn = parseInt(befehle[0]);
    var saeeKorn = parseInt(befehle[1]);
    var landKauf = parseInt(befehle[2]);

    if(isNaN(verteileKorn) || verteileKorn < 0) {
        verteileKorn = 0;
    }

    if(isNaN(saeeKorn) || saeeKorn < 0) {
        saeeKorn = 0;
    } 
    if(isNaN(landKauf)) {
        landKauf = 0;
    }

    bevoelkerung(verteileKorn);
    aussaat(saeeKorn);
    handel(landKauf);
}

function bevoelkerung(nahrung) {
    if(nahrung > korn) {
        nahrung = korn;
    }
    korn = korn - nahrung;
    var ausreichendNahrung = Math.round(nahrung / 20) - buerger;

    var neuebuerger = 0;
    if(ausreichendNahrung > 0) {
        neuebuerger = ausreichendNahrung / 2;
    }
    var verstorbenebuerger = 0;
    if(ausreichendNahrung > 0) {
        verstorbenebuerger = -ausreichendNahrung;
    }
    buerger = Math.round(buerger + neuebuerger - verstorbenebuerger);
}

function aussaat(saat) {
    if(saat > korn) {
        saat = korn;
    }
    korn = korn - saat;
    var moeglichesaat = parseInt(saat / 2);

    if(moeglichesaat > buerger * 10) {
        moeglichesaat = buerger * 10;
    }
    if(moeglichesaat > land) {
        moeglichesaat = land;
    }
    geerteteskorn = ernteproacker * moeglichesaat;
    korn = korn + geerteteskorn;
}

function handel(kauf) {
    if(kauf < 0) {
        var verkauf = Math.abs(kauf);
        if(kauf > land) {
            return;
        }
        land = land - verkauf;
        korn = korn + verkauf + landpreis;
    }

    if(kauf > 0) {
        if(kauf * landpreis > korn) {
            alert("Nicht genug Geld für den Landkauf!");
            return;
        }
        land = land + kauf;
        korn = korn - kauf * landpreis;
    }
}

function erstellebericht() {
    var ernte;
    switch(ernteproacker) {
        case 1:
            ernte = "Unwetter vernichten Teile der Ernte";
            break;
        case 2:
        case 3:
            ernte = "Das Wetter war schlecht!";
            break;
        case 6:
        case 7:
            ernte = "Das Wetter war gut. die Ernte war reichlich!"
            break;
        case 8:
        case 9:
        case 10:
            ernte = "Das Wetter war sehr gut. Die Ernte war hervorragend!";
            break;
        case 4:
        case 5:
        default:
            ernte = "Das Wetter war normal!";
            break;
    }

    var info = `Weiser Herscher Hammurabi!<br>
    Wir schreiben das Jahr ${jahr} Euer Herschaft.<br>
    ${buerger} treue Bürger zäht euer Reich.<br>
    ${ernte} <br> ${korn} Scheffel Korn lagern in den Kornkammern.<br>
    ${land} Acker Land besitzt ihr.<br>
    ${landpreis} Scheffel Korn kostet ein Acker Land`;

    monitor.innerHTML += info;
    return;
}

function pruefeende() {
    var abbruchgrund = "<br>";
    if(buerger < 1) {
        ende = true;
        abbruchgrund += "Ihr habt zu wenige Untertanen. ";
    }
    if(korn < 1) {
        ende = true;
        abbruchgrund += "Eure Kornkammern sind leer. ";
    }
    if(land < 1) {
        ende = true;
        abbruchgrund += "Ihr habt zu wenig Land. ";
    }
    if(jahr > 20 && ende == false) {
        ende = true;
        abbruchgrund = `Nach 20 Jahren ist das Ende Eurer Zeit als Herscher
        gekommen.<br>Euer Name soll auf ewig gepriesen werden!
        Ihr habt weise und gerecht reagiert.`;
    }

    if(ende) {
        abbruchgrund = "<br><br>Eure Herrschaft ist beendet. " + abbruchgrund;
        monitor .innerHTML = monitor.innerHTML + abbruchgrund;
    }
}