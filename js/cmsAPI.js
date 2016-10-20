/*
Прослойка для работы с API CMS
*/

var cmsAPI = {

	config:{
		api_url:'/api/call/',
		app_key:'public',
		service:'online',
		method:'check',
		div_result_id:'#cmsAPIResult',
		browser:'unknown',
	},
	
	call:function(params,cb) {
		params.app_key = this.config.app_key;
		
		$.ajax({
			url: this.config.api_url,
			type: 'POST',
			dataType: 'json',
			data: params,
			success: function(resp) {
				//cmsAPI.callbacks[resp.req.callback](resp);
				cb(resp);
			}
		});
	},
	
	UI:{
		
		OnReady:{
			
			FeedbackSessionControl:function(){
				
				$('[data-feedback-session-control]').val($('body').eq(0).attr('data-session-control') || '');
				
			},
			
			
			GenerateMailHref:function(){
				
				var protocol = 'mailto';
				var prefix = 'i';
				var srv = 'azbn';
				var zone = 'ru';
				$('[data-generate-mail-href]')
					.attr('href', protocol + ':' + prefix + '@' + srv + '.' + zone)
					.html(prefix + '@' + srv + '.' + zone)
				;
				
			},
			
		},
		
		OnEvent : {
			
		},
		
	},
	
	callbacks:{
		
		/*
		ShowEntityList:function(resp) {
			var div = $(cmsAPI.config.div_result_id);
			div.html('');
			
			for(var i=0; i<resp.response.item_list.length; i++) {
				var item=resp.response.item_list[i];
				
				$('<div/>',{
					id:resp.req.prefix+'-'+resp.req.type+'-item-'+item.id,
					html:item.name
					}).appendTo(div);
				
				}
			
		},
		*/
		
	},
	
}