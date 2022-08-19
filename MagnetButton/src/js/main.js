const buttons = document.querySelectorAll('.magnatic-container');
const time = 150;

buttons.forEach((elm) => {
	elm.addEventListener('mousemove', move);
	elm.addEventListener('mouseenter', start);
	elm.addEventListener('mouseleave', end);
});

function getChilds($event) {
	return {
		background: $event.target.querySelector('.magnetic-background'),
		element: $event.target.querySelector('.magnetic-element'),
	};
}

function move($event) {
	const x = $event.layerX - $event.target.clientWidth / 2;
	const y = $event.layerY - $event.target.clientHeight / 2;
	const { background, element } = getChilds($event);

	background.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
	element.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
}

function startAnimation($event) {
	const { background, element } = getChilds($event);
	const transition = `all ${time}ms ease`;
	background.style.transition = transition;
	element.style.transition = transition;
}

function endAnimation($event) {
	const { background, element } = getChilds($event);
	setTimeout(() => {
		background.style.transition = '';
		element.style.transition = '';
	}, time);
}

function start($event) {
	startAnimation($event);
	endAnimation($event);
}

function end($event) {
	const { background, element } = getChilds($event);

	startAnimation($event);

	background.style.transform = `translate(0px, 0px)`;
	element.style.transform = `translate(0px,0px)`;

	endAnimation($event);
}
