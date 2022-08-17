$(function(){
	$("dl.list-accordion > dt").click(function(){
		$(this).toggleClass("active");
		$(this).next("dd").slideToggle(200);
	});
});