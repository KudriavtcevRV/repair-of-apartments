$(document).ready(function(){
	let button = $('#button');
	let modal = $('#modal');
	let close = $('.close');
	let cardLink = $('.card__link');

	button.on('click', function () {
		modal.addClass('modal_active');
	});

	cardLink.on('click', function (event) {
		event.preventDefault();
		modal.addClass('modal_active');
		let target = $(this).attr('data-target');
		$('.modal-content').load(target+".html")
	});

	close.on('click', function () {
		modal.removeClass('modal_active');
	});
});
