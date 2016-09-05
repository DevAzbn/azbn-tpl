$(document.body).on('submit.site', 'form', {}, function(event){
	
	var form = $(this);
	var ok = form.attr('data-input-status') || '';
	
	if(ok == 'ok' || ok == '1') {
		
	} else {
		event.preventDefault();
	}
	
});


$(document.body).on('site.form.required.check', 'form', {}, function(event){
	event.preventDefault();
	
	var form = $(this);
	var required_ok = 0;
	
	form.find('.input-block[data-required]').each(function(index){
		
		var input = $(this);
		var ok = input.attr('data-input-status') || '';
		
		if(ok == 'ok' || ok == '1') {
			required_ok = required_ok + 1;
		} else {
			
		}
		
	});
	
	if(required_ok == form.find('.input-block[data-required]').length) {
		form.find('.submit-block').attr('data-input-status', 'ok');
		form.attr('data-input-status', 'ok');
	} else {
		form.find('.submit-block').attr('data-input-status', '');
		form.attr('data-input-status', '');
	}
	
});





$(document.body).on('keyup.site blur.site focus.site', '.input-block[data-required="text"] input:not([type="search"]), .input-block[data-required="text"] textarea', {}, function(event){
	event.preventDefault();
	
	var input = $(this);
	var val = $(this).val();
	
	if(val != '' && input.closest('.input-block').attr('data-required') == 'text') {
		input.closest('.input-block').attr('data-input-status', 'ok');
	} else {
		input.closest('.input-block').attr('data-input-status', '');
	}
	
	input.closest('form').trigger('site.form.required.check');
});

$(document.body).on('keyup.site blur.site focus.site', '.input-block[data-required="email"] input', {}, function(event){
	event.preventDefault();
	
	var input = $(this);
	var val = $(this).val();
	
	var re1 = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
	
	//if(val != '' && input.closest('.input-block').attr('data-required') == 'email' && val.indexOf('@') > 0) {
	if(val != '' && input.closest('.input-block').attr('data-required') == 'email' && (re1.test(val))) {
		input.closest('.input-block').attr('data-input-status', 'ok');
	} else {
		input.closest('.input-block').attr('data-input-status', '');
	}
	
	input.closest('form').trigger('site.form.required.check');
});

$(document.body).on('keyup.site blur.site focus.site', '.input-block[data-required="check-pass"] input', {}, function(event){
	event.preventDefault();
	
	var input = $(this);
	var val = $(this).val();
	
	var val_ = $('.input-block input[name="pass"]').val();
	
	if(val != '' && val_ != '' && input.closest('.input-block').attr('data-required') == 'check-pass' && val_ == val) {
		input.closest('.input-block').attr('data-input-status', 'ok');
	} else {
		input.closest('.input-block').attr('data-input-status', '');
	}
	
	input.closest('form').trigger('site.form.required.check');
});



$(document.body).on('keyup.site blur.site focus.site', '.input-block input[type="search"]', {}, function(event){
	event.preventDefault();
	
	var input = $(this);
	var val = $(this).val();
	
	if(val.length > 2 && input.closest('.input-block').attr('data-required') == 'search') {
		input.closest('.input-block').attr('data-input-status', 'ok');
		input.closest('.input-block').next('.submit-block').attr('data-input-status', 'ok');
	} else {
		input.closest('.input-block').attr('data-input-status', '');
		input.closest('.input-block').next('.submit-block').attr('data-input-status', '');
	}
	
	input.closest('form').trigger('site.form.required.check');
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
	
	input.closest('form').trigger('site.form.required.check');
});

$(function(){
	
	$('.input-block input, .input-block textarea, .input-block select').trigger('blur.site');
	$('form').trigger('site.form.required.check');
	
})