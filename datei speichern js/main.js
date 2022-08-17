window.onload = init;

function init() {
	var button = document.getElementById('mehr');
	button.onclick = ToDoHinzufügen;
	var clearButton = document.getElementById('loeschen');
	clearButton.onclick = allesLöschen;
	var todos = HolEinträge();
	for (var i = 0; i < todos.length; i++) {
		var aufgabeNr = todos[i];
		var value = JSON.parse(localStorage[aufgabeNr]);
		insDOMschreiben(aufgabeNr, value);
	}
}

function HolEinträge() {
	var todos = localStorage.getItem('todos');
	if (!todos) {
		todos = [];
		localStorage.setItem('todos', JSON.stringify(todos));
	} else {
		todos = JSON.parse(todos);
	}
	return todos;
}

function ToDoHinzufügen() {
	var todos = HolEinträge();
	var value = document.getElementById('eingabe')
		.value;
	if (value != '') {
		var currentDate = new Date();
		var aufgabeNr = 'aufgabe_' + currentDate.getTime()
		var aufgabeText = {
			'value': value
		};
		localStorage.setItem(aufgabeNr, JSON.stringify(aufgabeText));
		todos.push(aufgabeNr);
		localStorage.setItem('todos', JSON.stringify(todos));
		insDOMschreiben(aufgabeNr, aufgabeText);
		document.getElementById('eingabe')
			.value = ' ';
	} else {
		alert('Bitte geben Sie etwas ein!');
	}
}

function toDoLöschen(e) {
	var aufgabeNr = e.target.id;
	var todos = HolEinträge();
	if (todos) {
		for (var i = 0; i < todos.length; i++) {
			if (aufgabeNr == todos[i]) {
				todos.splice(i, 1);
			}
		}
		localStorage.removeItem(aufgabeNr);
		localStorage.setItem('todos', JSON.stringify(todos));
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
