
$(document.body).on('fecss.jssearch',		null, {}, function(event, str, cb) {
	console.log('body trigger:fecss.jssearch ' + str);
	
	var body = $(document.body);
	
	body.find('.fecss-jssearch').removeClass().contents().unwrap();
	
	if (str == "" || str == " ") {
	
	} else {
		
		var exp = new RegExp('(' + str + ')', "ig");
		var counter = 0;
		var msg = '';
		
		body
			.attr('data-fecss-jssearch', str)
			.find('*')
			.contents()
			.each(function(index) {
				
				if (this.nodeType == 3) {
					if(exp.test(this.nodeValue)) {
						$(this).replaceWith(this.nodeValue.replace(exp,'<span class="fecss-jssearch">$1</span>'));
						counter++;
					}
				}
				/*
				else if(0 && this.nodeType == 1) {
					
					
					if (exp.test(this.innerHTML)) {
						
						var code = this.outerHTML;
						var s1 = code.slice(0, code.indexOf('>') + 1);
						var s2 = code.slice(code.indexOf('</'));
						var s3 = code.slice(code.indexOf('>') + 1, code.indexOf('</'));
						$(this).replaceWith(s1 + '<span class="fecss-jssearch">' + s3 + '</span>' + s2);
						counter++;
						
					}
					
				}
				*/
				
			});
		
		if(counter > 0) {
			msg = 'Найдено: ' + counter;
		} else {
			msg = 'Ничего не найдено';
		}
		
		if(cb) {
			cb({
				msg:msg,
				count:counter,
				text:str,
			});
		}
		
	}
});
