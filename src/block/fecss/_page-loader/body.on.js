$(window).on('load', function(event){
	event.preventDefault();
	
	console.log('window trigger:load');
	
	$('.page-loader').removeClass('active').empty().remove();
	
});