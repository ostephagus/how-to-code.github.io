//Hide the nav menu then show it when mouse is hovered
$('nav').hide();
$('.menu').on('mouseenter', () => {
	$('nav').fadeIn(500);
}).on('mouseleave', () => {
	$('nav').fadeOut(500);
});
