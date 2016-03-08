var acInteraction = (function($) {

	var $previousEl = {};
	var pond = '#EBF6FF';

	function _setClickAction(event) {
		var $currentEl = $(event.currentTarget);
		var hobbyEl = $currentEl.attr('data-hobby');

		$('#' + hobbyEl).removeClass('hide').addClass('show');
		$currentEl.find('span').css('background', pond);

		$previousEl = $currentEl;
	}

	function _emptySelector() {
		var $emptyHobby = $('#' + $previousEl.attr('data-hobby'));
		$emptyHobby.removeClass('show').addClass('hide');

		$previousEl.find('span').css('background', 'none');

		$previousEl = {};
	}

	function _setClickHandler() {
		
		var $hobbyEl = $('.hobby-icon');
		
		$hobbyEl.on('click', function(event) {
			if (!$.isEmptyObject($previousEl)) {
				
				_emptySelector();
				_setClickAction(event);
			} else {
				_setClickAction(event);
			}
		});
	}

	function _init() {
		_setClickHandler();
	}

	return {
		init : _init
	}

})(jQuery);

$(document).ready(function() {
	acInteraction.init();
})