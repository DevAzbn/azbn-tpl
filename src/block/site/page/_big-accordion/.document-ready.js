
$(document.body).on('click.site.big-accordion.surface.surface-btn', '.big-accordion .surface .surface-btn', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var href = btn.attr('href');
	var surface = btn.closest('.surface');
	var content = surface.find(href + '.surface-content');
	var state = surface.attr('data-state');
	
	switch(state) {
		
		case 'default':{
			surface.attr('data-state', 'active');
			content.slideDown('fast');
		}
		break;
		
		case 'active':{
			surface.attr('data-state', 'default');
			content.slideUp('fast');
		}
		break;
		
		default:{
			
		}
		break;
		
	}
	
});


(function(){
	
	$('.big-accordion .surface > .surface-content').hide();
	$('.big-accordion .surface').attr('data-state', 'default');
	
})();