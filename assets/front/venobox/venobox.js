!function(t){var a,e,o,i,n,l,r,d,c,s,v,f,m,b,h,u,g,x,p,y,w,k,C,j,q,z;function H(){t.ajax({url:d,cache:!1}).done((function(t){r.html('<div class="vbox-inline">'+t+"</div>"),X()})).fail((function(){r.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'),X()}))}function D(){r.html('<iframe class="venoframe" src="'+d+'"></iframe>'),X()}function E(t){var a=d.split("/"),e=a[a.length-1],o=t?"?autoplay=1":"";r.html('<iframe class="venoframe" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="//player.vimeo.com/video/'+e+o+'"></iframe>'),X()}function L(t){var a=d.split("/"),e=a[a.length-1],o=t?"?autoplay=1":"";r.html('<iframe class="venoframe" webkitallowfullscreen mozallowfullscreen allowfullscreen src="//www.youtube.com/embed/'+e+o+'"></iframe>'),X()}function P(){r.html('<div class="vbox-inline">'+t(d).html()+"</div>"),X()}function Q(){t(".vbox-content").find("img").one("load",(function(){X()})).each((function(){this.complete&&t(this).load()}))}function X(){i.html(p),r.find(">:first-child").addClass("figlio"),t(".figlio").css("width",s).css("height",v).css("padding",n).css("background",e),j=r.outerHeight(),C=t(window).height(),j+80<C?(h=(C-j)/2,r.css("margin-top",h),r.css("margin-bottom",h)):(r.css("margin-top","40px"),r.css("margin-bottom","40px")),r.animate({opacity:"1"},"slow")}t.fn.extend({venobox:function(h){var C=t.extend({framewidth:"",frameheight:"",border:"0",bgcolor:"#fff",titleattr:"title",numeratio:!1,infinigall:!1,overlayclose:!0},h);return this.each((function(){var h=t(this);if(h.data("venobox"))return!0;h.addClass("vbox-item"),h.data("framewidth",C.framewidth),h.data("frameheight",C.frameheight),h.data("border",C.border),h.data("bgcolor",C.bgcolor),h.data("numeratio",C.numeratio),h.data("infinigall",C.infinigall),h.data("overlayclose",C.overlayclose),h.data("venobox",!0),h.click((function(j){function X(){y=h.data("gall"),u=h.data("numeratio"),f=h.data("infinigall"),(m=t('.vbox-item[data-gall="'+y+'"]')).length>1&&!0===u?(o.html(m.index(h)+1+" / "+m.length),o.show()):o.hide(),w=m.eq(m.index(h)+1),k=m.eq(m.index(h)-1),h.attr(C.titleattr)?(p=h.attr(C.titleattr),i.show()):(p="",i.hide()),m.length>1&&!0===f?(q=!0,z=!0,w.length<1&&(w=m.eq(0)),m.index(h)<1&&(k=m.eq(m.index(m.length)))):(w.length>0?(t(".vbox-next").css("display","block"),q=!0):(t(".vbox-next").css("display","none"),q=!1),m.index(h)>0?(t(".vbox-prev").css("display","block"),z=!0):(t(".vbox-prev").css("display","none"),z=!1))}j.stopPropagation(),j.preventDefault(),h=t(this),g=h.data("overlay"),s=h.data("framewidth"),v=h.data("frameheight"),a=h.data("autoplay")||!1,n=h.data("border"),e=h.data("bgcolor"),q=!1,z=!1,b=!1,d=h.data("href")||h.attr("href"),c=h.data("css")||"",t("body").addClass("vbox-open"),l='<div class="vbox-overlay '+c+'" style="background:'+g+'"><div class="vbox-preloader">Loading...</div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">X</div><div class="vbox-next">next</div><div class="vbox-prev">prev</div></div>',t("body").append(l),x=t(".vbox-overlay"),t(".vbox-container"),r=t(".vbox-content"),o=t(".vbox-num"),i=t(".vbox-title"),r.html(""),r.css("opacity","0"),X(),x.css("min-height",t(window).outerHeight()),x.animate({opacity:1},250,(function(){"iframe"==h.data("type")?D():"inline"==h.data("type")?P():"ajax"==h.data("type")?H():"vimeo"==h.data("type")?E(a):"youtube"==h.data("type")?L(a):(r.html('<img src="'+d+'">'),Q())}));var A=function(){b||(b=!0,g=k.data("overlay"),s=k.data("framewidth"),v=k.data("frameheight"),n=k.data("border"),e=k.data("bgcolor"),d=k.data("href")||k.attr("href"),a=k.data("autoplay"),p=k.attr(C.titleattr)?k.attr(C.titleattr):"",void 0===g&&(g=""),r.animate({opacity:0},500,(function(){x.css("background",g),"iframe"==k.data("type")?D():"inline"==k.data("type")?P():"ajax"==k.data("type")?H():"youtube"==k.data("type")?L(a):"vimeo"==k.data("type")?E(a):(r.html('<img src="'+d+'">'),Q()),h=k,X(),b=!1})))},B=function(){b||(b=!0,g=w.data("overlay"),s=w.data("framewidth"),v=w.data("frameheight"),n=w.data("border"),e=w.data("bgcolor"),d=w.data("href")||w.attr("href"),a=w.data("autoplay"),p=w.attr(C.titleattr)?w.attr(C.titleattr):"",void 0===g&&(g=""),r.animate({opacity:0},500,(function(){x.css("background",g),"iframe"==w.data("type")?D():"inline"==w.data("type")?P():"ajax"==w.data("type")?H():"youtube"==w.data("type")?L(a):"vimeo"==w.data("type")?E(a):(r.html('<img src="'+d+'">'),Q()),h=w,X(),b=!1})))};function F(t){27===t.keyCode&&G()}function G(){t("body").removeClass("vbox-open"),t("body").unbind("keydown",F),x.animate({opacity:0},500,(function(){x.remove(),b=!1,h.focus()}))}t("body").keydown((function(t){37==t.keyCode&&1==z&&A(),39==t.keyCode&&1==q&&B()})),t(".vbox-prev").click((function(){A()})),t(".vbox-next").click((function(){B()}));var I=".vbox-close, .vbox-overlay";return h.data("overlayclose")||(I=".vbox-close"),t(I).click((function(a){".figlio",".vbox-prev",".vbox-next",".figlio *",t(a.target).is(".figlio")||t(a.target).is(".vbox-next")||t(a.target).is(".vbox-prev")||t(a.target).is(".figlio *")||G()})),t("body").keydown(F),!1}))}))}}),t(window).resize((function(){t(".vbox-content").length&&(j=r.height(),C=t(window).height(),j+80<C?(h=(C-j)/2,r.css("margin-top",h),r.css("margin-bottom",h)):(r.css("margin-top","40px"),r.css("margin-bottom","40px")))}))}(jQuery);