$(window).on('load', function(event){
	event.preventDefault();
	
	console.log('window trigger:load');
	
	$('body').removeClass('overflow-hidden');
	$('.page-loader').removeClass('active');//.empty().remove();
	
	//$('.page-container').addClass('smooth-animation');
	//$('.page-container .fluid-block').addClass('smooth-item');
	//$('.smooth-animation').attr('data-state', 'active');
	
});