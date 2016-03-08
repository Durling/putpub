// 点击右上角图标 显示、隐藏导航
$(document).ready(function(){
		$(".show-menu").click(function(){ 
			$(this).next("div").slideToggle("fast")  
			.siblings(".hide-menu:visible").slideUp("fast");
		});
	});
	
// 导航滚动条 鼠标向上滚动出现 向下隐藏
$(function(){
	var ss = $(document).scrollTop();
	$(window).scroll(function(){
		var s = $(document).scrollTop();
		if(s > 0){
			$('.header-top').addClass('gizle');
			if(s > ss){
				$('.header-top').removeClass('sabit');
			}else{
				$('.header-top').addClass('sabit');
			}
			ss = s;
		}else{
			$('.header-top').removeClass('gizle');
		}
	});
	
});


window.onload = function(){
 $(window).scroll(function() {
  var sTop = $(window).scrollTop();
  
  if (sTop > 500) {
   $('.main-restaurant-up').show();
  } else {
   $('.main-restaurant-up').hide();
  };
  if (sTop > 800) {
   $('.main-restaurant-down').show();
  } else {
   $('.main-restaurant-down').hide();
  };
  if (sTop > 1000) {
   $('.main-restaurant-down2').show();
  } else {
   $('.main-restaurant-down2').hide();
  };
  
  if (sTop > 1500) {
   $('.index_image_phone').show();
   // $(window).unbind('scroll');
  } else {
   $('.index_image_phone').hide();
  };
  
 }); 
};

