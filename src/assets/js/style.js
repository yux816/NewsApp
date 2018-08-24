$(function(){
	//控制footer主菜单的指向当前选择的页面
	$("footer>ul>li").click(function(){
		$(this).children('a').children('span').addClass('this');
		$(this).siblings().children('a').children('span').removeClass('this');
		
	})

	$(".list>ul>li").click(function(){
		$(this).css({"border-bottom":"3px solid #fff"});
		$(this).siblings().css({"border-bottom":"3px solid #2C3E50"})
	})

			
})









