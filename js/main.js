!function(){$(".full-slider").slick({dots:!0,autoplay:!1,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1,navigation:!0,adaptiveHeight:!0,infinite:!0});var e={rows:1,dots:!0,appendDots:$(".slick-nav"),appendArrows:$(".slick-nav"),accessibility:!0,speed:300,slidesToShow:3,slidesToScroll:3,infinite:!1,responsive:[{breakpoint:991,settings:{slidesToScroll:1,slidesToShow:2,dots:!0}},{breakpoint:768,settings:{slidesToScroll:1,slidesToShow:2,dots:!0}},{breakpoint:575,settings:{slidesPerRow:1,slidesToScroll:1,slidesToShow:1,dots:!0}}]};$(".avil-webinars-slider").slick(e);function o(i,s){this.object=i,this.item=s,this.filterFunc=function(){$(".active").removeClass("active"),$('.js-filter[data-filter="'+this.item+'"]').addClass("active");var i=l.filter(this.item);t.css({opacity:"0",left:"50px"}),setTimeout(function(){t.slick("unslick").empty().append(i).slick(e).css({opacity:"100",left:"0px"})},600)}}var t=$(".avil-webinars-slider"),l=$(".avil-webinars-slider-wrapper .slick-slide > div > *").clone();$("js-filter");function i(){$(".magicBorder").css({width:$("nav.header_nav > ul > li:first-child").width()+40,left:$("nav.header_nav > ul > li:first-child").position().left}),$("nav.header_nav > ul > li").not(".no-magic").hover(function(){var i=$(this).width()+40,s=$(this).position().left;$(".magicBorder").css({width:i,left:s})},function(){$(".magicBorder").css({width:$("nav.header_nav > ul > li:first-child").width()+40,left:$("nav.header_nav > ul > li:first-child").position().left})})}jQuery(".js-filter").on("click",function(i){var s=jQuery(this).attr("data-filter");new o(this,s).filterFunc()}),$(".speakers_gallery").slick({dots:!0,autoplay:!0,autoplaySpeed:5e3,slidesToShow:3,slidesToScroll:1,navigation:!0,infinite:!0,responsive:[{breakpoint:991,settings:{slidesToScroll:1,slidesToShow:2,dots:!0}},{breakpoint:768,settings:{slidesToScroll:1,slidesToShow:2,dots:!0}},{breakpoint:575,settings:{slidesPerRow:1,slidesToScroll:1,slidesToShow:1,dots:!0}}]}),$(".hamburger_icon").click(function(){$("#header_nav").slideToggle(300)}),$(".search-icon").click(function(i){i.stopPropagation(),$("body").addClass("search-show"),$(".search-wrapper input#search").focus()}),$("body").click(function(){$("body").removeClass("search-show")}),$(".search-wrapper").detach().appendTo("body"),$(".search-wrapper form").click(function(i){i.stopPropagation()}),$(window).scroll(function(){100<$(window).scrollTop()&&$("body").removeClass("search-show")}),$("nav.header_nav > ul").append('<div class="magicBorder"></div>'),i(),$(window).on("resize",i)}();