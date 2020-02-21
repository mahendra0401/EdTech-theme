$( document ).ready(function() {
	$('#main-slider.carousel').carousel({
	      interval: 2000
	    });
	$('#main-slider .next').trigger('click');
});