console.log('JavaScript file running at version 1.2.3');
let navBarClosed = true;
$(document).ready(() => {
	$('nav').hide();
	$("#MaintenanceBanner").fadeIn(200);
	$('.menu').on('click', () => {
		if (navBarClosed) {
			$('.menu-button').text('Close');
			$('nav').fadeToggle(300);
		} else {
			$('.menu-button').text('Menu');
			$('nav').fadeToggle(300);
		}
	});
	$("#closeMaintenanceBanner, .maintenanceBannerOK").on('click', () => {
		$("#maintenanceBanner").fadeOut(200);
	}); 
});
