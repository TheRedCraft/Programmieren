const inputs = document.querySelectorAll('.otp-input-fields input');

inputs.forEach((input, index) => {
	input.dataset.index = index;
	input.addEventListener('focus', clear);
	input.addEventListener('keydown', clear);
	input.addEventListener('paste', onpaste);
	input.addEventListener('keyup', onKeyUp);
});

function clear($event) {
	$event.target.value = '';
}

function checkNumber(number) {
	return /[0-9]/g.test(number);
}

function onpaste($event) {
	const data = $event.clipboardData.getData('text');
	const value = data.replace(/ /g, '').split('');
	if (!value.some((number) => !checkNumber(number))) {
		if (value.length == inputs.length) {
			inputs.forEach((input, index) => {
				input.value = value[index];
				submit();
			});
		}
	} else {
		return;
	}
}

function onKeyUp($event) {
	const input = $event.target;
	const value = input.value;
	const fieldindex = +input.dataset.index;

	if ($event.key == 'Backspace' && fieldindex > 0) {
		input.previousElementSibling.focus();
	}

	if (checkNumber(value)) {
		if (value.length > 0 && fieldindex < inputs.length - 1) {
			input.nextElementSibling.focus();
		}

		if (input.value != '' && fieldindex == inputs.length - 1) {
			submit();
		}
	} else {
		clear($event);
	}
}

function submit() {
	let otp = '';

	inputs.forEach((input) => {
		otp += input.value;
		input.disabled = true;
	});

	console.log(otp);
}
