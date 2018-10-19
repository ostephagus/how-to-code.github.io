console.log('JavaScript file running at version 1.2.3');
$(document).ready(() => {
	$('nav').hide();
	$("#MaintenanceBanner").fadeIn(200);
	$('.menu').on('click', () => {
		$('nav').fadeToggle(500);
	});
	$("#closeMaintenanceBanner, .maintenanceBannerOK").on('click', () => {
		$("#maintenanceBanner").fadeOut(200);
	}); 
});
