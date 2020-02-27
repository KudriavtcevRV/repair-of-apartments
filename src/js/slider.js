$(document).ready(function () {
	$('.slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: $('.arrows__left'),
	nextArrow: $('.arrows__right'),
	responsive: [{
			breakpoint: 1200,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 993,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

	]
	})
});