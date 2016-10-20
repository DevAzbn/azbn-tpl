$(function(){
	
	$('.iframe-responsive').each(function(index){
		
		var block = $(this);
		var r_str = block.attr('data-iframe-ratio') || '16:9';
		var r_arr = r_str.split(':');
		
		if(r_arr.length == 2) {
			
		} else {
			r_arr = [16,9];
		}
		
		var w = block.outerWidth(true);
		console.log('qqqqqqqqqqq ' + w);
		var r = (r_arr[1] / r_arr[0]) * w;
		console.log('qqqqqqqqqqq ' + r);
		
		block.css({
			'height' : r + 'px',
		});
		
	});
	
});