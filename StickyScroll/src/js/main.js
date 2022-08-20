const STICKYCONTROLS = document.querySelectorAll(`[data-sticky]`);
const STICKY = document.querySelector('#sticky');

window.addEventListener('scroll', ($event) => {
	getActualControlElement(STICKYCONTROLS, window.scrollY);
});

const setStickyPosition = (stickyElm, control) => {
	const width = stickyElm.clientWidth;
	const maxWidth = document.body.clientWidth;

	const height = stickyElm.clientHeight;
	const maxHeight = window.innerHeight;

	const offset = 50;

	const horizontalCenter = maxWidth / 2 - width / 2;
	const verticalCenter = maxHeight / 2 - height / 2;

	switch (control) {
		case 'sticky-left':
			stickyElm.style.top = `${verticalCenter}px`;
			stickyElm.style.left = `${offset}px`;
			break;
		case 'sticky-right':
			stickyElm.style.top = `${verticalCenter}px`;
			stickyElm.style.left = `${maxWidth - width - offset}px`;
			break;
		case 'sticky-center':
			stickyElm.style.top = `${verticalCenter}px`;
			stickyElm.style.left = `${horizontalCenter}px`;
			break;
		default:
			stickyElm.style.top = `${verticalCenter}px`;
			stickyElm.style.left = `${offset}px`;
	}
};

const getActualControlElement = (elements, scrollPos) => {
	elements.forEach((element) => {
		if (isInView(element)) {
			setStickyPosition(STICKY, element.dataset.sticky);
		}
	});
};

const isInView = (elm) => {
	const offset = window.innerHeight / 3;
	const min = window.scrollY + offset;
	const max = window.scrollY - offset + window.innerHeight;

	const posTop = elm.offsetTop;
	const posBottom = posTop + elm.clientHeight;

	return (
		(posTop < min && posBottom > min) || (posBottom > max && posTop < max)
	);
};

setStickyPosition(STICKY);
