function position() {
	$('.st-def').each(function (index, el) {
		var element = $('.st-def').eq(index);
		var left = element.css('left').replace('px', '');
		var top = element.css('top').replace('px', '');
		var addLeft = $('.st-widget img').position();
		$('.st-def').css('left', parseInt(left) + parseInt(addLeft.left));
		$('.st-def').css('top', parseInt(top) + parseInt(addLeft.top));
	});
}

if (typeof jQuery != 'function') {
	var head = document.getElementsByTagName('head').item(0);
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
    head.appendChild(script);
    script.onload = function () {
    	position();
    };
} else {
	position();
}
