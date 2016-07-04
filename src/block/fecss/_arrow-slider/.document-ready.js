
	$('.arrow-slider').each(function(index){
		
		var block = $(this);
		var imgs = block.find('.img-block .item');
		var content = block.find('.text-content');
		var title_block = block.find('.title-block');
		var arrow_block = block.find('.arrow-block');
		var point_line = arrow_block.find('.point-line');
		//var counter = block.find('.info-block .counter');
		//var position = counter.find('.position');
		
		block.on('change-size', function(event){
			event.preventDefault();
			
			var block_h;
			
			if(screenJS.isXS()) {
				block_h = parseInt(block.attr('data-block-height-xs') || 210);
			} else if(screenJS.isSM()) {
				block_h = parseInt(block.attr('data-block-height-sm') || 360);
			} else if(screenJS.isMD()) {
				block_h = parseInt(block.attr('data-block-height-md') || 480);
			} else if(screenJS.isLG()) {
				block_h = parseInt(block.attr('data-block-height-lg') || 640);
			}
			/*
			else {
				block_h = parseInt(block.attr('data-block-height-default') || 480);
			}
			*/
			
			block.css({
				height : block_h + 'px',
			});
			
		});
		
		block.on('init', function(event){
			event.preventDefault();
			
			console.log('.arrow-slider init');
			
			//block.trigger('resize');
			
			point_line.empty();
			
			imgs.each(function(index){
				//$(this).attr('data-index', index+1);
				$('<a/>',{
					class : 'item',
					html : '<span class="point" ></span>',
					href : '#image-' + index,
				})
					.attr('data-item-index', index)
					.on('click.fecss.arrow-slider.point',function(event){
						event.preventDefault();
						
						console.log('click.fecss.arrow-slider.point');
						
						var i = $(this).index();
						
						point_line.find('.item').removeClass('active');
						imgs.fadeOut('fast').removeClass('active');
						$(this).addClass('active');
						imgs.eq(i).fadeIn('fast').addClass('active');
						
					})
					.appendTo(point_line);
			});
			
			if(block.hasClass('with-timer')) {
				block.data('fecss-timer', setInterval(function(){
					if(block.is(':hover')) {
						
					} else {
						arrow_block.find('.btn-arrow.right').trigger('click');
					}
				}, 3000))
			}
			
			if(point_line.find('.item.active').length) {
				
			} else {
				point_line.find('.item').eq(0).trigger('click');
			}
			
		})
			.trigger('init');
		
		block.on('click.fecss.arrow-slider.btn-arrow', '.btn-arrow.right', function(event){
			event.preventDefault();
			
			var p = point_line.find('.item');
			var i = p.filter('.active').eq(0).index();
			var nxt = p.eq(i).next('.item');
			if(nxt.length) {
				nxt.trigger('click');
			} else {
				p.eq(0).trigger('click');
			}
		});
		
		block.on('click.fecss.arrow-slider.btn-arrow', '.btn-arrow.left', function(event){
			event.preventDefault();
			
			var p = point_line.find('.item');
			var i = p.filter('.active').eq(0).index();
			var nxt = p.eq(i).prev('.item');
			if(nxt.length) {
				nxt.trigger('click');
			} else {
				p.eq(-1).trigger('click');
			}
		});
		
	});
	