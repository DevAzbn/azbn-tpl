$(document.body).on("fecss.default",null,{},function(o){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(o){console.log("body trigger:fecss.init");var e=(new Date).getTime();$(document.body).attr("data-created_at",e)}),$(document.body).on("fecss.reinit",null,{},function(o){console.log("body trigger:fecss.reinit");var e=(new Date).getTime();$(document.body).attr("data-updated_at",e)}),$(document.body).on("fecss.window.unload",null,{},function(o,e){console.log("body trigger:fecss.window.unload: "+JSON.stringify(e))}),$(document.body).on("fecss.ajax.success",null,{},function(o){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(o,e){console.log("body trigger:fecss.keydown: "+JSON.stringify(e))}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(o){-o.originalEvent.deltaY||o.originalEvent.detail||o.originalEvent.wheelDelta});
$(document.body).on("fecss.changeDOM",".fecss-change-dom",{},function(e,c){console.log(".fecss-change-dom trigger:fecss.changeDOM")}),$(document.body).on("DOMSubtreeModified",".fecss-change-dom",{},function(e,c){$(this).trigger("fecss.changeDOM")});
$(document.body).on("fecss.jssearch",null,{},function(s,e,n){console.log("body trigger:fecss.jssearch "+e);var c=$(document.body);if(c.find(".fecss-jssearch").removeClass().contents().unwrap(),""==e||" "==e);else{var t=new RegExp("("+e+")","ig"),a=0,o="";c.attr("data-fecss-jssearch",e).find("*").contents().each(function(s){3==this.nodeType&&t.test(this.nodeValue)&&($(this).replaceWith(this.nodeValue.replace(t,'<span class="fecss-jssearch">$1</span>')),a++)}),o=a>0?"Найдено: "+a:"Ничего не найдено",n&&n({msg:o,count:a,text:e})}});
$(document.body).on("fecss.modal.show.after",null,{},function(e,o,t){e.preventDefault(),console.log("body trigger:fecss.modal.show.after"),$(window).trigger("resize")}),$(document.body).on("fecss.modal.hide.after",null,{},function(e,o,t){e.preventDefault(),console.log("body trigger:fecss.modal.hide.after"),$(window).trigger("resize")}),$(document.body).on("fecss.active.set",".fecss-modal .white-container",{},function(e,o,t){e.preventDefault(),console.log(".white-container trigger:fecss.active.set")}),$(document.body).on("fecss.active.unset",".fecss-modal .white-container",{},function(e,o,t){e.preventDefault(),console.log(".white-container trigger:fecss.active.unset")});