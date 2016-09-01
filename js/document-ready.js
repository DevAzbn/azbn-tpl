'use strict';


window.onerror = function(error, url, lineNumber, column, errorObj) {
	console.log('Error FECSS: ' + url + ':' + lineNumber + ':' + column + ': ' + JSON.stringify(error) + '\n' + JSON.stringify(errorObj));
	return;
}


+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),!i.isInStateTrue())return clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,p=l.test(a);p&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),f=s[0].offsetWidth,c=s[0].offsetHeight;if(p){var u=a,d=this.getPosition(this.$viewport);a="bottom"==a&&h.bottom+c>d.bottom?"top":"top"==a&&h.top-c<d.top?"bottom":"right"==a&&h.right+f>d.width?"left":"left"==a&&h.left-f<d.left?"right":a,s.removeClass(u).addClass(a)}var g=this.getCalculatedOffset(a,h,f,c);this.applyPlacement(g,a);var v=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,p=o[0].offsetHeight;"top"==i&&p!=s&&(e.top=e.top+s-p);var h=this.getViewportAdjustedDelta(i,e,l,p);h.left?e.left+=h.left:e.top+=h.top;var f=/top|bottom/.test(i),c=f?2*h.left-n+l:2*h.top-s+p,u=f?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][u],f)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);if(this.$element.trigger(r),!r.isDefaultPrevented())return s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,r,a,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+o;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l)}else{var p=e.left-s,h=e.left+s+i;p<r.left?n.left=r.left-p:h>r.right&&(n.left=r.left+r.width-h)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery);
function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{"default":[],portrait:[],landscape:[]},sm:{"default":[],portrait:[],landscape:[]},md:{"default":[],portrait:[],landscape:[]},lg:{"default":[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w<992&&e.screen.w>767},e.isMD=function(){return e.screen.w<1200&&e.screen.w>991},e.isLG=function(){return e.screen.w>1199},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isLG()&&(n="lg"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,r){if(n.type){var t=e.__resizefunctions[n.type];n.orientation?t[n.orientation].push(r):t["default"].push(r)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type]["default"])for(var r=0;r<e.__resizefunctions[n.type]["default"].length;r++){var t=e.__resizefunctions[n.type]["default"][r];t(n)}if(e.__resizefunctions[n.type][n.orientation])for(var r=0;r<e.__resizefunctions[n.type][n.orientation].length;r++){var t=e.__resizefunctions[n.type][n.orientation][r];t(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,r=jQuery.fn.removeClass,t=jQuery.fn.toggleClass;e.fn.addClass=function(){var r=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),r},e.fn.removeClass=function(){var n=r.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=t.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery);


$(function() {
	
	/*
	Создание триггеров на элементы, в основном, на body
	*/
	$(document.body).on("fecss.default",null,{},function(e){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(e){console.log("body trigger:fecss.init");var o=(new Date).getTime();$(document.body).attr("data-created_at",o),$(document.body).trigger("fecss.nedb.visit.insert",[{href:window.location.href,referrer:document.referrer}])}),$(document.body).on("fecss.window.unload",null,{},function(e,o){console.log("body trigger:fecss.window.unload: "+JSON.stringify(o))}),$(document.body).on("fecss.ajax.success",null,{},function(e){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(e,o){console.log("body trigger:fecss.keydown: "+JSON.stringify(o))}),$(document.body).on("DOMSubtreeModified",null,{},function(e,o){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(e){-e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta});
$(document.body).on("fecss.changeDOM",".fecss-change-dom",{},function(e,c){console.log(".fecss-change-dom trigger:fecss.changeDOM")}),$(document.body).on("DOMSubtreeModified",".fecss-change-dom",{},function(e,c){$(this).trigger("fecss.changeDOM")});
$(document.body).on("fecss.jssearch",null,{},function(s,e,n){console.log("body trigger:fecss.jssearch "+e);var c=$(document.body);if(c.find(".fecss-jssearch").removeClass().contents().unwrap(),""==e||" "==e);else{var t=new RegExp("("+e+")","ig"),a=0,o="";c.attr("data-fecss-jssearch",e).find("*").contents().each(function(s){3==this.nodeType&&t.test(this.nodeValue)&&($(this).replaceWith(this.nodeValue.replace(t,'<span class="fecss-jssearch">$1</span>')),a++)}),o=a>0?"Найдено: "+a:"Ничего не найдено",n&&n({msg:o,count:a,text:e})}});
$(document.body).on("fecss.modal.show.after",null,{},function(e,o,t){e.preventDefault(),console.log("body trigger:fecss.modal.show.after")}),$(document.body).on("fecss.modal.hide.after",null,{},function(e,o,t){e.preventDefault(),console.log("body trigger:fecss.modal.hide.after")}),$(document.body).on("fecss.active.set",".fecss-modal .white-container",{},function(e,o,t){e.preventDefault(),console.log(".white-container trigger:fecss.active.set")}),$(document.body).on("fecss.active.unset",".fecss-modal .white-container",{},function(e,o,t){e.preventDefault(),console.log(".white-container trigger:fecss.active.unset")});
$(window).on("load",function(a){a.preventDefault(),console.log("window trigger:load"),$(".page-loader").removeClass("active").empty().remove(),$(".page-container").addClass("smooth-animation"),$(".page-container .fluid-block").addClass("smooth-item"),$(".smooth-animation").attr("data-state","active")});
	
	
	/*
	Событие смены класса body
	*/
	$(document.body).on('changeClass', null, {} ,function(event, event_action){
		// event_action = add || remove || toggle
		
		$(function(){console.log("body trigger:changeClass action:"+event_action)});
$(".line-gallery").each(function(a){var s=$(this),t=$(document.body),d=3;t.hasClass("window-width-xs")?d=s.attr("data-xs-vis")||1:t.hasClass("window-width-sm")?d=s.attr("data-sm-vis")||2:t.hasClass("window-width-md")?d=s.attr("data-md-vis")||3:t.hasClass("window-width-lg")&&(d=s.attr("data-lg-vis")||3);for(var i=s.find(".img-block .item"),h=d;h<i.length;h++)i.eq(h).hide();for(var h=0;h<d;h++)i.eq(h).is(":hidden")&&i.eq(h).fadeIn("fast")});
	});
	
	
	/*
	События смены класса у любого элемента
	*/
		
	
	
	/*
	Основная логика сайта
	*/
	$('[data-toggle="tooltip"]').tooltip();
$(".arrow-slider").each(function(e){var t=$(this),i=t.find(".img-block .item"),r=(t.find(".text-content"),t.find(".title-block"),t.find(".arrow-block")),n=r.find(".point-line");t.on("change-size",function(e){e.preventDefault();var i;screenJS.isXS()?i=parseInt(t.attr("data-block-height-xs")||210):screenJS.isSM()?i=parseInt(t.attr("data-block-height-sm")||360):screenJS.isMD()?i=parseInt(t.attr("data-block-height-md")||480):screenJS.isLG()&&(i=parseInt(t.attr("data-block-height-lg")||640)),t.css({height:i+"px"})}),t.on("init",function(e){e.preventDefault(),console.log(".arrow-slider init"),n.empty(),i.each(function(e){$("<a/>",{"class":"item",html:'<span class="point" ></span>',href:"#image-"+e}).attr("data-item-index",e).on("click.fecss.arrow-slider.point",function(e){e.preventDefault(),console.log("click.fecss.arrow-slider.point");var t=$(this).index();n.find(".item").removeClass("active"),i.fadeOut("fast").removeClass("active"),$(this).addClass("active"),i.eq(t).fadeIn("fast").addClass("active")}).appendTo(n)}),t.hasClass("with-timer")&&t.data("fecss-timer",setInterval(function(){t.is(":hover")||r.find(".btn-arrow.right").trigger("click")},3e3)),n.find(".item.active").length||n.find(".item").eq(0).trigger("click")}).trigger("init"),t.on("click.fecss.arrow-slider.btn-arrow",".btn-arrow.right",function(e){e.preventDefault();var t=n.find(".item"),i=t.filter(".active").eq(0).index(),r=t.eq(i).next(".item");r.length?r.trigger("click"):t.eq(0).trigger("click")}),t.on("click.fecss.arrow-slider.btn-arrow",".btn-arrow.left",function(e){e.preventDefault();var t=n.find(".item"),i=t.filter(".active").eq(0).index(),r=t.eq(i).prev(".item");r.length?r.trigger("click"):t.eq(-1).trigger("click")})});
$(document.body).on("click.fecss.can-close.close-btn",".can-close .close-btn",{},function(c){c.preventDefault(),console.log("body trigger:click.fecss.can-close.close-btn"),$(this).closest(".can-close").removeClass("active")});
$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){moment.locale(window.navigator.userLanguage||window.navigator.language)});
$(document.body).on("click.fecss.fecss-collapse.collapser",".fecss-collapse .collapser",{},function(s){s.preventDefault(),console.log("body trigger:click.fecss.fecss-collapse.collapser");var c=$(this),e=c.closest(".fecss-collapse");e.toggleClass("active")});
$(document.body).on("click.fecss.imgresizer",".fecss-imgresizer",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.imgresizer");var t=$(this),i=parseInt(t.attr("data-max-width"))||1e3,a=parseInt(t.attr("data-max-height"))||1e3;t.jqfeDropImgOptimizer3({max_width:i,max_height:a,multiple:"multiple",callback:function(e){console.log(e.file),$(document.body).append('<img src="'+e.dataURL+'" title="'+e.file.name+'" />')}})});
$(".fecss-jscacher").each(function(){var c=$(this),a=c.attr("data-jscacher-filter")||"default",e=parseInt(c.attr("data-jscacher-ttl"))||6e4;c.attr("data-jscacher-cached",!1);var t=new jsCacher({filter:a,ttl:e});c.on("cacher-clear",function(a){c.attr("data-jscacher-cached",!1),t.clear()}),c.on("cacher-cache",function(e){c.attr("data-jscacher-cached",!1),t.cache(c.html()),c.attr("data-jscacher-cached",!0),console.log('.fecss-jscacher[data-jscacher-filter="'+a+'"] cacher-cache')}),c.on("cacher-load",function(e){var r=t.load();c.html(r.content).attr("data-jscacher-cached",!0),console.log('.fecss-jscacher[data-jscacher-filter="'+a+'"] cacher-load')}),c.on("cacher-check",function(a){var e=t.load();e.need_update?c.trigger("cacher-cache"):c.trigger("cacher-load")}).trigger("cacher-check")});
$(".fecss-jscart").each(function(){var t=$(this),a=t.attr("data-jscart-filter")||"default",r=new jsCart({filter:a});t.on("rebuild",function(a){t.find(".jscart-item").each(function(a){var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=r.getItem(c,s);e.find("input.jscart-item-amount").attr("value",parseInt(n.amount)),e.find("div.jscart-item-amount, span.jscart-item-amount, a.jscart-item-amount").html(parseInt(n.amount));var d=r.calculate();t.attr("data-jscart-sum",d.sum).find(".jscart-sum").html(d.sum),t.find(".jscart-product").html(d.product),t.find(".jscart-amount").html(d.amount)})}),t.trigger("rebuild"),t.on("clear",function(a){r.clear(),t.trigger("rebuild")}),t.on("create-order",function(a){r.saveCart(function(a,e){$.getJSON("/json/_fecss-jscart/create-order.json",function(a){var e=a;r.saveOrder(e),r.clear(),t.trigger("rebuild")})})}),t.find(".jscart-item .jscart-add-btn").on("click.jscart",function(a){a.preventDefault();var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=e.attr("data-jscart-cost"),d=e.attr("data-jscart-amount");""!=c&&"underfined"!=typeof c&&null!=c||(c=e.closest(".jscart-item").attr("data-jscart-product")),""!=s&&"underfined"!=typeof s&&null!=s||(s=e.closest(".jscart-item").attr("data-jscart-taste")),""!=n&&"underfined"!=typeof n&&null!=n||(n=e.closest(".jscart-item").attr("data-jscart-cost")),""!=d&&"underfined"!=typeof d&&null!=d&&0!=d||(d=e.closest(".jscart-item").attr("data-jscart-amount")),r.add(c,s,n,parseInt(d)),console.log("product "+c+" added to cart"),t.trigger("rebuild")}),t.find(".jscart-item .jscart-remove-btn").on("click.jscart",function(a){a.preventDefault();var e=$(this),c=e.attr("data-jscart-product"),s=e.attr("data-jscart-taste"),n=e.attr("data-jscart-cost"),d=e.attr("data-jscart-amount");""!=c&&"underfined"!=typeof c&&null!=c||(c=e.closest(".jscart-item").attr("data-jscart-product")),""!=s&&"underfined"!=typeof s&&null!=s||(s=e.closest(".jscart-item").attr("data-jscart-taste")),""!=n&&"underfined"!=typeof n&&null!=n||(n=e.closest(".jscart-item").attr("data-jscart-cost")),""!=d&&"underfined"!=typeof d&&null!=d&&0!=d||(d=e.closest(".jscart-item").attr("data-jscart-amount")),r.remove(c,s,parseInt(d)),console.log("product "+c+" removed from cart"),t.trigger("rebuild")}),t.find(".jscart-clear-btn").on("click.jscart",function(a){a.preventDefault(),t.trigger("clear")}),t.find(".jscart-create-order").on("click.jscart",function(a){a.preventDefault(),t.trigger("create-order")})});
$(function(){var s=$(document.body),c=s.attr("data-fecss-jssearch")||"";""!=c&&s.trigger("fecss.jssearch",[c,function(s){console.log(s.msg)}])});
$(".fecss-jsviewed").each(function(){var e=$(this),i=e.attr("data-jsviewed-filter")||"default",t=e.html(),r=new jsViewed({filter:i});e.on("rebuild",function(i){e.empty();var n=r.getAll();if(null!=n)for(var a in n){var l=n[a],c=t;for(var d in l)c=c.replace(new RegExp("%"+d+"%","ig"),l[d]);var f=$("<div/>",{html:c});f.appendTo(e)}}),e.trigger("rebuild"),e.on("create-view",{},function(e,t){r.add(t),console.log('.fecss-jsviewed[data-jsviewed-filter="'+i+'"] create-view')}),e.on("clear",function(i){r.clear(),e.trigger("rebuild")}),e.find(".jsviewed-clear-btn").on("click.jsviewed",function(i){i.preventDefault(),e.trigger("clear")}),function(){e.trigger("create-view",[{id:(new Date).getTime(),title:"some test"}])}()});
$(document.body).on("click.fecss.modal.show",".fecss-modal-btn",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.modal.show");var s=$(this),a=s.attr("href"),o=$(document.body).find(".fecss-modal "+a+".white-container"),t=o.closest(".fecss-modal");if(o.length){var c=$(document.body).find(".fecss-modal .white-container.active:not(.in-bg)").eq(0);c.length&&(c.addClass("in-bg"),c.closest(".fecss-modal").addClass("in-bg"),o.data("fecss-modal-prev",c.attr("id"))),t.addClass("active").removeClass("in-bg");var l=t.find(".black-container");l.css({top:$(document).scrollTop()+50+"px"}),o.addClass("active").removeClass("in-bg").trigger("fecss.active.set"),$(document.body).trigger("fecss.modal.show.after",[t,o])}}),$(document.body).on("click.fecss.modal.hide",".fecss-modal .white-container .hide-modal",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.modal.hide");var s=$(this),a=s.closest(".white-container"),o=s.closest(".fecss-modal");if(a.length){a.removeClass("active").removeClass("in-bg");var t=a.data("fecss-modal-prev")||"";if(""!=t){var c=$("#"+a.data("fecss-modal-prev"));if(c.length){var l=c.closest(".fecss-modal");l.hasClass("active")?l.hasClass("in-bg")&&(o.removeClass("active").removeClass("in-bg"),l.removeClass("in-bg")):(o.removeClass("active"),l.addClass("active").removeClass("in-bg")),c.removeClass("in-bg")}else o.removeClass("active")}else o.removeClass("active");a.data("fecss-modal-prev","").trigger("fecss.active.unset"),$(document.body).trigger("fecss.modal.hide.after",[o,a])}});
$(document.body).on("click.fecss.go-to-top",".go-to-top",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},777)});
$(".line-gallery").each(function(e){var i=$(this);i.on("click.line-gallery.right",".btn-arrow.right",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.length>1?(n.eq(0).hide().insertAfter(t.eq(-1)),n.eq(-1).next(".item").fadeIn("fast")):(n.eq(0).hide().insertAfter(t.eq(-1)),i.find(".img-block .item").eq(0).fadeIn("fast"))}),i.on("click.line-gallery.left",".btn-arrow.left",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.length>1?(n.eq(-1).hide(),t.eq(-1).insertBefore(n.eq(0)).fadeIn("fast")):(n.eq(0).hide(),i.find(".img-block .item").eq(-1).insertBefore(i.find(".img-block .item").eq(0)).fadeIn("fast"))}),i.hasClass("with-timer")&&i.data("fecss-timer",setInterval(function(){i.is(":hover")||i.find(".btn-arrow.right").trigger("click")},3e3))});
$(document.body).on("click.fecss.page-loader.close-loader",".page-loader .close-loader",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.page-loader.close-loader"),$(".page-loader").removeClass("active").empty().remove()});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),l=$(o.attr("href")).eq(0),e=parseInt(o.attr("data-scrollto-diff"))||0,r=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:l.offset().top+e},r)});
$(document.body).on("click.site.big-accordion.surface.surface-btn",".big-accordion .surface .surface-btn",{},function(t){t.preventDefault();var a=$(this),e=a.attr("href"),c=a.closest(".surface"),s=c.find(e+".surface-content"),r=c.attr("data-state");switch(r){case"default":c.attr("data-state","active"),s.slideDown("fast");break;case"active":c.attr("data-state","default"),s.slideUp("fast")}}),$(function(){$(".big-accordion .surface > .surface-content").hide(),$(".big-accordion .surface").attr("data-state","default")});

$(document.body).on("click.site",".bottom-menu-ul li a",{},function(t){t.preventDefault(),$(this).closest(".bottom-menu-ul").find("li").removeClass("active"),$(this).closest("li").addClass("active")});
$(document.body).on("submit.site","form",{},function(t){var e=$(this),s=e.attr("data-input-status")||"";"ok"==s||"1"==s||t.preventDefault()}),$(document.body).on("site.form.required.check","form",{},function(t){t.preventDefault();var e=$(this),s=0;e.find(".input-block[data-required]").each(function(t){var e=$(this),a=e.attr("data-input-status")||"";"ok"!=a&&"1"!=a||(s+=1)}),s==e.find(".input-block[data-required]").length?(e.find(".submit-block").attr("data-input-status","ok"),e.attr("data-input-status","ok")):(e.find(".submit-block").attr("data-input-status",""),e.attr("data-input-status",""))}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="text"] input:not([type="search"]), .input-block[data-required="text"] textarea',{},function(t){t.preventDefault();var e=$(this),s=$(this).val();""!=s&&"text"==e.closest(".input-block").attr("data-required")?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="email"] input',{},function(t){t.preventDefault();var e=$(this),s=$(this).val(),a=/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;""!=s&&"email"==e.closest(".input-block").attr("data-required")&&a.test(s)?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="check-pass"] input',{},function(t){t.preventDefault();var e=$(this),s=$(this).val(),a=$('.input-block input[name="pass"]').val();""!=s&&""!=a&&"check-pass"==e.closest(".input-block").attr("data-required")&&a==s?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block input[type="search"]',{},function(t){t.preventDefault();var e=$(this),s=$(this).val();s.length>2&&"search"==e.closest(".input-block").attr("data-required")?(e.closest(".input-block").attr("data-input-status","ok"),e.closest(".input-block").next(".submit-block").attr("data-input-status","ok")):(e.closest(".input-block").attr("data-input-status",""),e.closest(".input-block").next(".submit-block").attr("data-input-status","")),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("change.site blur.site",".input-block select",{},function(t){t.preventDefault();var e=$(this),s=$(this).find("option:selected").eq(0).attr("value")||"";""!=s&&"select"==e.closest(".input-block").attr("data-required")?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(function(){$(".input-block input, .input-block textarea, .input-block select").trigger("blur.site")});
$(document.body).on("click.site",".tab-container .tab-btns .tab-btn",{},function(t){t.preventDefault();var a=$(this),n=a.closest(".tab-container"),i=a.attr("data-tab-id")||"";n.find(".tab-btns .tab-btn.active").removeClass("active"),a.addClass("active"),n.find(".tab-items .tab-item").removeClass("active"),n.find('.tab-items .tab-item[data-tab-id="'+i+'"]').addClass("active")}),$(document.body).on("site.tab-container.init",".tab-container",{},function(t){t.preventDefault();var a=$(".tab-container"),n=a.attr("data-tab-default");"underfined"!=typeof n&&"underfined"!=n&&""!=n||(n=a.find(".tab-btns .tab-btn:first-child").attr("data-tab-id")||""),a.find('.tab-btns .tab-btn[data-tab-id="'+n+'"]').trigger("click")}),$(function(){$(".tab-container").trigger("site.tab-container.init")});


	
	
	/*
	Событие смены размера экрана, генерация этого события
	*/
	$(window).on('resize',function(event){
		$(function(){$(".arrow-slider").trigger("change-size"),console.log("window-resize .arrow-slider resize")});
$(function(){var s={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},w={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},i="window-width",d="window-height",h=$(window).outerWidth(!0),m=$(window).outerHeight(!0),a=$("html body").eq(0);h<s.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-xs"),h>s.sm.min&&h<s.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-sm"),h>s.md.min&&h<s.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-md"),h>s.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),i="window-width-lg"),m<w.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-xs"),m>w.sm.min&&m<w.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-sm"),m>w.md.min&&m<w.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-md"),m>w.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),d="window-height-lg"),$("html body").eq(0).addClass(i).addClass(d)});
$(function(){$(".table-responsive").each(function(t){var a=$(this),e=a.find("table"),n=a.parent();e.detach();var i=n.outerWidth(!0);a.css({"max-width":i+"px"}).append(e)})});
	}).trigger('resize');
	
	
	/*
	Событие скроллинга экрана, генерация этого события
	*/
	$(window).on('scroll',function(event){
		$(function(){var a=$(document).scrollTop(),o=$(".go-to-top");o.hasClass("active")?a<200&&o.removeClass("active"):a>200&&o.addClass("active")});
	}).trigger('scroll');
	
	
	/*
	Событие ухода со страницы
	*/
	window.onbeforeunload = function(event) {
		//alert(event.target.URL);
		$('body').trigger('fecss.window.unload', [event]);
		return;//return false;
	}
	
	
	/*
	Событие инициализации fecss
	*/
	$(document.body).trigger('fecss.init');
	
	
});