function toggle(variable) {
	if (variable == true) {
		return false;
	} else {
		return true;
	}
}
console.log('JavaScript file running at version 1.2.3');
let navBarClosed = true;
let fadeTime = 500;
$(document).ready(() => {
	$('nav').hide();
	$("#MaintenanceBanner").fadeIn(200);
	$('.menu').on('click', () => {
		if (navBarClosed) {
			$('.menu-button').text('Close');
			$('nav').fadeToggle(fadeTime);
			navBarClosed = toggle(navBarClosed);
		} else {
			$('.menu-button').text('Menu');
			$('nav').fadeToggle(fadeTime);
			navBarClosed = toggle(navBarClosed);
		}
	});
	$("#closeMaintenanceBanner, .maintenanceBannerOK").on('click', () => {
		$("#maintenanceBanner").fadeOut(200);
	}); 
});
