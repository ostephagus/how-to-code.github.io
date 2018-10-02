//Hide the nav menu then show it when mouse is hovered
console.log('JavaScript file running at version 1.1.11');
$(document).ready(() => {
	$('nav').hide();
	$('.menu').on('click', () => {
		$('nav').fadeToggle(500);
	})
