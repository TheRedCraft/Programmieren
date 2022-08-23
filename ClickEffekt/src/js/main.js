$('aside')
	.stop()
	.on('click', function () {
		$('.dot')
			.addClass('ud_klick_dot')
			.css('top', event.clientY)
			.css('left', event.clientX);

		$('aside').stop().toggleClass('aktiv_menu');

		setTimeout(function () {
			$('.ud_klick_dot').removeClass('ud_klick_dot');
		}, 400);
	});
