$(function(){
	$("#search_accordion_btn").click(function(){
		$(this).toggleClass("active");
		$("#search_accordion_box").slideToggle(500);
		$("#button_projectsearch").toggleClass("active");
	});
});