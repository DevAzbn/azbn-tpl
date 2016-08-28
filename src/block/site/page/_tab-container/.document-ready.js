
$(document.body).on('click.site', '.tab-container .tab-btns .tab-btn', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var tc = btn.closest('.tab-container');
	var d_ti = btn.attr('data-tab-id') || '';
	
	tc.find('.tab-btns .tab-btn.active').removeClass('active');
	btn.addClass('active');
	
	tc.find('.tab-items .tab-item').removeClass('active');
	tc.find('.tab-items .tab-item[data-tab-id="' + d_ti + '"]').addClass('active');
	
});

$(function(){
	
	var tc = $('.tab-container');
	var d_ti = tc.attr('data-tab-default');
	
	if(typeof d_ti == 'underfined' || d_ti == 'underfined' || d_ti == '') {
		d_ti = tc.find('.tab-btns .tab-btn:first-child').attr('data-tab-id') || '';
	}
	
	tc.find('.tab-btns .tab-btn[data-tab-id="' + d_ti + '"]').trigger('click');
	
});