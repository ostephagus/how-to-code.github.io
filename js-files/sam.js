//Hide the nav menu then show it when mouse is hovered
console.log('JavaScript file running at version 1.1.8');
$(document).ready(() => {
	$('nav').hide();
	$('.menu').on('mouseenter', () => {
		$('nav').fadeIn(500);
	}).on('mouseleave', () => {
		$('nav').fadeOut(500);
	});
});
