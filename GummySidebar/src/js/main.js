const menuData = [
	{
		label: 'Home',
		icon: '<i class="fas fa-home"></i>',
		color: '#00ff80',
		link: '/',
	},
	{
		label: 'Portfolio',
		icon: '<i class="fas fa-paint-brush"></i>',
		color: '#ff6ed3',
		link: '/',
	},
	{
		label: 'Skills',
		icon: '<i class="fas fa-vial"></i>',
		color: '#64ffff',
		link: '/',
	},
];

const config = {
	menuelementClass: 'menuelement',
	backgroundClass: 'bg-color',
};

const navigation = document.querySelector('.navigation');
const sitebar = document.querySelector('.sitebar');

function createHTMLItem(menuitem) {
	const newMenüItem = document.createElement('div');
	const newLabelDiv = document.createElement('div');
	const newLabelPlusDiv = document.createElement('div');
	const newIcon = document.createElement('a');

	newMenüItem.dataset.color = menuitem.color;
	newMenüItem.classList.add(config.menuelementClass);

	newLabelDiv.innerHTML = menuitem.label;
	newLabelDiv.classList.add(...['label', config.backgroundClass]);
	newMenüItem.appendChild(newLabelDiv);

	newIcon.innerHTML = menuitem.icon;
	newIcon.href = menuitem.link;
	newIcon.classList.add(...['icon', config.backgroundClass]);
	newMenüItem.appendChild(newIcon);

	newLabelPlusDiv.classList.add(...['label-plus', config.backgroundClass]);
	newMenüItem.appendChild(newLabelPlusDiv);

	return newMenüItem;
}

function renderNavigation() {
	menuData.forEach((menuelement) => {
		navigation.appendChild(createHTMLItem(menuelement));
	});
}

renderNavigation();

sitebar.classList.add(...[config.backgroundClass]);

setColorToElement(config.backgroundClass, menuData[0].color);

function setColorToElement(cssClass, color) {
	const elements = document.querySelectorAll('.' + cssClass);
	elements.forEach((elm) => {
		elm.style.backgroundColor = color;
	});
}

const getEventTrigger = sitebar.querySelectorAll('.' + config.menuelementClass);

getEventTrigger.forEach((elm) => {
	elm.addEventListener('mouseenter', function (e) {
		setColorToElement(config.backgroundClass, e.target.dataset.color);
	});
});
