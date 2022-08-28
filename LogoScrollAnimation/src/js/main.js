// ✅ DEFINITION UNSERER ELEMENTE
const SVGLOGO = document.getElementById('logo');

// ✅ DEFINITION VON VARIABLEN
const LOGOLENGTH = SVGLOGO.getTotalLength();

// ✅ GRUNDLEGENDES SETTING
SVGLOGO.style.strokeDasharray = LOGOLENGTH;
SVGLOGO.style.strokeDashoffset = LOGOLENGTH;

// ✒️ ZEICHNEN UNSERES SVG GRAFEN
const drawWhenScroll = () => {
	const DRAWLOGO = LOGOLENGTH * calcScrollPercent();
	SVGLOGO.style.strokeDashoffset = LOGOLENGTH - DRAWLOGO;
	if (calcScrollPercent() === 1) {
		SVGLOGO.style.fill = '#ff6e48';
	} else {
		SVGLOGO.style.fill = 'transparent';
	}
};

// 🙉 FUNKTION UM EINEN % WERT DES SCROLLS ZU BERECHNEN
const calcScrollPercent = () => {
	let height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	return document.documentElement.scrollTop / height;
};

// 🙊 FUNKTION FÜR DAS TRIGGERS DES SCROLL EVENTS
window.addEventListener('scroll', drawWhenScroll);
