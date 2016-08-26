
$(document.body).on('click.site', '.bottom-menu-ul li a', {}, function(event){
	event.preventDefault();
	
	$(this).closest('.bottom-menu-ul').find('li').removeClass('active');
	$(this).closest('li').addClass('active');
});
