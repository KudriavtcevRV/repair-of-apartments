$(document).ready(function(){
/* Маска для телефона */
$('.phone').mask("+7(999) 999-99-99");

/* Валидация формы блока offer */
$('#offer-form').validate({
	errorElement: 'div',
	errorClass: 'invalid-offer',
	validClass: 'success',
	rules: {
		username: {
			required: true,
			minlength: 2
		},
		phone: "required",
	},
	messages: {
		username: {
			required: "Укажите имя",
			minlength: jQuery.validator.format("Осталось символов: {0}")
		},
		phone: "Введите номер телефона"
	},
	submitHandler: function (form) {
		event.preventDefault();
		$.ajax({
			url: './mail.php',
			type: 'POST',
			data: $("#offer-form").serialize(),
			success: function (data) {
				alert('Спасибо за заявку, скоро мы вам перезвоним.');
				$("#offer-form").find("input").val(""); //ищем данные из инпутов и очищаем
			},
			error: function (jqXHR, textStatus) {
				console.log(jqXHR + ':' + textStatus);
			}
		});
	}
});

/* Валидация формы блока brif */
$('#brif-form').validate({
		errorElement: 'div',
		errorClass: 'invalid',
		validClass: 'success',
	rules: {
		username: {
			required: true,
			minlength: 2
		},
		phone: "required",
	},
	messages: {
		username: {
			required: "Укажите имя",
			minlength: jQuery.validator.format("Осталось символов: {0}")
		},
		phone: "Введите номер телефона"
	},
	submitHandler: function (form) {
		event.preventDefault();
		$.ajax({
			url: './mail.php',
			type: 'POST',
			data: $("#brif-form").serialize(),
			success: function (data) {
				alert('Спасибо за заявку, скоро мы вам перезвоним.');
				$("#brif-form").find("input").val(""); //ищем данные из инпутов и очищаем
			},
			error: function (jqXHR, textStatus) {
				console.log(jqXHR + ':' + textStatus);
			}
		});
	}
});



/* Валидация формы блока modal */
$('#modal-form').validate({
	errorElement: 'div',
	errorClass: 'invalid',
	validClass: 'success',
	rules: {
		username: {
			required: true,
			minlength: 2
		},
		phone: "required",
	},
	messages: {
		username: {
			required: "Укажите имя",
			minlength: jQuery.validator.format("Осталось символов: {0}")
		},
		phone: "Введите номер телефона"
	},
	submitHandler: function (form) {
		event.preventDefault();
		$.ajax({
			url: './mail.php',
			type: 'POST',
			data: $("#modal-form").serialize(),
			success: function (data) {
				alert('Спасибо за заявку, скоро мы вам перезвоним.');
				$("#modal-form").find("input").val(""); //ищем данные из инпутов и очищаем
			},
			error: function (jqXHR, textStatus) {
				console.log(jqXHR + ':' + textStatus);
			}
		});
	}
});

});