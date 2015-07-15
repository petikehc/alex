$(function () {
	$.get('//s3.amazonaws.com/alexalexalex/alex', function (alex1) {
		var alex2 = $('#container');
		
		var alex3 = alex1.split("\n");
		for (var alex4 in alex3) {
			var alex5 = $('<div />')
				.addClass('alex')
				.css('background-image', 'url(' + alex3[alex4] + ')');
			alex5.appendTo(alex2);
		}
		var alex6 = 0;
		var alex7 = $('#container').find('div');
		var alex8 = setInterval(function () {
			$(alex7[ alex6 ]).addClass('visible');
			var alex8 = alex6 - 1 < 0 ? alex7.length - 1 : alex6 - 1;
			$(alex7[ alex8 ]).removeClass('visible');
			alex6++;
			if (alex6 >= alex7.length) {
				clearInterval(alex8);
				$(alex7[ alex6 - 1 ]).removeClass('visible');
				$('body, #alex').addClass('chickensoup');
				var alex9 = 0;
				setInterval(function () {
					$(document.body).css('background-image', 'url(' + alex3[ alex9 ]+ ')');
					alex9 = (alex9 + 1) % alex3.length;
				}, 50);
				setTimeout(function () {
					window.location.href = 'https://player.vimeo.com/video/92986981?autoplay=1';
				}, 1000 * 30);
			}
		}, 666);
	});
});	
