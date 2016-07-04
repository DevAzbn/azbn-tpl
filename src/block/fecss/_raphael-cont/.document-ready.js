$(function(){
	
	// Creates canvas 320 × 200 at 10, 50
	//var paper = Raphael(10, 50, 320, 200);
	
	if($('#raphael-cont').length) {
		
		var paper = Raphael('raphael-cont', 700, 700);
		
		// Creates circle at x = 50, y = 40, with radius 10
		var circle = paper.circle(50, 40, 10);
		// Sets the fill attribute of the circle to red (#f00)
		circle.attr('fill', '#f00');
		
		// Sets the stroke attribute of the circle to white
		circle.attr('stroke', '#fff');
		
		circle.hover(function(){
			this.animate({
				fill : '#00f'
			}, 300);
		}, function(){
			this.animate({
				fill : '#f00'
			}, 300);
		});
		
	}
	
});