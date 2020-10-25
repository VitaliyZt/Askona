$(function () {
	$(".s2__items").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	$(".s4__items").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	
//	$(".header__menu-btn").click(function(e){
//		e.preventDefault();
//		var menu = $(".header__menu");
//		if(menu.is(":hidden")){
//			$(this).addClass("header__menu-btn_active");
//			menu.fadeIn();
//		} else {
//			$(this).removeClass("header__menu-btn_active");
//			menu.fadeOut();
//		}
//	});
//	$(".header__links a").hover(
//		function(){			$(".switcher__item").eq($(this).parent().index()).addClass("switcher__item_hover");
//		},
//		function(){$(".switcher__item").eq($(this).parent().index()).removeClass("switcher__item_hover");
//		}
//	);
});