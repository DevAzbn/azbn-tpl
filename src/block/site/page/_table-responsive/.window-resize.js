$(function(){
	
	$('.table-responsive').each(function(index){
		
		var block = $(this);
		var table = block.find('table');
		var p_block = block.parent();
		
		table.detach();
		
		var w = p_block.outerWidth(true);
		block
			.css({
				'max-width' : w + 'px',
			})
			.append(table)
		;
		
	});
	
})