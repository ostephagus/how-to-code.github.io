//Hide the nav menu then show it when mouse is hovered
console.log('JavaScript file running at version 1.2.2');
$(document).ready(() => {
	$('nav').hide();
	$('.menu').on('click', () => {
		$('nav').fadeToggle(500);
	});
	$("#MaintenanceBanner").fadeIn(200);
	$("#closeMaintenanceBanner, .maintenanceBannerOK").click(function() {
		$("#maintenanceBanner").fadeOut(200);
	}); 
});
