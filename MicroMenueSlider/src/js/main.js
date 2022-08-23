const PADDING = 5;
const SLIDER = document.querySelector('#slider');
const MENUITEMS = document.querySelectorAll('.menu-slider-icon');

MENUITEMS.forEach((item) => {
	item.addEventListener('click', function (e) {
		const BUTTON = findButtonInPath(e);
		moveSlider(SLIDER, findButtonXPosition(BUTTON));
		setAktivClass(BUTTON);
	});
});

function setAktivClass(elm) {
	MENUITEMS.forEach((item) => {
		item.classList.remove('aktiv');
	});
	elm.classList.add('aktiv');
}

function moveSlider(slider, position) {
	slider.style.transform = `translate(${position}px,  0)`;
}

function findButtonXPosition(elm) {
	return Math.round(elm.offsetLeft - PADDING);
}

function findButtonInPath(event) {
	let element;
	event.path.forEach((elm) => {
		if (elm.classList) {
			if (elm.classList.contains('menu-slider-icon')) {
				element = elm;
			}
		}
	});
	return element;
}
