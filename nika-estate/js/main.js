$(function () {
    $('.box__flex-image-inner').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img src="img/arrows-left.svg" alt="" class="left">',
        nextArrow: '<img src="img/arrows-right.svg" alt="" class="right">'
    });

	$('.link-img').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	    image: {
	        verticalFit: true
	    },
	    zoom: {
	        enabled: true,
	        duration: 300 // don't foget to change the duration also in CSS
	    }
	});
});