var jsEditor = function(el) {
	'use strict';
	
	var defaults = {
	
	};
	
	var ctrl = this;
	
	if(el) {
		
	} else {
		el = $('<div/>', {});
		el.attr('data-jseditor', JSON.stringify({}));
	}
	
	ctrl.__el = el;
	
	ctrl.__data = JSON.parse(el.attr('data-jseditor')) || {};
	
	ctrl.update = function(params, cb){
		ctrl.__data = $.extend({}, ctrl.__data, params);
		el.attr('data-jseditor', JSON.stringify(ctrl.__data));
		cb(ctrl.__data);
	};
	
};