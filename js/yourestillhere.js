var check = function($minutes) {
	$.notification('You\'re still here', {
		className: 'jquery-notification',
		duration: 300,
		freezeOnHover: false,
		hideSpeed: 300,
		position: 'center',
		showSpeed: 300,
		zIndex: 99999
	});
};

$(document).ready(function() {
    var interval = 1000 * 20;
    setInterval(check, interval);
});