$('document').ready(() => {
	$('nav').hide();
	$('.menu').on('mouseenter', () => {
		$('nav').slideIn(500);
	}).on('mouseleave', () => {
		$('nav').slideOut(500);
	});
});
