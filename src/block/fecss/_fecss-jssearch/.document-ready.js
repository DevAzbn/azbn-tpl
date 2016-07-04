
$(function(){
	
	var body = $(document.body);
	
	var str = body.attr('data-fecss-jssearch') || '';
	
	if(str != '') {
		body.trigger('fecss.jssearch', [str, function(res){
			//msg:msg, count:counter, text:str,
			console.log(res.msg);
		}]);
	}
	
});
