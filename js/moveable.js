// wiggle function
$(document).ready( function() { 
	$move = $(".moveable");
	$(document).mousemove(function(e) {
	// prevent if on mobile/smol scren
		if($(window).width() < 800) {
			e.stopPropogation();
			return;
		}
	// set x,y move amounts
		var y = (($(window).height() / 2) - e.pageY) / 200;
		var x = (($(window).width() / 2) - e.pageX) / 200;
	// translate3d by x,y,0 to perform move
		$move.css("transform", "translate3d(" + x + "px, " + y + "px, 0px)");
		$move.css("-moz-transform", "translate3d(" + x + "px, " + y + "px, 0px)");
		$move.css("-webkit-transform", "translate3d(" + x + "px, " + y + "px, 0px)");
	});
});