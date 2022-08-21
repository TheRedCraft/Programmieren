const SLIDERCONTAINER = document.querySelector('.slider-outer-wrapper');
const SLIDER = document.querySelector('.slider-inner-wrapper');
const SLIDES = document.querySelectorAll('.slide');

SLIDER.style.width = `${SLIDES.length * 100}%`;

const HAMMER = new Hammer(SLIDER);
const SLIDERSIZE = 100;
const SENSITIVITY = 15;

let timer;
let panIsRunning = false;
let activeIndex = 0;

HAMMER.on('pan', ($event) => {
	panIsRunning = true;
	const panDistance =
		((SLIDERSIZE / SLIDES.length) * $event.deltaX) / SLIDER.clientWidth;
	const panDistanceCalculated =
		panDistance - (SLIDERSIZE / SLIDES.length) * activeIndex;
	animateSlider(panDistanceCalculated);
	if ($event.isFinal) {
		if (panDistance <= -(SENSITIVITY / SLIDES.length)) {
			goToSlide(activeIndex + 1);
		} else if (panDistance >= SENSITIVITY / SLIDES.length) {
			goToSlide(activeIndex - 1);
		} else {
			goToSlide(activeIndex);
		}
	}
});

const generateBullets = (elements, target) => {
	const newNavigation = document.createElement('div');
	newNavigation.classList.add('navigation');
	elements.forEach((bullet, index) => {
		const newBullet = document.createElement('button');
		newBullet.classList.add('bullet');
		newBullet.dataset.active = index;
		if (index === activeIndex) {
			newBullet.classList.add('bullet-active');
		}
		newNavigation.appendChild(newBullet);
	});
	target.appendChild(newNavigation);
	document.querySelectorAll('.bullet').forEach((bullet) => {
		bullet.addEventListener('click', bulletClick, false);
	});
};

const bulletClick = ($event) => {
	activeIndex = Number($event.target.dataset.active);
	goToSlide(activeIndex);
};

const setActiveBullet = () => {
	const activeBullet = document.querySelector('.bullet-active');
	if (activeBullet) {
		activeBullet.classList.remove('bullet-active');
	}
	document.querySelectorAll('.bullet').forEach((bullet) => {
		if (bullet.dataset.active === activeIndex.toString()) {
			bullet.classList.add('bullet-active');
		}
	});
};

const goToSlide = (index) => {
	if (index < 0) {
		activeIndex = 0;
	} else if (index > SLIDES.length - 1) {
		activeIndex = SLIDES.length - 1;
	} else {
		activeIndex = index;
	}
	SLIDER.classList.add('is-animating');
	const percentage = -(SLIDERSIZE / SLIDES.length) * activeIndex;
	animateSlider(percentage);
	setActiveBullet();
	setActiveSlide(activeIndex);
	addSmoothTransition();
};

const addSmoothTransition = () => {
	clearTimeout(timer);
	timer = setTimeout(() => {
		SLIDER.classList.remove('is-animating');
		panIsRunning = false;
	}, 400);
};

const animateSlider = (percentage) => {
	const distance = (SLIDERSIZE / SLIDES.length) * (SLIDES.length - 1);
	if (percentage > 0) {
		percentage = 0;
	} else if (percentage < -distance) {
		percentage = -distance;
	}
	SLIDER.style.transform = 'translateX( ' + percentage + '% )';
};

const setActiveSlide = (index) => {
	const ELEMENT = document.querySelector('.active');
	if (ELEMENT) {
		ELEMENT.classList.remove('active');
	}
	SLIDES[index].classList.add('active');
};

setActiveSlide(activeIndex);
generateBullets(SLIDES, SLIDERCONTAINER);
