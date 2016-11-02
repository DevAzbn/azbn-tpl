(function(){
	
	$('.iframe-responsive').each(function(index){
		
		var block = $(this);
		var r_str = block.attr('data-iframe-ratio') || '16:9';
		var r_arr = r_str.split(':');
		
		if(r_arr.length == 2) {
			
		} else {
			r_arr = [16,9];
		}
		
		var w = block.outerWidth(true);
		var r = (r_arr[1] / r_arr[0]) * w;
		
		block.css({
			'height' : r + 'px',
		});
		
	});
	
})();