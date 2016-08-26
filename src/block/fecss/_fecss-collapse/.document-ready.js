
$(document.body).on('click.fecss.fecss-collapse.collapser', '.fecss-collapse .collapser', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:click.fecss.fecss-collapse.collapser');
	
	var btn = $(this);
	var collapse = btn.closest('.fecss-collapse');
	//$('.fecss-collapse.active').removeClass('active');
	collapse.toggleClass('active');
	
});
