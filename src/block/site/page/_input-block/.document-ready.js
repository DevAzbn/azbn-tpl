
$(document.body).on('keyup.site blur.site focus.site', '.input-block input, .input-block textarea', {}, function(event){
	event.preventDefault();
	
	var input = $(this);
	var val = $(this).val();
	
	if(val != '' && input.closest('.input-block').attr('data-required') == 'text') {
		input.closest('.input-block').attr('data-input-status', 'ok');
	} else {
		input.closest('.input-block').attr('data-input-status', '');
	}
});

$(document.body).on('change.site blur.site', '.input-block select', {}, function(event){
	event.preventDefault();
	
	var input = $(this);
	var val = $(this).find('option:selected').eq(0).attr('value') || '';
	
	if(val != '' && input.closest('.input-block').attr('data-required') == 'select') {
		input.closest('.input-block').attr('data-input-status', 'ok');
	} else {
		input.closest('.input-block').attr('data-input-status', '');
	}
});

$(function(){
	
	$('.input-block input, .input-block textarea, .input-block select').trigger('blur.site');
	
})