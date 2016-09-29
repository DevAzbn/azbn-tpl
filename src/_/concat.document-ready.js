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
$(document.body).on("click.fecss.page-loader.close-loader",".page-loader .close-loader",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.page-loader.close-loader"),$("body").removeClass("overflow-hidden"),$(".page-loader").removeClass("active")});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),l=$(o.attr("href")).eq(0),e=parseInt(o.attr("data-scrollto-diff"))||0,r=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:l.offset().top+e},r)});
$('[data-toggle="tooltip"]').tooltip();
$(document.body).on("click.site.big-accordion.surface.surface-btn",".big-accordion .surface .surface-btn",{},function(t){t.preventDefault();var a=$(this),e=a.attr("href"),c=a.closest(".surface"),s=c.find(e+".surface-content"),r=c.attr("data-state");switch(r){case"default":c.attr("data-state","active"),s.slideDown("fast");break;case"active":c.attr("data-state","default"),s.slideUp("fast")}}),$(function(){$(".big-accordion .surface > .surface-content").hide(),$(".big-accordion .surface").attr("data-state","default")});


$(document.body).on("submit.site","form",{},function(t){var e=$(this),s=e.attr("data-input-status")||"";"ok"==s||"1"==s||t.preventDefault()}),$(document.body).on("site.form.required.check","form",{},function(t){t.preventDefault();var e=$(this),s=0;e.find(".input-block[data-required]").each(function(t){var e=$(this),a=e.attr("data-input-status")||"";"ok"!=a&&"1"!=a||(s+=1)}),s==e.find(".input-block[data-required]").length?(e.find(".submit-block").attr("data-input-status","ok"),e.attr("data-input-status","ok")):(e.find(".submit-block").attr("data-input-status",""),e.attr("data-input-status",""))}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="text"] input:not([type="search"]), .input-block[data-required="text"] textarea',{},function(t){t.preventDefault();var e=$(this),s=$(this).val();""!=s&&"text"==e.closest(".input-block").attr("data-required")?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="email"] input',{},function(t){t.preventDefault();var e=$(this),s=$(this).val(),a=/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;""!=s&&"email"==e.closest(".input-block").attr("data-required")&&a.test(s)?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="check-pass"] input',{},function(t){t.preventDefault();var e=$(this),s=$(this).val(),a=$('.input-block input[name="pass"]').val();""!=s&&""!=a&&"check-pass"==e.closest(".input-block").attr("data-required")&&a==s?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block input[type="search"]',{},function(t){t.preventDefault();var e=$(this),s=$(this).val();s.length>2&&"search"==e.closest(".input-block").attr("data-required")?(e.closest(".input-block").attr("data-input-status","ok"),e.closest(".input-block").next(".submit-block").attr("data-input-status","ok")):(e.closest(".input-block").attr("data-input-status",""),e.closest(".input-block").next(".submit-block").attr("data-input-status","")),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("change.site blur.site",".input-block select",{},function(t){t.preventDefault();var e=$(this),s=$(this).find("option:selected").eq(0).attr("value")||"";""!=s&&"select"==e.closest(".input-block").attr("data-required")?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(function(){$(".input-block input, .input-block textarea, .input-block select").trigger("blur.site"),$("form").trigger("site.form.required.check")});
$(document.body).on("click.site",".tab-container .tab-btns .tab-btn",{},function(t){t.preventDefault();var a=$(this),n=a.closest(".tab-container"),i=a.attr("data-tab-id")||"";n.find(".tab-btns .tab-btn.active").removeClass("active"),a.addClass("active"),n.find(".tab-items .tab-item").removeClass("active"),n.find('.tab-items .tab-item[data-tab-id="'+i+'"]').addClass("active")}),$(document.body).on("site.tab-container.init",".tab-container",{},function(t){t.preventDefault();var a=$(".tab-container"),n=a.attr("data-tab-default");"underfined"!=typeof n&&"underfined"!=n&&""!=n||(n=a.find(".tab-btns .tab-btn:first-child").attr("data-tab-id")||""),a.find('.tab-btns .tab-btn[data-tab-id="'+n+'"]').trigger("click")}),$(function(){$(".tab-container").trigger("site.tab-container.init")});

