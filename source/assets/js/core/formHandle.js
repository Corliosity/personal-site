var formHandle = (function($) {

	var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	function submitData(data) {
		return $.post('/contact', data);
	}

	function prepareAndSubmit() {
		var data = $('form').serialize();
		submitData(data).done(function(response) {
			$('#thank-you p').text(response.success);
			$('form').css('display', 'none');
			$('#thank-you').css('display', 'block');
		});
	}

	function errorHandle(inputName) {
		$('input[name=' + inputName + ']').addClass('err-highlight');
	}

	function showErrorMsg() {
		$('div.error').addClass('err-msg');
	}
	
	function validateForm() {

		var error = false;
		var fullname = $('input[name=name]').val();
		var email = $('input[name=email]').val();
		var phone = $('input[name=phone]').val();

		if (fullname === null || fullname === '') {
			showErrorMsg();
			error = true;
			errorHandle('name');
		}

		if (!emailRegex.test(email) || email === '' || email === null) {
			showErrorMsg();
			error = true;
			errorHandle('email');
		}

		if (phone === null || phone === '') {
			showErrorMsg();
			error = true;
			errorHandle('phone');
		}

		if (error === true) {
			return false;
		} else {
			$('div.err-msg').removeClass('.err-msg');
			prepareAndSubmit();
		}
	}


	$('form').submit(function(event) {

		event.preventDefault();
		validateForm();
	});

})(jQuery);