$(function() {
	$(".button-usnet-detail").click(function(event){
		event.stopPropagation();
		$("#modal_common").fadeIn("fast");
	});
	// 範囲外クリックで閉じる
	$('#modal_contents').skOuterClick(function() {
		$("#modal_common").fadeOut("fast");
	});
	// 閉じるボタンで閉じる
	$(".switch-modalclose").click(function(){
		$("#modal_common").fadeOut("fast");
	});
});