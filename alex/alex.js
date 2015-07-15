var page = require('webpage').create();


page.open('https://www.facebook.com/media/set/?set=a.722469927316.2161622.503132&type=1', function () {
	setTimeout(function () {
		
		page.injectJs('jquery.min.js');
		
		var nodes = page.evaluate(function () {
			
			var images = [];
			var nodes = $('.fbStarGrid > div').each(function (index, item) {
				
				images.push($(item).data('starred-src'));
			});
			return images;
		});
		console.log(nodes.join("\n"));
		phantom.exit(0);


	}, 5000);
});


