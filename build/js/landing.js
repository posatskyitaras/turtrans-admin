jQuery.extend(jQuery.easing,{def:"easeOutQuad",easeInOutExpo:function(a,e,t,n,i){return 0==e?t:e==i?t+n:(e/=i/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(2-Math.pow(2,-10*--e))+t}}),function(a){a(function(){a('[data-ride="animated"]').appear(),a("html").hasClass("ie no-ie10")||(a('[data-ride="animated"]').addClass("appear"),a('[data-ride="animated"]').on("appear",function(){var e,t=a(this),n=t.data("animation")||"fadeIn";t.hasClass("animated")||(e=t.data("delay")||0,setTimeout(function(){t.removeClass("appear").addClass(n+" animated")},e))})),a(document).on("click.app",'[href^="#"]',function(e){e.preventDefault();var t=this.hash;a(this).data("jump")&&a("html, body").stop().animate({scrollTop:a(t).offset().top},1e3,"easeInOutExpo",function(){window.location.hash=t})})})}(window.jQuery);
//# sourceMappingURL=landing.js.map
