var background = (function($) {
	
	var className 	= '',
		loc			= '',
		season		= '';

	function _init(options) {
		if (!options) {
			showBackground();
		} else {
			showBackground();
			preLoadSpecial(options);
		}
	}


	function getImageName() {
		var now 	= new Date(),
			month 	= now.getMonth() + 1,
			date 	= now.getDate();
		
		if (!$.cookie('i18next')) {
			loc = 'co';
		} else {
			loc = $.cookie('i18next');
		}

		if (month > 3  && month < 9) {
			season = 'summer';
		} else {
			season = 'winter';
		}

		return loc + '-' + season;

	}

	function showBackground(preLoadImage) {

		var image 		= new Image(),
			shownImage 	= getImageName(),
			lazyURL 	= '/assets/img/background/',
			$lazyTarget = (preLoadImage) ? $('.' + preLoadImage) : $('.main-bg');

		className = (preLoadImage) ? preLoadImage : shownImage;

		lazyURL += className + '.jpg';

		if (!preLoadImage) {
			$lazyTarget.addClass(className);
		}


		image.onload = function() {
			$lazyTarget.addClass('background-show');
		}

		image.src = lazyURL;
		
		if (image.complete == true) {
			image.onload();
		}

		return image;
	}

	function preLoadSpecial(backgroundNames) {
		if ($.isArray(backgroundNames)) {
			var fileNameArray = [];

			$.each(backgroundNames, function(index, value) {
				showBackground(value);
			});
		} else {
			showBackground(backgroundNames)
		}
	}

	return {
		init: _init
	};

})(jQuery);