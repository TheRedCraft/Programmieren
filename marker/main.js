const MARKER = document.querySelectorAll('mark');
const COLOR = ['255, 0, 170','0, 237, 255','255, 110, 72'];


function random(min, max) {
    return Math.round(Math.random() * (min -max) + min);
}

function addBorderRadius(marker) {
    marker.style.borderRadius = `${random(2, 10)}px ${random(2, 10)}px ${random(2, 10)}px ${random(2, 10)}px`;
}

function addPadding(marker) {
    marker.style.padding = `${random(0, 3)}px ${random(0, 8)}px`;
}

function createGradientParth() {
    return `rgba(255, 0, 170, ${random(50, 100) / 100}), rgba(255, 0, 170, ${random(50, 100) / 100})`;
}

function addGradient(marker) {
    marker.style.backgroundImage = `linear-gradient(to ${random(0, 1) === 1 ? `left` : `right`}, ${createGradientParth()})`;
}

MARKER.forEach(marker => {
    addBorderRadius(marker);
    addPadding(marker);
    addGradient(marker);
});