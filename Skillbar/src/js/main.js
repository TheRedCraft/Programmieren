const bottomDiff = 100;
const skillbars = document.querySelectorAll('.skillbar');

window.addEventListener('scroll', () => {
	skillbars.forEach((skillbar) => {
		const status = checkIfIsInView(skillbar);
		manageClass(skillbar, status, 'show');
		setWidth(skillbar, status, '.skillbar-bg');
	});
});

function manageClass(element, status, classname) {
	status
		? element.classList.add(classname)
		: element.classList.remove(classname);
}

function setWidth(element, status, classname) {
	const child = element.querySelector(classname);
	child.style.width = status ? `${child.dataset.width}%` : `0%`;
}

function checkIfIsInView(element) {
	const bordersElements = element.getBoundingClientRect();
	return (
		bordersElements.top >= 0 &&
		bordersElements.left >= 0 &&
		bordersElements.right <=
			(window.innerWidth || document.documentElement.clientWidth) &&
		bordersElements.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) -
				bottomDiff
	);
}
