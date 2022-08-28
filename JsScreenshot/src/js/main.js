const BUTTON = document.querySelector('#take-screenshot');
const ELEMENT = document.querySelector('#highscore');

BUTTON.addEventListener('click', () => {
	html2canvas(ELEMENT, {
		scale: 5,
		backgroundColor: '#00fff1',
	}).then((image) => {
		const a = document.createElement('a');
		a.download = ELEMENT.dataset.name + '-highscore.png';
		a.href = image.toDataURL('image/png');
		a.click();
	});
});
