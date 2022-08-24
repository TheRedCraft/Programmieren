const addClass = (obj) => {
	obj.classList.add('aktive');
};

const removeClass = (obj) => {
	obj.classList.remove('aktive');
};

let status = false;
let stepTwo = false;
const BUTTON = document.querySelector('#delete-button');

BUTTON.addEventListener('click', function () {
	const OBJ = this;
	const EMPTY = OBJ.querySelector('#empty');
	const STEPTWO = OBJ.querySelector('#step-two');
	if (status === false) {
		status = true;
		addClass(OBJ);
		addClass(EMPTY);
		setTimeout(function () {
			addClass(STEPTWO);
			setTimeout(function () {
				stepTwo = true;
			}, 250);
		}, 2500);
	}
	if (status === true && stepTwo === true) {
		STEPTWO.innerHTML = 'Done';
		done();
		/*removeClass(OBJ);
		removeClass(EMPTY);
		removeClass(STEPTWO);
		setTimeout(function () {
			stepTwo = false;
			status = false;
		}, 250);*/
	}
});

function done() {
	document.querySelector('#step-two').classList.add('done');
}
