/*
jquery-плагин
*/

(function($){
	
	
	
	var plugin_prefix = 'azbn7';
	
	
	
	var defaults = {
		
	};
	
	
	
	var fnc = {
		
		randStr : function(l) {
			l = l || 36;
			return (Math.random().toString(l).split('.'))[1];
		},
		
		now : function() {
			return new Date().getTime();
		},
		
		now_sec : function() {
			return Math.floor(fnc.now() / 1000);
		},
		
		len : function(arr) {
			if(fnc.is_def(arr) && !fnc.is_null(arr)) {
				return arr.length;
			} else {
				return 0;
			}
		},
		
		echo : function(text, prefix) {
			prefix = prefix || plugin_prefix;
			console.log(prefix + ': ' + text);
		},
		
		warn : function(text, prefix) {
			prefix = prefix || plugin_prefix;
			console.warn(prefix + ': ' + text);
		},
		
		is_def : function(v) {
			if(v == undefined || typeof v == 'undefined') {
				return false;
			} else {
				return true;
			}
		},
		
		is_null : function(v) {
			if(v == null) {
				return true;
			} else {
				return false;
			}
		},
		
		is_func : function(functionToCheck) {
			var getType = {};
			return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
		},
		
		sleep : function(milliSeconds) {
			milliSeconds = milliSeconds || 1;
			
			var startTime = fnc.now();
			while (fnc.now() < startTime + milliSeconds);
		},
		
	};
	
	
	
	var methods = {
		
		init : function(params){
			
			var options = $.extend({}, defaults, params);
			
			console.log(options);
			
			//return this;
		},
		
		isWidget : function(params){
			
			var el = $(this);
			
			var uid = fnc.randStr();
			
			el.attr('data-' + prefix + '-widget', uid);
			
		},
		
	};
	
	
	
	var runCB = function(cb) {
		
		cb();
		
	};
	
	
	
	var __connectAzbn7Plugin = function(method){
		
		
		if(typeof this === 'function') {
			// запущено для jQuery
			
			
			
		} else if(typeof this === 'object') {
			// запущено для объекта
			
			
			
		}
		
		
		if(methods[method]) {
			
			return methods[method].apply(this, Array.prototype.slice.call(arguments,1));
			
		} else if(typeof method === 'object' || !method) {
			
			return methods.init.apply(this, arguments);
			
		} else if(typeof method === 'function') {
			
			return runCB(method);
			
		} else {
			
			$.error('Метод ' + method + ' в плагине не найден!');
			
		}
		
		
	};
	
	
	
	$.Azbn7 = __connectAzbn7Plugin;
	$.fn.Azbn7 = __connectAzbn7Plugin;
	
	
	
})(jQuery);