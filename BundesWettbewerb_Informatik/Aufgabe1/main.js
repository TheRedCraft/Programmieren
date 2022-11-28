function readFile() {
	const [file] = document.getElementById('file-selector').files;
	const reader = new FileReader();

	reader.addEventListener('load', () => {
		// this will then display a text file
		findrhymes(reader.result);
	});

	if (file) {
		reader.readAsText(file);
	}
}

function findrhymes(fileData) {
	let lines = fileData.split(/\r?\n/);
	for (i = 0; i < lines.length; i++) {
		for (e = 0; e < lines.length; e++) {
			if (lines[i].endsWith(/[a,e,i,o,u]/)) {
				lines[i].contact('a');
				console.log(lines[i]);
			}
			console.log('hi');
			let maßgebliche_Vokalgruppe_Wort1 = lines[i].split(/[a,e,i,o,u]/);
		}
	}
}
