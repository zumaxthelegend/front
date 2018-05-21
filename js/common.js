$(document).ready(function() {
	// var slideIndex  = 1,
	// sliding     = false;

	// $('#fullpage').fullpage({
	// 	scrollHorizontally: true,
	// 	navigation: false,
	// 	slidesNavPosition: 'right'
	// });

	//  $('#fullpage').on('mousewheel', function(event) {
 //        if (event.deltaY > 0){$.fn.fullpage.moveSlideRight();}
 //        else{$.fn.fullpage.moveSlideLeft();}
	//  });
	$(".slider").slick({

		dots: true,
		infinite: false,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		appendArrows: '.slider-nav',
		prevArrow: '.left',
		nextArrow: '.right',
		appendDots: '.slider-dots',
		focusOnSelect: false

	});

		$(".slider").on('wheel', (function(e) {
		e.preventDefault();

		if (e.originalEvent.deltaY > 0) {
		$(this).slick('slickNext');
		} else {
		$(this).slick('slickPrev');
		}
	}));
});
