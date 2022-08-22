const nav = document.querySelector('#main-nav');
const navElements = nav.querySelectorAll('a');
const navSlider = nav.querySelector('.nav-slider');
const activeClassName = 'active';
let initLoad = true;

navElements.forEach((elm) => {
	elm.addEventListener('click', ($event) => {
		addToggleClass(getLinkElm($event.path));
	});
});

function getLinkElm(elements) {
	return elements.find((elm) => elm.tagName === 'A');
}

function getActiveElement() {
	return document.querySelector(`.${activeClassName}`);
}

function addToggleClass(newElement) {
	const oldElement = document.querySelector(`.${activeClassName}`);
	oldElement.classList.remove(activeClassName);
	newElement.classList.add(activeClassName);
	animateNavSlider(getActiveElement());
}

function animateNavSlider(element) {
	setAnimation();
	const navPosition = nav.getBoundingClientRect().x;
	const elmPos = element.getBoundingClientRect().x;
	const width = element.getBoundingClientRect().width;
	const pos = elmPos - navPosition;
	navSlider.style.transform = `translate(${pos}px, 0) scaleX(${width / 10})`;
}

function setAnimation() {
	if (initLoad) {
		initLoad = false;
	} else {
		navSlider.classList.add('animation');
	}
}

addToggleClass(getActiveElement());
