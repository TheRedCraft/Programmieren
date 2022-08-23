var input = document.getElementById('toggleswitch');
var outputtext = document.getElementById('status');

input.addEventListener('change', function () {
	if (this.checked) {
		outputtext.innerHTML = 'aktiv';
	} else {
		outputtext.innerHTML = 'inaktiv';
	}
});
