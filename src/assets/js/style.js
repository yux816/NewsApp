$(function(){
	//控制footer主菜单的指向当前选择的页面
	$("footer>ul>li").click(function(){
		$(this).children('a').children('span').addClass('this');
		$(this).siblings().children('a').children('span').removeClass('this');
		
	})
//	alert(1)
	$(".list>ul>li").click(function(){
//		alert(1)
//		$(this).css({"border-bottom":"2px solid #fff"})
		$(this).css({"border-radius":"10px 10px 0px 0px","background":"white"})
		$(this).siblings().css({"border-radius":"none","background":"#2C3E50"});
		$(this).children('a').css({"color":"#2C3E50"})
		$(this).siblings().children('a').css({"color":"#fff"})
	})
})









