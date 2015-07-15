

$(function () {
	
	$.get('//s3.amazonaws.com/spotify-rewind/alex', function (response) {
		
		var container = $('#container');
		
		var images = response.split("\n");
		for (var i in images) {
			var div = $('<div />')
				.addClass('alex')
				.css('background-image', 'url(' + images[i] + ')');
			
			div.appendTo(container);
		}
		
		var c = 0;
		var nodes = $('#container').find('div');
		var i = setInterval(function () {
			$(nodes[c]).addClass('visible');
			var prevIndex = c - 1 < 0 ? nodes.length - 1 : c - 1;
			
			$(nodes[ prevIndex ]).removeClass('visible');
			
			c++;
			if (c >= nodes.length) {
				c = 0;
				
			}
		}, 666);
		
		
	});
	
});	
