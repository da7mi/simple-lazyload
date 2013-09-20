/**
 *
 * jQuery simple lzyload
 *
 * Licensed under the MIT license
 * Copyright 2013 da7mi
 * https://github.com/da7mi/simple-lazyload
 *
 * Usage:
 * 		$('img').sLsyload({
 * 			orgsrc: 'data-src' // display image src [default 'data-src']
 * 		});
 *
 **/

;
(function($){
	$.fn.sLzyload = function(options) {
		var els = this,
				defaultOpts = {orgsrc: 'data-src', delay: 500},
				settings = $.extend(defaultOpts, options),
				orgsrc = settings.orgsrc,
				delay = settings.delay,
				dtsrc = orgsrc.replace(/^data-/, '');

		var isContain = function(windowY, windowH, targetY, targetH) {
			if (windowY < targetY && windowY + windowH > targetY) {
				return true;
			} else if (windowY < targetY + targetH && windowY + windowH > targetY + targetH) {
				return true;
			}
			return false;
		}

		var detect_img = function() {
			$.each(els, function(i, item){
				if ($(item).is(':hidden')) {
					return;
				}
				var targetTop = $(item).offset().top,
						targetHeight = $(item).height(),
						windowTop = $(window).scrollTop(),
						windowHeight = $(window).height();
				if (isContain(windowTop, windowHeight, targetTop, targetHeight) && $(item).attr(orgsrc)) {
					var imgSrc = $(item).attr(orgsrc);
					$(item).removeAttr(orgsrc).removeData(dtsrc).attr('src', imgSrc);
				}
			});
		}

		$(window).on('load', detect_img);
		$(window).on('scroll', detect_img);
	};
})(jQuery);
