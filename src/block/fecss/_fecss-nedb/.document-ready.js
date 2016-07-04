/*
$('.fecss-imguploader').jqfeDropImgOptimizer3({
	max_width:800,
	max_height:800,
	callback:function(dataURL){		
		$(document.body).append('<img src="' + dataURL + '" />');
	}
});
*/
$(document.body).on('fecss.nedb.fecss.insert', null, {}, function(event, uid, obj){
	event.preventDefault();
	
	console.log('body trigger:fecss.nedb.fecss.insert');
	
	//var block = $(this);
	obj.uid = uid;
	
	nedb.fecss.insert(obj, function (err, _obj) {
		/*
		nedb.fecss.find({}, function (err, docs) {
			console.log(docs);
		});
		*/
	});
	
});




$(document.body).on('fecss.nedb.visit.insert', null, {}, function(event, obj){
	event.preventDefault();
	
	console.log('body trigger:fecss.nedb.visit.insert');
	
	//var block = $(this);
	obj.__time = new Date().getTime();
	nedb.visit.insert(obj, function (err, _obj) {});
	
});

$(document.body).on('fecss.nedb.visit.clear', null, {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:fecss.nedb.visit.clear');
	
	nedb.visit.remove({
		$where : function(){
			return this.__time > 0;
		}
	}, {multi : true}, function(err, numRemoved){
		console.log('Deleted from visit: ' + numRemoved);
	});
	
});
