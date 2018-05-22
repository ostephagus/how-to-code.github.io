//Hide the nav menu then show it when mouse is hovered
$('nav').hide();
function navA() {
	window.setTimeOut(navB,1000)
}
function navB() {
	$('.menu').on('mouseenter', () => {
		$('nav').fadeIn(500);
	}).on('mouseleave', () => {
		$('nav').fadeOut(500);
	});
}
while true {
	navB()
}
