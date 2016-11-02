
/*
start .go-to-top window-scroll
*/

(function(){
		
		var pos = $(document).scrollTop();
		
		var gototop = $('.go-to-top').eq(0);
		var r = parseInt(gototop.attr('data-gototop-border')) || 200;
		
		if(gototop.hasClass('active')) {
			if(pos < r) {
				gototop.removeClass('active');
			}
		} else {
			if(pos > r) {
				gototop.addClass('active');
			}
		}
		
})();

/*
end .go-to-top window-scroll
*/
