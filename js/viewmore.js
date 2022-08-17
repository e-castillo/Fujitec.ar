$(function() {
	$(".switchbar-more").click(function(event){
		$(".wrapper-morecontents").fadeIn("fast");
		$(this).fadeOut("fast");
	});
});