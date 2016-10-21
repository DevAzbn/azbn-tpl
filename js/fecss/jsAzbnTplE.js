var jsAzbnTplE = function(param_obj) {
	'use strict';
	
	var ctrl = this;
	
	if(typeof param_obj == 'undefined' || param_obj == null) {
		param_obj = {
			filter : 'cache',
		};
	}
	
	/* ----- параметры для работы корзины ----- */
	var param = {
		ls : {
			cache		:		'__jsazbntple_' + param_obj.filter,
		},
	};
	
	
	ctrl.regexp = {
		base : new RegExp(/\[\[azbntple+\s+tpl="([^"=]+)"+([^\]]+)+\]\]/ig),
		by_param : new RegExp(/([^"=\s]+="[^"]+")/ig),
		by_value : new RegExp(/([^"]+)([^"=]+)/ig),//new RegExp(/([^"=\s]+)([^"=]+)/ig),
	};
	
	ctrl.getURLContent = function(url, cb) {
		
		var getXmlHttp = function(){
			
			var xmlhttp;
			try {
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (E) {
					xmlhttp = false;
				}
			}
			
			if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
				xmlhttp = new XMLHttpRequest();
			}
			
			return xmlhttp;
		};
		
		var req = new getXmlHttp();
		
		req.onreadystatechange = function(){
			if (req.readyState == 4) {
				if(req.status == 200) {
					//return req.responseText;
					
					cb(req.responseText);
					
				} else {
					//return '';
					
					cb('');
					
				}
			} else {
				//return;
			}
		}
		
		req
			.open('GET', url, true);
		req
			.send(null);
	
	};
	
	ctrl.getFromCode = function(el, prm, cb) {
		
		var __code = '' + el
			.html()
			.toString()
		;
		
		__code.replace(ctrl.regexp.base, function(str, p1, p2, offset, s){
			//cb({html : p1});
			//console.log(p1);
			
			ctrl
				.getURLContent(p1, function(_str){
					
					var code = el.html();
					
					code =
						code
							.replace(new RegExp("/[[azbntple tpl=" + '"' + p1 + '"' + " ]]/", "ig"), _str)
					;
					
					for(var k in prm) {
						
						var v = prm[k];
						
						code = code.replace(new RegExp("{{" + k + "}}", "ig"), v);
						
					}
					
					//el.html(code);
					cb(code);
					//return code;
				});
			
			return '';
			
		});
		
	};
	
	return ctrl;
	
};