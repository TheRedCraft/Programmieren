window.onload = init;

function init() {
	var button = document.getElementById('mehr');
	button.onclick = ToDoHinzufügen;
	var clearButton = document.getElementById('loeschen');
	clearButton.onclick = allesLöschen;
	var juliustodoliste = HolEinträge();
	for (var i = 0; i < juliustodoliste.length; i++) {
		var aufgabeNr = juliustodoliste[i];
		var value = JSON.parse(localStorage[aufgabeNr]);
		insDOMschreiben(aufgabeNr, value);
	}
}

function HolEinträge() {
	var juliustodoliste = localStorage.getItem('juliustodoliste');
	if (!juliustodoliste) {
		juliustodoliste = [];
		localStorage.setItem('juliustodoliste', JSON.stringify(juliustodoliste));
	} else {
		juliustodoliste = JSON.parse(juliustodoliste);
	}
	return juliustodoliste;
}

function ToDoHinzufügen() {
	var juliustodoliste = HolEinträge();
	var value = document.getElementById('eingabe')
		.value;
	if (value != '') {
		var currentDate = new Date();
		var aufgabeNr = 'aufgabe_' + currentDate.getTime()
		var aufgabeText = {
			'value': value
		};
		localStorage.setItem(aufgabeNr, JSON.stringify(aufgabeText));
		juliustodoliste.push(aufgabeNr);
		localStorage.setItem('juliustodoliste', JSON.stringify(juliustodoliste));
		insDOMschreiben(aufgabeNr, aufgabeText);
		document.getElementById('eingabe')
			.value = ' ';
	} else {
		alert('Bitte geben Sie etwas ein!');
	}
}

function toDoLöschen(e) {
	var aufgabeNr = e.target.id;
	var juliustodoliste = HolEinträge();
	if (juliustodoliste) {
		for (var i = 0; i < juliustodoliste.length; i++) {
			if (aufgabeNr == juliustodoliste[i]) {
				juliustodoliste.splice(i, 1);
			}
		}
		localStorage.removeItem(aufgabeNr);
		localStorage.setItem('juliustodoliste', JSON.stringify(juliustodoliste));
		ausDOMentfernen(aufgabeNr);
	}
}

function insDOMschreiben(aufgabeNr, ItemObj) {
	var eintraege = document.getElementById('eintraege');
	var eintrag = document.createElement('li');
	eintrag.setAttribute('id', aufgabeNr);
	eintrag.innerHTML = ItemObj.value;
	eintraege.appendChild(eintrag);
	eintrag.onclick = toDoLöschen;
}

function ausDOMentfernen(aufgabeNr) {
	var eintrag = document.getElementById(aufgabeNr);
	eintrag.parentNode.removeChild(eintrag);
}

function allesLöschen() {
	localStorage.clear();
	var ItemList = document.getElementById('eintraege');
	var eintraege = ItemList.childNodes;
	for (var i = eintraege.length - 1; i >= 0; i--) {
		ItemList.removeChild(eintraege[i]);
	}
	var eintraegeArray = HolEinträge();
}
